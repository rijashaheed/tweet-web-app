import React from "react";
import { Link } from "react-router-dom";

function Error() {
	return (
		<>
			<div className="error">Page not found</div>
			<Link to="/">
				<button>Back to Home</button>
			</Link>
		</>
	);
}

export default Error;
