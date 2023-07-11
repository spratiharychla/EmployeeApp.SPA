import logo from "./logo.svg";

// import Dashboard from "./Pages/Dashboard";

import "./App.css";

import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import { SecureRoute, LoginCallback, Security } from "@okta/okta-react";

import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Notification from "./TeamchlaNotification.js"

// const oktaAuth = new OktaAuth({

//   issuer: "https://oktalogin.chla.org/oauth2/aus97ak2tybdIIyPP2p7",

//   redirectUri: `${window.location.origin}/login/callback`,

//   clientId: "0oa97au7qwrDWoq4M2p7",

//   scopes: ["openid", "profile", "offline_access", "empapp.default"]

// });

const oktaAuth = new OktaAuth({

  issuer: "https://oktalogin.chla.org/oauth2/aus97ak2tybdIIyPP2p7",

  redirectUri: `${window.location.origin}/login/callback`,

  clientId: "0oa97au7qwrDWoq4M2p7",

  scopes: ["openid", "email" ,"teamchla:admin"],
});
function Comp(){

  return(
    <div>
      Hello
    </div>
  )
}
function App() {
  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    if (history === undefined) {
      history.push(toRelativeUrl(originalUri, window.location.origin));
    } else {
      history.replace(toRelativeUrl(originalUri, window.location.origin));
    }
  };

  const App = () => {
    const history = useHistory();

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
      history.replace(
        toRelativeUrl(originalUri || "/", window.location.origin)
      );
    };
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      {/* <Route path='/' exact={true} component={Dashboard} /> */}

      <SecureRoute path="/" component={Notification} />

      <Route path="/login/callback" component={LoginCallback} />
    </Security>
  );
}

const AppWithRouterAccess = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouterAccess;