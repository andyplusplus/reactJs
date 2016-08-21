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
  

// There are multiple ways to implement this component. This is one.
var VacancySign = React.createClass({
  render: function() {
    var text;
    if (this.props.hasvacancy) {
      text = 'Vacancy';
    } else {
      text = 'No Vacancy';
    }
    return <div>{text}</div>;
  }
});

/**
// Here is another implementation.
var VacancySign = React.createClass({
  render: function() {
    // Notice how we use a ternary expression, which is a valid JavaScript expression.
    // Uncomment and try using this implementation. Inspect the DOM result. How is it different?
    return <div>{this.props.hasvacancy ? '' : 'No '}Vacancy</div>;
  }
});
**/


ReactDOM.render(
  <VacancySign hasvacancy={false} />,
  document.getElementById('container')
);