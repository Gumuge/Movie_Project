import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./Components/MainPage";
import About from "./Components/About";
import Favorite from "./Components/Favorite";

//function App(props : Movie): JSX.Element 
function App(): JSX.Element {
  
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/" exact={true}>
            <MainPage />
        </Route>
        <Route exact={true} path="/movie/detail/:MovieId" component={About}>
        </Route>
        <Route exact={true} path="/favorite" component = {Favorite}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
