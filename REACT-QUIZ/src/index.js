require('file-loader?name=[name].[ext]!./index.html')
import React from 'react'; 
import ReactDOM from 'react-dom';
import {App, Next} from './App';
import "./App.scss"

const app = document.getElementById('app')
ReactDOM.render(<App />, app)

const current_question = document.getElementById('current_question')
ReactDOM.render(<Next />, current_question)