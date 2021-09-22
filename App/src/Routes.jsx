import Login from "./authentication/Login";
import Home from "./components/Home";
import Signup from "./authentication/Signup";
import Setname from "./authentication/Setname";
import Verify from "./authentication/Verify";
import Forgot_password from "./authentication/Forgot_password";
import Errorpage from "./components/Errorpage";
import Profilecomponent from "./components/Profilecomponent";
import Editprofile from "./authentication/Editprofile";
import UpdatePassword from "./authentication/UpdatePassword";
import UpdateUsername from "./authentication/UpdateUsername";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { AuthContextProvider, useAuthState } from "./secure/firebase";
import Play from "./components/pages/Play";
const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
      }
    />
  );
};

const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};

function Routes() {
  return (
    <AuthContextProvider>
      <Router>
        {/* <div>
            <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{' '}
            <Link to="/signup">SignUp</Link>
            
          </div> */}
        {/* 
          <UnauthenticatedRoute exact path="/login" component={Login} /> */}
        <Switch>
          <AuthenticatedRoute exact path="/" component={Home} />
          <AuthenticatedRoute exact path="/setname" component={Setname} />
          <UnauthenticatedRoute exact path="/login" component={Login} />
          <UnauthenticatedRoute exact path="/signup" component={Signup} />
          <AuthenticatedRoute exact path="/verify" component={Verify} />
          <AuthenticatedRoute exact path="/verify" component={Verify} />
          <AuthenticatedRoute
            exact
            path="/profile"
            component={Profilecomponent}
          />
          <AuthenticatedRoute
            exact
            path="/changePassword"
            component={UpdatePassword}
          />
          <AuthenticatedRoute
            exact
            path="/ChangeUsername"
            component={UpdateUsername}
          />
          <UnauthenticatedRoute
            exact
            path="/resetpassword"
            component={Forgot_password}
          />
          <AuthenticatedRoute
            exact
            path="/editprofile"
            component={Editprofile}
          />
          <AuthenticatedRoute exact path="/play" component={Play} />
          <Route>
            <Errorpage />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default Routes;
