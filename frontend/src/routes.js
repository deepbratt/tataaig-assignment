import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/home";
import Meals from "./screens/meals";
const Routes = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);

  return (
    <div className="App">
      <Router>
        <Switch>
          {!isLoggedIn ? (
            <Route path="/" exact component={Home} />
          ) : (
            <Route path="/" exact component={Meals} />
          )}
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;
