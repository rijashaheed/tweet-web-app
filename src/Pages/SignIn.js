import React, { useState } from "react";
import "./SignIn.css";
import { auth } from "../firebase";
import Sidebar from "./Sidebar";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Container, Row, Col } from "reactstrap";

function SignIn() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				console.log("user signed in");
				history.push("/home");
			})
			.catch((error) => {
				var errorMessage = error.message;
				alert(errorMessage);
			});
	};

	return (
		<>
			<Container fluid>
				<Row>
					<Col xs="6" className="column">
						<Sidebar />
					</Col>
					<Col>
						<div className="signin">
							<h2 className="signin__head">Sign In</h2>
							<Form onSubmit={(e) => e.preventDefault() && false}>
								<div className="signin__input">
									<FormGroup>
										<Input
											className="input-field"
											type="email"
											name="email"
											placeholder="Email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</FormGroup>
								</div>

								<div className="signin__input">
									<FormGroup>
										<Input
											className="input-field"
											type="password"
											name="password"
											placeholder="Password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</FormGroup>
								</div>
							</Form>
							<button className="signin__btn " type="submit" onClick={signIn}>
								Sign In
							</button>
							<p className="signin__bottomOption">
								Don't have an account?
								<Link to="/sign-up"> Sign Up</Link>
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default SignIn;
