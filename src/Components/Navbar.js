import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import NavbarOption from "./NavbarOption";
import { NavbarLogout } from "./NavbarOption";
import HomeIcon from "@material-ui/icons/Home";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import "./NavbarOption.css";

function Navbar() {
	return (
		<div className="navbar">
			<Link to="/home">
				<NavbarOption Icon={HomeIcon} text="Home" />
			</Link>
			<Link to="/profile">
				<NavbarOption Icon={PersonOutlineOutlinedIcon} text="Profile" />
			</Link>
			<Link to="/likedTweets">
				<NavbarOption Icon={FavoriteOutlinedIcon} text="Liked Tweets" />
			</Link>
			<Link to="/">
				<NavbarLogout Icon={ExitToAppOutlinedIcon} text="Log out" />
			</Link>
		</div>
	);
}

export default Navbar;
