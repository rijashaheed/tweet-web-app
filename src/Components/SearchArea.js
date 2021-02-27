/*eslint-disable*/
import React, { useState, useEffect, useContext, useHistory } from "react";
import { AppContext } from "../App";
import Avatar from "./Avatar";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchArea.css";
import { db } from "../firebase";
import { Link } from "react-router-dom";

function SearchArea() {
	// const history = useHistory();
	const appContext = useContext(AppContext);
	const currentUser = appContext.userState.user.uid;
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
							<Link to={`/view-profile/${searchedUser.username}`}>
								<div key={key} className="searchArea__user">
									<Avatar src={val.profilePic} />
									<div className="searchArea__user-text">
										<p className="searchArea__user-text-fullname">{val.fullname}</p>
										<span className="searchArea__user-text-username">
											@{val.username}
										</span>
									</div>
								</div>
							</Link>
						);
					})
					.slice(0, 5)}
			</div>
		</div>
	);
}

export default SearchArea;
