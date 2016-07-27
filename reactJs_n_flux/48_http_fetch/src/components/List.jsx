var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require ('../services/httpservice');

//var ingredients = [{"id":1,"text":"ham"}, {"id":2,"text":"cheese"},{"id":3,"text":"potatoes"}];

var List = React.createClass({

	getInitialState: function(){
		console.log("initial here");
		return {ingredients: []};
	},

	componentWillMount: function(){
		HTTP.get('/ingredients')
		.then(function(data){
			console.log("willmount data: ", data);
			this.setState({ingredients: data});
		}.bind(this));
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
