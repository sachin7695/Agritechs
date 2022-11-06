import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ig28i2obu5yie3ry.us.auth0.com"
    clientId="vcHpDyx5PZfFpi3Pk4yXi7zO3KBh3iF0"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);