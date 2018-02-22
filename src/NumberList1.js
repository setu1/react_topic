import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function ListItem(props) {
	return <li>{props.value}</li>;
}

function NumberList1(props) {
	const number = props.number;
	return (
		<ul>
			<h1>List of numbers</h1>
			{numbers.map((number) =>
				<ListItem key={number.toString()}
					value={number} />
			)}
		</ul>
	);
}

const numbers = [1, 2, 3, 4, 5];


export default NumberList1;
