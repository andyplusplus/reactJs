var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {pid: ""};
	},
	componentDidMount: function() {
		this.setState({pid: this.props.params.productId});
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({pid: nextProps.params.productId});	
	},
	render: function(){
		return (
			<h1>Hi, I'm product number {this.state.pid}</h1>
		);
	}
});