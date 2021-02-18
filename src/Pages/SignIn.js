import React, { useState } from "react";
import { auth } from "../firebase";
import Sidebar from "./Sidebar";
import {
	Button,
	Form,
	FormGroup,
	Input,
	Container,
	Row,
	Col,
} from "reactstrap";

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				console.log("user signed in");
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
						<div className="sign-up">
							<h3 className="sign-up-head">Sign In</h3>
							<Form onSubmit={(e) => e.preventDefault() && false}>
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
							</Form>
							<Button variant="custom" type="submit" onClick={signIn}>
								Sign In
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default SignIn;
