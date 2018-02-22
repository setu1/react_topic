import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

class Welcome1 extends Component {
	render() {
		return (
			<div>
				<Welcome name ="swati"/>
			</div>
		);
	}
}

export default Welcome1;

