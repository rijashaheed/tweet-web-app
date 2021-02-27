/*eslint-disable*/
import React, { useState, useEffect } from "react";
import Avatar from "./Avatar";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import "./SearchArea.css";
import { db } from "../firebase";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

function SearchArea() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	const [users, setUsers] = useState();
	const [searchedUser, setSearchedUser] = useState("");

	let arr = [];

	useEffect(() => {
		db //it calls tweets from firebase
			.ref("users")
			.orderByChild("createdOn")
			.once("value", function (snapshot) {
				snapshot.forEach(function (childSnapshot) {
					arr.push(childSnapshot);
					setUsers(arr.map((elem) => elem.val()));
					console.log("users", users);
				});
				console.log("outside loop", users);
				// users.map((user) => {
				// 	console.log(user);
				// });
			});
	}, []);

	return (
		<div className="searchArea">
			<div className="searchArea__input">
				<input
					placeholder="Search"
					type="text"
					onChange={(event) => {
						setSearchedUser(event.target.value);
					}}
				/>
				<SearchIcon className="searchArea__searchIcon" />
			</div>

			<div>
				<h6 className="searchArea__head">People you may know</h6>
				{users
					.filter((user) => {
						if (searchedUser == "") {
							return user;
						} else if (
							user.fullname.toLowerCase().includes(searchedUser.toLowerCase())
						) {
							return user.fullname;
						}
					})
					.map((val, key) => {
						return (
							<div key={key} className="searchArea__user">
								<Avatar src={val.profilePic} />
								<div className="searchArea__user-text">
									<p className="searchArea__user-text-fullname">{val.fullname}</p>
									<span className="searchArea__user-text-username">@{val.username}</span>
								</div>
								<button
									className="searcArea__followBtn"
									onFocus={() => {
										"followed", "d";
									}}
								>
									Follow
								</button>
							</div>
						);
					})
					.slice(0, 5)}
			</div>
		</div>
	);
}

export default SearchArea;

// users.map((user) => {
// 	console.log(user.username);
// });

// const filteredUsers = users.filter((user) => {
// 	console.log(
// 		user.fullname.toLowerCase().indexOf(searchedUser.toLowerCase()) !== -1
// 	);
// });

// const DisplayUser = ({ user }) => {
// 	return (
// 		<>
// 			<p>{user.fullname}</p>
// 			<p>{user.username}</p>
// 		</>
// 	);
// };

// const onChange = (event) => {
// 	console.log(event.target.value);
// };

// const filteredUsers = users.filter((user) => {
// 	return user.fullname.toLowerCase().indexOf(search.toLowerCase()) !== -1;
// });
