import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const numbers = [1, 2, 3, 4, 5];

function NumberList(props) {
	const number = props.number;
	const listItems = numbers.map((number) =>
		<li key={number.toString()}>
			{number}
		</li>
	);
	
	return (
		<ul><h1>List of numbers</h1>{listItems}</ul>
	);
}

export default NumberList;
