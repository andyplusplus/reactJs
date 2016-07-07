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

		var divStyle = {
			marginTop: 30
		};
		var headingStyle = {

		};

		if(this.props.headingColor) {
			headingStyle.background = this.props.headingColor;
		}

		return (
			<div style={divStyle} className="col-sm-4">
				<div className="panel panel-default">
					<div style={headingStyle} className="panel-heading">
						<h3>{this.props.title}</h3>
					</div>
					<div className="row panel-body">
						<form onSubmit={this.handleSubmit}>
							<div className="col-sm-9">
								<input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
							</div>
							<div className="col-sm-3">
								<button className="btn btn-primary">Add</button>							
							</div>
						</form>
					</div>
					<List items={this.state.items}></List>					
				</div>
			</div>
		);
	}
});

module.exports = ListManager;
//					<button>Add</button>
//<input type="submit" value="submit"/>