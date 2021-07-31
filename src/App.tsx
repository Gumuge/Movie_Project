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
        <Route path="/Movie_Project" exact={true}>
            <MainPage />
        </Route>
        <Route exact={true} path="/movie/detail/:MovieId" component={About}>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
