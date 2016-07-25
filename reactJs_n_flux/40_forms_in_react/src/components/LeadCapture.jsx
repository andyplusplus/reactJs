var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
	onSubmit: function(e){
		if(!this.refs.fieldEmail.state.valid){
			alert("You suck at filling out forms, Email is alwasy required in a lead capture form. Dummy");
		}else{
			//send requrest to email host or server!
			var httpRequestBody = {
				email: this.refs.fieldEmail.state.value,
				firstName: this.refs.fieldName.state.value,
			};
			console.log("we gottech here");
		}
		this.refs.fieldEmail.clear();
		this.refs.fieldName.clear();

	}, 
	render: function() {
		return (
			<div className="col-sm-3">
				<div className="panel panel-default">
					<div className="panel-body">
						<NameField type="First" ref="fieldName"/> <br/>
						<EmailField ref="fieldEmail"/>
						<button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = LeadCapture;