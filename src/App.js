import React, { useState } from "react";
import Calendar from "react-calendar";
import Navbar from "./Components/Navbar";
import "react-calendar/dist/Calendar.css";
import "./App.css";

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Navbar />
      <div className="container cal">
        <div className="row">
          <div className="col-6">
            <Calendar onChange={onChange} value={value} />
          </div>
          <div className="col-6">form</div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
