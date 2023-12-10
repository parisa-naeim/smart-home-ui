import { Box, Grid } from "@mui/material";
import styles from "./sidebar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LightOutlinedIcon from "@mui/icons-material/LightOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Sidebar = () => {
  return (
    <Grid
      container
      sx={{
        color: "text.primary",
        minWidth: "5em",
        width: "5em",
        textAlign: "center",
      }}
      className={styles.container}
      justifyContent="space-around"
      alignItems="center"
      direction="column"
    >
      <Grid item xs={12} className={styles.sideBarItem}>
        <HomeOutlinedIcon />
      </Grid>
      <Grid item xs={12} className={styles.sideBarItem}>
        <WidgetsOutlinedIcon />
      </Grid>
      <Grid item xs={12} className={styles.sideBarItem}>
        <LightOutlinedIcon />
      </Grid>
      <Grid item xs={12} className={styles.sideBarItem}>
        <SecurityOutlinedIcon />
      </Grid>
      <Grid item xs={12} className={styles.sideBarItem}>
        <LocationOnOutlinedIcon />
      </Grid>
      <Grid item xs={12} className={styles.sideBarItem}>
        <GroupOutlinedIcon />
      </Grid>
      <Grid item xs={12} className={styles.sideBarItem}>
        <AssessmentOutlinedIcon />
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>

      <Grid item xs={12} className={styles.sideBarItem}>
        <LogoutOutlinedIcon />
      </Grid>
    </Grid>
  );
};

export default Sidebar;
