var React = require('react');
var ListItem = require('./ListItem.jsx');
//var ingredients = [{"id":1,"text":"ham"}, {"id":2,"text":"cheese"},{"id":3,"text":"potatoes"}];
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var IngredientStore = require('../reflux/ingredients-store.jsx');

var List = React.createClass({
	mixins: [Reflux.listenTo(IngredientStore, 'onChange')],
	getInitialState: function(){
		console.log("initial here");
		return {ingredients: []};
	},
	componentWillMount: function(){
		Actions.getIngredients();
	},
	onChange: function(event, ingredients){
		this.setState({ingredients: ingredients});
	},
    render: function() {
    	console.log("render here");
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
