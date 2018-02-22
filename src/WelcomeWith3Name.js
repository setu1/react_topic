import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

class WelcomeWith3Name extends Component {
	render() {
		return (
			<div>
				<Welcome name ="sara"/>
				<Welcome name="Cahal" />
				<Welcome name="Edite" />
			</div>

		);
	}
}

export default WelcomeWith3Name;

