import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import './chap03/Book.css';

import App from './App';
import "./Font.css";
import reportWebVitals from './reportWebVitals';
import Library  from "./chap03/Library";
import ConfirmDialog from "./chap04_20240905/ConfirmDialog";
//import "./chap04_20240905/Chap04.css";
//import "./chap04_20240905/Clock.css";
import Clock from "./chap04_20240905/Clock";
import {CommentList} from "./chap05_20240912/CommentList";
//import "./chap06_20240919/Chap06.css";
import NotificationList from "./chap06_20240919/NotificationList";
const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(()=>{
// root.render(
//   <React.StrictMode>
//     <Clock/>
//   </React.StrictMode>
// )},34);

root.render(
    <NotificationList/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
