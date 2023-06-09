import React from "react";
import {Routes, Route, BrowserRouter as Router
  } from "react-router-dom";
  import LandingPage from "./component1/LandingPage";
  import ChatInterface from "./component1/ChatNgo";
  import ChatInterface1 from "./component1/ChatDoc";
  import VIDEOCALL from "./component1/VIDEOCALL";
  import VIDEOCALL1 from "./component1/VIDEOCALL1";
  import VIDEOCALL2 from "./component1/VIDEOCALL2";
  import VIDEOCALL3 from "./component1/VIDEOCALL3";
  import VIDEOCALL4 from "./component1/VIDEOCALL4";
  import VIDEOCALL5 from "./component1/VIDEOCALL5";
  import VIDEOCALL6 from "./component1/VIDEOCALL6";
  import VIDEOCALL7 from "./component1/VIDEOCALL7";
  import VIDEOCALL8 from "./component1/VIDEOCALL8";
  import NgoSearch from "./component1/NgoSearch";
  import NgoSearch1 from "./component1/NgoSearch1";
  import NgoSearchSpare from "./component1/NgoSearchSpare";
  import NgoSearchSpare1 from "./component1/NgoSearchSpare1";
  import ABOUTUS from "./component1/ABOUTUS";
  import NgoDetails from "./component1/NgoDetails";
  import DoctorsInfo from "./component1/DoctorsInfo";
  import DoctorsSearchDetails from "./component1/DoctorSearchDetails";
  import DoctorsSearchDetails1 from "./component1/DoctorSearchDetails1";
  import FindYourDoctor from "./component1/FindYourDoctor";
  import FindYourDoctor1 from "./component1/FindYourDoctor1";
  import { useEffect } from "react";
  
  function App() {
  
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat-interface" element={<ChatInterface />} />
          <Route path="/chat-interface1" element={<ChatInterface1 />} />
          <Route path="/video-call8" element={<VIDEOCALL />} />
          <Route path="/video-call4" element={<VIDEOCALL1 />} />
          <Route path="/video-call7" element={<VIDEOCALL2 />} />
          <Route path="/video-call1" element={<VIDEOCALL3 />} />
          <Route path="/video-call" element={<VIDEOCALL4 />} />
          <Route path="/video-call6" element={<VIDEOCALL5 />} />
          <Route path="/video-call5" element={<VIDEOCALL6 />} />
          <Route path="/video-call3" element={<VIDEOCALL7 />} />
          <Route path="/video-call2" element={<VIDEOCALL8 />} />
          <Route path="/ngo-search1" element={<NgoSearch />} />
          <Route path="/ngo-search" element={<NgoSearch1 />} />
          <Route path="/ngo-search-spare1" element={<NgoSearchSpare />} />
          <Route path="/ngo-search-spare" element={<NgoSearchSpare1 />} />
          <Route path="/about-us" element={<ABOUTUS />} />
          <Route path="/ngo-details" element={<NgoDetails />} />
          <Route path="/doctors-info" element={<DoctorsInfo />} />
          <Route
            path="/doctors-search-details1"
            element={<DoctorsSearchDetails />}
          />
          <Route
            path="/doctors-search-details"
            element={<DoctorsSearchDetails1 />}
          />
          <Route path="/find-your-doctor1" element={<FindYourDoctor />} />
          <Route path="/find-your-doctor" element={<FindYourDoctor1 />} />
        </Routes>
      </Router>
      
    );
  }
  export default App;
  