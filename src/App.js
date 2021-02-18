import React from "react";
import "./App.css";
// import Header from "./Components/Header";
// import FrontPage from "./Pages/FrontPage";
// import SideBar from "./Pages/Sidebar";
// import SignUp from "./Pages/SignUp";
// import CreateTweet from "./Components/CreateTweet";
import Navbar from "./Components/Navbar";
// import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SearchArea from "./Components/SearchArea";
// import SignIn from "./Pages/SignIn";

function App() {
	return (
		<div className="app">
			{/* <FrontPage /> */}
			{/* <SideBar /> */}
			{/* <SignUp /> */}
			{/* <Header /> */}
			{/* <CreateTweet /> */}
			<Navbar />
			<Profile />
			<SearchArea />
			{/* <Home /> */}
			{/* <SignUp /> */}
			{/* <SignIn /> */}
		</div>
	);
}

export default App;
