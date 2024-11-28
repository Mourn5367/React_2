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
import Accommodate from "./chap07_20240926/Accommodate";
import Toggle from "./chap08_20241010/Toggle";
import MyButton from "./chap08_20241010/MyButton";
import ToggleFunc from "./chap08_20241010/ToggleFunc";
import ClickButton from "./chap08_20241010/ClickButton";
import Counter from "./chap08_20241010/Counter";
import InputTest from "./chap08_20241010/InputTest";
import ConfirmButton from "./chap08_20241010/ConfirmButton";
import ConfirmButtonFunction from "./chap08_20241010/ConfirmButtonFunction";
import Test from "./test/Test";
import TTT from "./test/TTT";
import LoginControl from "./chap09_20241107/LoginControl";
import MailBox from "./chap09_20241107/MailBox";
import LoginControl2 from "./chap09_20241107/LoginControl2";
import LandingPage from "./chap09_20241107/LandingPage";
import AppNumberList from "./chap10_20241114/AppNumberList";
import StudentAttendance from "./chap10_20241114/StudentAttendance";
import AppStudentAttendance from "./chap10_20241114/AppStudentAttendance";
import AttendanceCard from "./chap10_20241114/avartarAttendance/AttendanceCard";
import NameForm from "./chap11_20241121/NameForm";
import RequestForm from "./chap11_20241121/RequestForm";
import NameRequestForm from "./chap11_20241121/NameRequestForm";
import SignUp from "./chap11_20241121/SignUp";
import Writing from "./writing/writing";
import Calculator from "./chap12_20241128/Calculator";
import Calculator2 from "./chap12_20241128/Calculator2";
import Calculator3 from "./chap12_20241128/Calculator3";
import DistanceConverter from "./chap12_20241128/distance/DistanceConverter";

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(()=>{
// root.render(
//   <React.StrictMode>
//     <Clock/>
//   </React.StrictMode>
// )},34);


root.render(
    <React.StrictMode>
    <DistanceConverter/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
