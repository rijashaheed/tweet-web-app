import React from "react";
import "./Navbar.css";
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
			<NavbarOption Icon={HomeIcon} text="Home" />
			<NavbarOption Icon={PersonOutlineOutlinedIcon} text="Profile" />
			<NavbarOption Icon={FavoriteOutlinedIcon} text="Liked Tweets" />
			<NavbarLogout Icon={ExitToAppOutlinedIcon} text="Logout" />
		</div>
	);
}

export default Navbar;
