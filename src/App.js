import React from "react";
import Map from "./components/Map";
import Home from "./components/Home";
import Create from "./components/Create";
import Intro from "./components/Intro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducers } from "./redux";
import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

const AppWrapper = () => {
  const store = createStore(
    combineReducers({
      ...reducers,
    })

    // composeWithDevTools(applyMiddleware(thunk))
  );

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const client_secret = "13512646a9542634eda552b5b8f23acc86f062ca";
  const activities_link = "https://www.strava.com/api/v3/athlete/activities";
  const auth_link = "https://www.strava.com/oauth/token";
  const refresh_token = "caaa3f52fae9712b5fdd56353a84479735170ea0";
  const token = "562b69681325a2f96481869740ef794c27111c88";

  return (
    <Router>
      <div className="App">
        <TopBar />
        <Switch>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AppWrapper;
