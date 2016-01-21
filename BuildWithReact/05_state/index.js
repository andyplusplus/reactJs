<!DOCTYPE html>
<html>
<head>
<script src="//fb.me/react-0.14.3.js"></script>
<script src="//fb.me/react-dom-0.14.3.js"></script>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <div id="container"></div>
</body>
</html>
  
  
var CowClicker = React.createClass({
  getInitialState: function() {
    return {
      clicks: 0
    };
  },

  onCowClick: function(evt) {
    this.setState({
      clicks: this.state.clicks + 1
    });
  },

  render: function() {
    return (
      <div>
        <div>Clicks: {this.state.clicks}</div>
        <img
          src="http://s3.bypaulshen.com/buildwithreact/cow.png"
          onClick={this.onCowClick}
          className="cow"
        />
        <p>Click the cow</p>
      </div>
    );
  }
});


ReactDOM.render(
  <CowClicker />,
  document.getElementById('container')
);