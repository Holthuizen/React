require('file-loader?name=[name].[ext]!./index.html')
import React from 'react'; 
import ReactDOM from 'react-dom';
import {App, Counter, Show, NameField } from './App';
import "./App.scss"

const appElement = document.getElementById('app'); 
ReactDOM.render(<App />,appElement); 

const counter = document.getElementById('richard'); 
ReactDOM.render(<Counter />,counter); 

const show = document.getElementById("show");
ReactDOM.render(<Show/>,show)

const name = document.getElementById("name")
ReactDOM.render(<NameField />,name)