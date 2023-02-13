import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material/";
import LinearProgress from "@mui/material/LinearProgress";

const Guage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(45deg, #379f93 0%, #3358f4 100%)`,
        height: "16rem",
        width: "14rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "15px",
        alignItems: "center",
        borderRadius: "12px",
        marginLeft: "auto",
        marginRight: "auto",
        border: "1px solid grey",
        boxShadow: "3px 3px 12px black"
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: 30,
          letterSpacing: "-.2rem",
          color: "#22223b",
          marginBottom: ".2rem"
        }}
      >
        Hello
        <Box
          sx={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: "0rem",
            marginTop: "-.5rem"
          }}
        >
          {0.4}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            fontWeight: 800,
            border: "2px solid #fff",
            borderRadius: "5px",
            fontSize: 60,
            letterSpacing: "-.2rem",
            color: "#22223b",
            textShadow: "1px 1px 10px rgba(0, 0, 0, 0.4)"
          }}
        >{`${80}%`}</Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          color: "#fff",
          fontSize: 12,
          fontWeight: 600
        }}
      >
        Progress
      </Box>

      <Box sx={{ width: "12rem" }}>
        <LinearProgress
          variant="determinate"
          value={76}
          color="primary"
          sx={{
            height: "2rem",
            borderRadius: "10px",
            boxShadow: "3px 3px 12px black"
          }}
        />
      </Box>
    </Box>
  );
};
export default Guage;
