import "./App.css";
import Login from "./components/Login";
import FarmList from "./components/FarmList";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* farmlist (miniView) */}
          <Route
            exact
            path="/farmlist"
            render={(routeProps) => <FarmList {...routeProps} />}
          />
          {/* login */}
          <Route
            exact
            path="/"
            render={(routeProps) => <Login {...routeProps} />}
          />
          <Route
            exact
            path="*"
            render={(routeProps) => <NotFound {...routeProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
