"use client";
import { Box, Typography } from "@mui/material";
import styles from "./summary.module.css";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { styled } from "@mui/system";

const Container = styled(Box)`
  background-color: #ffecc8;
  margin-top: 1em;
  border-radius: 25px;
  padding: 2em;
  color: #222122;

  ${(props) => props.theme.breakpoints.up("md")} {
    max-width: 50em;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
  }

  h4 {
    color: #c45a01;
    margin-bottom: 10px;
  }

  p {
    color: #c26111;
    margin-bottom: 10px;
  }
`;

const Summary = () => {
  return (
    <Container>
      <Typography variant="h4">Hello Parisa</Typography>
      <Typography variant="body1">
        Welcome home. The air quality is good and fresh you can go out today.
      </Typography>
      <Box sx={{ display: "flex", marginBottom: "10px" }}>
        <ThermostatIcon
          sx={{ fontSize: "2em", color: "#232323", marginLeft: "-10px" }}
        />
        <Typography variant="h5">25°C</Typography>
        <Typography variant="h6" sx={{ marginLeft: "10px" }}>
          outdoor temperature
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <FilterDramaIcon
          sx={{ fontSize: "2em", color: "#232323", marginLeft: "-3px" }}
        />
        {/* <Typography variant="h5">25°C</Typography> */}
        <Typography variant="h6" sx={{ marginLeft: "10px" }}>
          Fuzzy cloudy weather
        </Typography>
      </Box>
    </Container>
  );
};

export default Summary;
