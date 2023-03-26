import React from "react";
import { LandingPage } from "./components";
import { DoctorsInfo } from "./components";
import {FindYourDoctor} from "./components";
import { NgoDetails} from "./components"
import {NgoSearch} from "./components"
import {NgoSearch1} from "./components"
import {DoctorSearchDetails} from "./components"
import {NgoSearchSpare} from "./components"

const App = () => {
  return ( <div className="w.screen h-screen flex flex-col">
    <LandingPage />
    <DoctorsInfo />
    <FindYourDoctor / >
    <NgoDetails />
    <NgoSearch / >
    <NgoSearch1 / >
    <DoctorSearchDetails />
    <NgoSearchSpare />
  </div>)
}

export default App;
