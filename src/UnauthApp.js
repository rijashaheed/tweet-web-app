import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function UnauthApp() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/sign-up" component={SignUp} />
					<Route path="/sign-in" component={SignIn} />
				</Switch>
			</Router>
		</div>
	);
}

export default UnauthApp;
