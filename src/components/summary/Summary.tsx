import { Box, Typography } from "@mui/material";
import styles from "./summary.module.css";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

const Summary = () => {
  return (
    <Box className={styles.container}>
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
    </Box>
  );
};

export default Summary;
