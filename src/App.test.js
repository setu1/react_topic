iimport React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


it('renders without crashing', () => {
	const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
