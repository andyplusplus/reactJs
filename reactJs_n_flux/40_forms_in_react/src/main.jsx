var React = require('react');
var ReactDOM = require('react-dom');
var EmailField = require('./components/EmailField.jsx');
var LeadCapture = require('./components/LeadCapture.jsx');

ReactDOM.render(<LeadCapture/>, document.getElementById('email'));
//ReactDOM.render(<EmailField/>, document.getElementById('email'));