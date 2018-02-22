import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
	<li>{numbers}</li>
);



export default listItems;
