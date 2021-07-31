import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./Components/MainPage";
import About from "./Components/About";

//function App(props : Movie): JSX.Element 
function App(): JSX.Element {
  
  return (
    <Router>
      <div>
        <Switch>
          <Route exact={true} path="/movie/detail/:MovieId" component={About}>
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/" exact={true}>
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
