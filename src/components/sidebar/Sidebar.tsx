import { Grid } from "@mui/material";
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
      sx={{ color: "text.primary" }}
      className={styles.container}
      justifyContent="space-around"
      alignItems="center"
      direction="column"
    >
      <Grid item xs={12}>
        <HomeOutlinedIcon className={styles.sideBarItem} />
      </Grid>
      <Grid item xs={12}>
        <WidgetsOutlinedIcon className={styles.sideBarItem} />
      </Grid>
      <Grid item xs={12}>
        <LightOutlinedIcon className={styles.sideBarItem} />
      </Grid>
      <Grid item xs={12}>
        <SecurityOutlinedIcon className={styles.sideBarItem} />
      </Grid>
      <Grid item xs={12}>
        <LocationOnOutlinedIcon className={styles.sideBarItem} />
      </Grid>
      <Grid item xs={12}>
        <GroupOutlinedIcon className={styles.sideBarItem} />
      </Grid>
      <Grid item xs={12}>
        <AssessmentOutlinedIcon className={styles.sideBarItem} />
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>

      <Grid item xs={12}>
        <LogoutOutlinedIcon className={styles.sideBarItem} />
      </Grid>
    </Grid>
  );
};

export default Sidebar;
