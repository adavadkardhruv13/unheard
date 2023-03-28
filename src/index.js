import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import DoctorsInfo from './component1/DoctorsInfo';
import ABOUTUS from './component1/ABOUTUS';
import LandingPage from './component1/LandingPage';
import NgoSearch from './component1/NgoSearch';
import FindYourDoctor from './component1/FindYourDoctor';
import FindYourDoctor1 from './component1/FindYourDoctor1';
import NgoDetails from './component1/NgoDetails';
import NgoSearch1 from './component1/NgoSearch1';
import NgoSearchSpare from './component1/NgoSearchSpare';
import NgoSearchSpare1 from './component1/NgoSearchSpare1';
import DoctorSearchDetails from './component1/DoctorSearchDetails';
import DoctorsSearchDetails1 from './component1/DoctorSearchDetails1';
import ChatDoc from './component1/ChatDoc';
import ChatNgo from './component1/ChatNgo';
import VIDEOCALL from './component1/VIDEOCALL';
import VIDEOCALL1 from './component1/VIDEOCALL1';
import VIDEOCALL2 from './component1/VIDEOCALL2';
import VIDEOCALL3 from './component1/VIDEOCALL3';
import VIDEOCALL4 from './component1/VIDEOCALL4';
import VIDEOCALL5 from './component1/VIDEOCALL5';
import VIDEOCALL6 from './component1/VIDEOCALL6';
import VIDEOCALL7 from './component1/VIDEOCALL7';
import VIDEOCALL8 from './component1/VIDEOCALL8';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <LandingPage />
    < VIDEOCALL />
    < VIDEOCALL1 />
    < VIDEOCALL2 />
    < VIDEOCALL3 />
    < VIDEOCALL4 />
    < VIDEOCALL5 />
    < VIDEOCALL6 />
    < VIDEOCALL7/>
    < VIDEOCALL8 />
    <NgoSearch/>
    <NgoSearchSpare1 />
    <ChatDoc />
    <ChatNgo />
    <FindYourDoctor1 />
    <DoctorsSearchDetails1 />
    <ABOUTUS />
    <DoctorsInfo />
    <FindYourDoctor />
    <NgoDetails />
    <NgoSearch />
    <NgoSearch1 />
    <DoctorSearchDetails />
    <NgoSearchSpare />

  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
