/*eslint-disable*/
import React, { useEffect, useReducer, createContext } from "react";
import "./App.css";
import { auth } from "./firebase";
// import CircularProgress from "@material-ui/core/CircularProgress";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SearchArea from "./Components/SearchArea";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import LikedTweets from "./Pages/LikedTweets";
import SignIn from "./Pages/SignIn";

// const Loader = () => {
// 	return <CircularProgress />;
// };

export const AppContext = createContext();

const initialState = {
	user: null,
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

function App() {
	const [user, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("the user is ...", authUser.user);

			if (authUser) {
				console.log(authUser);
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				//the user is logged out
				console.log("user is logged out");
				dispatch({
					type: "SET_USER",
					user: {},
				});
			}
		});
	}, []);
	return (
		<AppContext.Provider value={{ userState: user, userDispatch: dispatch }}>
			<div className="app">
				<Router>
					<Switch>
						<Route path="/" exact component={SignIn} />
						<Route path="/home">
							<Navbar />
							<Home />
							<SearchArea />
						</Route>
						<Route path="/profile">
							<Navbar />
							<Profile />
							<SearchArea />
						</Route>
						<Route path="/likedTweets">
							<Navbar />
							<LikedTweets />
							<SearchArea />
						</Route>
						<Route path="/sign-up">
							<SignUp />
						</Route>
						<Route path="/*" children={<Error />} />
					</Switch>
				</Router>
			</div>
		</AppContext.Provider>
	);
}

export default App;
