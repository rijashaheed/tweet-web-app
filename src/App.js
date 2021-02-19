import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Header from "./Components/Header";
// import FrontPage from "./Pages/FrontPage";
// import SideBar from "./Pages/Sidebar";
// import SignUp from "./Pages/SignUp";
// import CreateTweet from "./Components/CreateTweet";
// import Navbar from "./Components/Navbar";
// import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SearchArea from "./Components/SearchArea";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import LikedTweets from "./Pages/LikedTweets";
import SignUp from "./Pages/SignUp";
// import SignIn from "./Pages/SignIn";

function App() {
	return (
		<div className="app">
			<Router>
				{/* <Navbar /> */}
				<SignUp />
				{/* <Switch>
					<Route path="/" exact component={Home} />
					<Route path="/profile" component={Profile} />
					<Route path="/likedTweets" component={LikedTweets} />
					<Route path="/*" children={<Error />} />
				</Switch> */}
				{/* <SearchArea /> */}
			</Router>

			{/* <FrontPage /> */}
			{/* <SideBar /> */}
			{/* <SignUp /> */}
			{/* <Header /> */}
			{/* <CreateTweet /> */}
			{/* <Navbar /> */}
			{/* <Profile /> */}
			{/* <Home /> */}
			{/* <SearchArea /> */}
			{/* <Home /> */}
			{/* <SignUp /> */}
			{/* <SignIn /> */}
		</div>
	);
}

export default App;
