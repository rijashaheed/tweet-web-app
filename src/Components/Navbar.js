import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import NavbarOption from "./NavbarOption";
import { NavbarLogout } from "./NavbarOption";
// import Home from "../Pages/Home";
import HomeIcon from "@material-ui/icons/Home";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import "./NavbarOption.css";

function Navbar() {
	return (
		<div className="navbar">
			<Link to="/">
				<NavbarOption Icon={HomeIcon} text="Home" />
			</Link>
			<Link to="/profile">
				<NavbarOption Icon={PersonOutlineOutlinedIcon} text="Profile" />
			</Link>
			<Link to="/likedTweets">
				<NavbarOption Icon={FavoriteOutlinedIcon} text="Liked Tweets" />
			</Link>
			<NavbarLogout Icon={ExitToAppOutlinedIcon} text="Log out" />
		</div>
	);
}

export default Navbar;
