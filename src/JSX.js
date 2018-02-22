import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: "Harper",
	lastName: "Perez"
};


class JSX extends Component {
	render() {
		return (
			<div className="JSX">
				<h1>
					Hello, {formatName(user)}!
				</h1>
			</div>
		);
	}
}

export default JSX;
