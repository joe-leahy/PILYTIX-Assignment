import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Guage from "./Guage";
import StarIcon from "@mui/icons-material/Star";
import ReLineChart from "./ReLineChart";
import ReBarChart from "./ReBarChart";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

const OppCard = (props) => {
  const { setDisplay } = props;

  return (
    <Box
      //darken background when OppCard is displayed
      sx={{
        position: "absolute",
        backgroundColor: "rgba(0,0,0,.5)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Card
        //Main container for OppCard
        sx={{
          display: "flex",
          height: "85%",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 0px 100px black",
          backgroundColor: "#F6FAFE",
          marginBottom: "5rem"
        }}
      >
        {/* Left side of OppCard */}
        <div className="dataContainer">
          <div className="dataContainerTop">
            <Typography
              sx={{ fontSize: 20, fontWeight: 800, color: "#74A9F9" }}
            >
              {props.data.oppName}
            </Typography>
            <div className="infoContainer">
              <div className="infoLine">
                <div className="infoLabel">Product:</div>
                <div className="infoValue">{props.data.product}</div>
              </div>

              <div className="infoLine">
                <div className="infoLabel">Amount:</div>
                <div className="infoValue">${props.data.amount}</div>
              </div>

              <div className="infoLine">
                <div className="infoLabel">Stage:</div>
                <div className="infoValue">{props.data.stage}</div>
              </div>

              <div className="infoLine">
                <div className="infoLabel">Representative:</div>
                <div className="infoValue">{props.data.salesRepName}</div>
              </div>
            </div>
          </div>

          <div className="dataContainerMid">
            <div className="guageTitle">Probabilities</div>
            <div className="guageContainer">
              <Guage prob={props.data.repProbability} title="Rep" />
              <Guage prob={props.data.pilytixProbability} title="Pilytix" />
            </div>
          </div>

          <div className="dataContainerBottom">
            <div>PILYTIX Tier</div>
            <div>
              {Array.from(
                { length: Number(props.data.pilytixTier.slice(0, 1)) },
                (_, i) => (
                  <StarIcon key={i} fontSize="large" />
                )
              )}
            </div>
          </div>
          <div className="buttonContainer">
            <Button variant="contained" onClick={() => setDisplay("Table")}>
              Return
            </Button>
          </div>
        </div>

        {/* Right side of OppCard */}
        <div className="chartsContainer">
          <div className="barChart">
            {props.data.pilytixFactorsIncreasingWin &&
            props.data.pilytixFactorsDecreasingWin ? (
              <ReBarChart
                incFactors={props.data.pilytixFactorsIncreasingWin}
                decFactors={props.data.pilytixFactorsDecreasingWin}
                name={"Probability Factors"}
              />
            ) : props.data.pilytixFactorsIncreasingWin &&
              !props.data.pilytixFactorsDecreasingWin ? (
              <ReBarChart
                incFactors={props.data.pilytixFactorsIncreasingWin}
                decFactors={[]}
                name={"Probability Factors"}
              />
            ) : !props.data.pilytixFactorsIncreasingWin &&
              props.data.pilytixFactorsDecreasingWin ? (
              <ReBarChart
                incFactors={[]}
                decFactors={props.data.pilytixFactorsDecreasingWin}
                name={"Probability Factors"}
              />
            ) : (
              "No Probability Factors to Display"
            )}
          </div>

          <div className="chartTitle">
            <NorthIcon />
            Current Factors Affecting Probabilities
            <NorthIcon />
          </div>
          <div className="chartTitle">
            <SouthIcon />
            Probability History
            <SouthIcon />
          </div>

          <div className="lineChart">
            {props.data.probabilityHistory ? (
              <ReLineChart data={props.data.probabilityHistory} />
            ) : (
              "No Probability History to Display"
            )}
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default OppCard;
