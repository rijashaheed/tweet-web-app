import React from "react";
import Search from "./Search";
import "../Components.css";

function Header() {
	return (
		<div className="header">
			<h2>Tweet Web App</h2>
			<Search />
		</div>
	);
}

export default Header;
