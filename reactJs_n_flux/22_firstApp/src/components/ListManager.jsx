var React = require('react');
var List = require('./List.jsx');

var ListManager=React.createClass({
	getInitialState: function() {
		return {items: [], newItemText: ''};
	}, 
	onChange: function(e) {
		this.setState({newItemText: e.target.value});
	},
	handleSubmit: function(e){
		e.preventDefault();

		//mutate data here
		var currentItems = this.state.items;
		currentItems.push(this.state.newItemText);
		this.setState({items: currentItems, newItemText: ' '});
		//console.log(JSON.stringify(this.state));
	},
	render: function(){
		return (
			<div>
				<h3>{this.props.title}</h3>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.newItemText} />
					<input type="submit" value="submit"/>
				</form>
				<List items={this.state.items}></List>

			</div>
		);
	}
});

module.exports = ListManager;
//					<button>Add</button>