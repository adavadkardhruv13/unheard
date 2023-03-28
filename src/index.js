import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import DoctorsInfo from './component1';
import ABOUTUS from './component1';
import LandingPage from './component1';
import NgoSearch from './component1';
import FindYourDoctor from './component1';
import FindYourDoctor1 from './component1';
import NgoDetails from './component1';
import NgoSearch1 from './component1';
import NgoSearchSpare from './component1';
import NgoSearchSpare1 from './component1';
import DoctorSearchDetails from './component1';
import DoctorsSearchDetails1 from './component1';
import ChatDoc from './component1';
import ChatNgo from './component1';
import VIDEOCALL from './component1';
import VIDEOCALL1 from './component1';
import VIDEOCALL2 from './component1';
import VIDEOCALL3 from './component1';
import VIDEOCALL4 from './component1';
import VIDEOCALL5 from './component1';
import VIDEOCALL6 from './component1';
import VIDEOCALL7 from './component1';
import VIDEOCALL8 from './component1';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    < VIDEOCALL />
    < VIDEOCALL1 />
    < VIDEOCALL2 />
    < VIDEOCALL3 />
    < VIDEOCALL4 />
    < VIDEOCALL5 />
    < VIDEOCALL6 />
    < VIDEOCALL7/>
    < VIDEOCALL8 />
    < NgoSearch/>
    < NgoSearchSpare1 />
    < ChatDoc />
    < ChatNgo />
    < LandingPage />
    < FindYourDoctor1 />
    < DoctorsSearchDetails1 />
    < ABOUTUS />
    < DoctorsInfo />
    < FindYourDoctor />
    < NgoDetails />
    < NgoSearch1 />
    < DoctorSearchDetails />
    < NgoSearchSpare />

  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
