import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => (
  <Router>


    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Lesson} />
        <Route exact path="/lessons" component={Lesson} />
        <Route exact path="/lessons/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
q