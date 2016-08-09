var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var IngredientStore = Reflux.createStore({

	listenables: [Actions],

	getIngredients: function() {
		HTTP.get('/ingredients')
		.then(function(data){ 
			//console.log("willmount data: ", data);
			//this.setState({ingredients: data});			
			this.ingredients = data; 
			this.fireUpdate();
		}.bind(this));	
	},

	postIngredient: function(text) {
		// Posted ingredient to the server, now we got successful callback		
		if (!this.ingredients){
			this.ingredients = [];
		}

		var ingredient = {
			"text": text,
			"id": Math.floor(Date.now() / 1000) + text
		};

		this.ingredients.push(ingredient);
		this.fireUpdate();

		HTTP.post('/ingredients', ingredient)
		.then(function(response) {
			this.getIngredients();
		}.bind(this));
	},

	fireUpdate: function() {
		this.trigger('change', this.ingredients);
	}
});

module.exports = IngredientStore;

/*
var TodoStore = Reflux.createStore({

});

module.exports = {
	Ing: IngredientStore,
	Todo: TodoStore
};
*/