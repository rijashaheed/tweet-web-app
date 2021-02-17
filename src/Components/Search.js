import React from "react";
import { Input, FormGroup } from "reactstrap";
import "../Components.css";

function Search() {
	return (
		<div className="search">
			<FormGroup>
				<Input
					className="input-field"
					type="text"
					name="fullname"
					placeholder="Searchmm"
					// value={}
					// onChange={(e) => setFullname(e.target.value)}
				/>
			</FormGroup>
			<i class="fas fa-search"></i>
		</div>
	);
}

export default Search;
