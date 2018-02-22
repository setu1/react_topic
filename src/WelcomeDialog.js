import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function FancyBorder(props) {
	return (
		<div className={"FancyBorder " + props.color}>
			{props.children}
		</div>
	);
}

function Dialog(props) {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
				{props.title}
			</h1>
			<p className="Dialog-message">
				{props.message}
			</p>
		</FancyBorder>
	);
}

function WelcomeDialog() {
	return (
		<Dialog
			title="Welcome"
			message="Thank you for visiting our spacecraft!" />
	);
}

export default WelcomeDialog;
