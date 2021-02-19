import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchArea.css";

function SearchArea() {
	return (
		<div className="searchArea">
			<div className="searchArea__input">
				<input placeholder="Search" type="text" />
				<SearchIcon className="searchArea__searchIcon" />
			</div>
		</div>
	);
}

export default SearchArea;
