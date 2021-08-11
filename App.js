import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import "./Profile.css";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
