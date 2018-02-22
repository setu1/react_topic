import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const numbers = [1, 2, 3, 4, 5];  

function ListItem(props) {
	return <li>{props.value}</li>;
}

function NumberListS(props) {
	const number = props.number;
	const listItems = numbers.map((number) =>
		<ListItem key={number.toString()}
			value={number} />
	);
	return (
		<ul><h1>List of numbers</h1>
			{listItems}
		</ul>
	);
}


export default NumberListS;