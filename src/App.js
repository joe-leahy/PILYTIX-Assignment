/*
Developed By: Joseph Leahy
Email: josleahy@icloud.com
Time spent: Approx. 10 hours 
This assignment was completed entirely on my own.
- Joseph Leahy 02/13/2023
*/

import React, { useState } from "react";
import OppCard from "./OppCard";
import "./styles.css";
import BasicTable from "./Table";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import * as opportunities from "./opportunities.json";

const App = () => {
  const data = opportunities.default;

  const [view, setView] = useState("Table");
  const [opp, setOpp] = useState({});

  //set OppCard Display based on row clicked
  const setDisplay = (display, row) => {
    setView(display);
    setOpp(row);
  };

  //handle left and right arrow clicks
  const nextRow = () => {
    const index = data[opp.oppId];
    setOpp(index);
  };

  const prevRow = () => {
    const index = data[opp.oppId - 2];
    setOpp(index);
  };

  return (
    <div className="App">
      <div className="pageTitle">
        <img src={"./Logo.png"} alt="Logo" height="90px" />
        <h2>Scored Opportunities</h2>
      </div>
      {view === "Table" ? (
        <BasicTable setDisplay={setDisplay} />
      ) : view === "OppCard" ? (
        <>
          {/* Buttons can't be clicked if at the start or end of data array */}
          <OppCard setDisplay={setDisplay} data={opp} />
          {opp.oppId > 1 ? (
            <button className="prev" onClick={prevRow}>
              <ArrowBackIosNewIcon fontSize="large" />
            </button>
          ) : null}
          {opp.oppId < 10 ? (
            <button className="next" onClick={nextRow}>
              <ArrowForwardIosIcon fontSize="large" />
            </button>
          ) : null}

          <BasicTable setDisplay={setDisplay} />
        </>
      ) : null}
    </div>
  );
};

export default App;
