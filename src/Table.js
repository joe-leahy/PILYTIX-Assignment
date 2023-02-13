import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import * as opportunities from "./opportunities.json";

const BasicTable = (props) => {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const { setDisplay } = props;
  const data = opportunities.default;

  function handleRowClick(event, row) {
    setDisplay("OppCard", row);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          style={{ minWidth: 650, backgroundColor: "#F6FAFE" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: "20px",
                  letterSpacing: "-1px"
                }}
                align="left"
              >
                Opp Name
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: "20px",
                  letterSpacing: "-1px"
                }}
                align="left"
              >
                Opp Stage
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: "20px",
                  letterSpacing: "-1px"
                }}
                align="right"
              >
                Rep Probability
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: "18px",
                  letterSpacing: "-1px"
                }}
                align="right"
              >
                PX Probability
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: "20px",
                  letterSpacing: "-1px"
                }}
                align="left"
              >
                PX Tier
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: "20px",
                  letterSpacing: "-1px"
                }}
                align="right"
              >
                Amount
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: "20px",
                  letterSpacing: "-1px"
                }}
                align="left"
              >
                Product
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: "20px",
                  letterSpacing: "-1px"
                }}
                align="left"
              >
                Sales Rep
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                onClick={(event) => {
                  handleRowClick(event, row);
                }}
                key={row.oppId}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": {
                    boxShadow: "3px 3px 8px black",
                    backgroundImage:
                      "linear-gradient(to right, #74A9F9, #7CC7FB)",
                    cursor: "pointer"
                  }
                }}
              >
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 800,
                    fontSize: "14px"
                  }}
                  component="th"
                  scope="row"
                >
                  {row.oppName}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 800,
                    fontSize: "14px"
                  }}
                  align="left"
                >
                  {row.stage}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 800,
                    fontSize: "14px"
                  }}
                  align="right"
                >
                  {row.repProbability}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 800,
                    fontSize: "14px"
                  }}
                  align="right"
                >
                  {row.pilytixProbability}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 800,
                    fontSize: "14px"
                  }}
                  align="left"
                >
                  {row.pilytixTier}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 800,
                    fontSize: "14px"
                  }}
                  align="right"
                >
                  {row.amount}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 800,
                    fontSize: "14px"
                  }}
                  align="left"
                >
                  {row.product}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 800,
                    fontSize: "14px"
                  }}
                  align="left"
                >
                  {row.salesRepName}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BasicTable;
