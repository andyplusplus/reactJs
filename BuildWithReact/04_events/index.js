var BannerAd = React.createClass({
  onBannerClick: function(evt) {
    // codez to make the moneys
  },

  render: function() {
    // Render the div with an onClick prop (value is a function)
    return <div onClick={this.onBannerClick}>Click Me!</div>;
  }
});

