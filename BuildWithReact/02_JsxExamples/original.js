<div className="red">Children Text</div>;
<MyCounter count={3 + 5} />;

// Here, we set the "scores" attribute below to a JavaScript object.
var gameScores = {
  player1: 2,
  player2: 5
};
<DashboardUnit data-index="2">
  <h1>Scores</h1>
  <Scoreboard className="results" scores={gameScores} />
</DashboardUnit>;
  
  
  
//The above gets compiled to the following without JSX. I hope you will agree JSX syntax reads more naturally.

React.createElement("div", { className: "red" }, "Children Text");
React.createElement(MyCounter, { count: 3 + 5 });

React.createElement(
  DashboardUnit,
  { "data-index": "2" },
  React.createElement("h1", null, "Scores"),
  React.createElement(Scoreboard, { className: "results", scores: gameScores })
);