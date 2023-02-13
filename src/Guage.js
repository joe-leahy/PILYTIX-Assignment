import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material/";

const Guage = (props) => {
  return (
    <Box
      sx={{
        // backgroundImage: `linear-gradient(45deg, #379f93 0%, #3358f4 100%)`,
        height: "11rem",
        width: "7rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "15px",
        alignItems: "center",
        borderRadius: "12px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0px 0px 12px rgba(0,0,0,.2)"
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: 30,
          letterSpacing: "-.1rem",
          color: "#22223b",
          marginBottom: ".1rem"
        }}
      >
        {props.title}
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            fontWeight: 800,
            border: "2px solid #7CC7FB",
            borderRadius: "5px",
            fontSize: 60,
            letterSpacing: "-.3rem",
            color: "#22223b",
            marginBottom: "8px"
          }}
        >
          <div className="text-gradient">{Math.round(props.prob * 100)}%</div>
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CircularProgress
          variant="determinate"
          value={props.prob * 100}
          sx={{ border: "1.5px dotted #7CC7FB", borderRadius: "10rem" }}
        />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography variant="caption" component="div" color="black">
            {props.prob}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Guage;
