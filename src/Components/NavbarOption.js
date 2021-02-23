import React /*{ useHistory }*/ from "react";
import "./NavbarOption.css";
import { auth } from "../firebase";

function NavbarOption({ text, Icon }) {
	return (
		<div className="navbarOption">
			<Icon />
			<h2>{text}</h2>
		</div>
	);
}

function NavbarLogout({ text, Icon }) {
	// const history = useHistory();
	const signout = () => {
		auth.onAuthStateChanged((authUser) => {
			console.log("the user is ...", authUser);
			auth.signOut();
		});
	};
	return (
		<button className="navbarLogout" onClick={signout}>
			<Icon />
			<h2>{text}</h2>
		</button>
	);
}

export default NavbarOption;
export { NavbarLogout };
