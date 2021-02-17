import React from "react";
import "./NavbarOption.css";

function NavbarOption({ text, Icon }) {
	return (
		<div className="navbarOption">
			<Icon />
			<h2>{text}</h2>
		</div>
	);
}

function NavbarLogout({ text, Icon }) {
	return (
		<div className="navbarLogout">
			<Icon />
			<h2>{text}</h2>
		</div>
	);
}

export default NavbarOption;
export { NavbarLogout };
