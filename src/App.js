import React from "react";
import "./App.css";
// import Header from "./Components/Header";
// import FrontPage from "./Pages/FrontPage";
// import SideBar from "./Pages/Sidebar";
// import SignUp from "./Pages/SignUp";
// import CreateTweet from "./Components/CreateTweet";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
	return (
		<div className="app">
			{/* <FrontPage /> */}
			{/* <SideBar /> */}
			{/* <SignUp /> */}
			{/* <Header /> */}
			{/* <CreateTweet /> */}
			<Navbar />
			<Home />
		</div>
	);
}

export default App;
