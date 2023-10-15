import { Grid } from "@mui/material";
import styles from "./sidebar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

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
        <HomeOutlinedIcon sx={{ color: "white", fontSize: 35 }} />
      </Grid>
      <Grid item xs={12}>
        <HomeOutlinedIcon sx={{ color: "white", fontSize: 35 }} />
      </Grid>
      <Grid item xs={12}>
        <HomeOutlinedIcon sx={{ color: "white", fontSize: 35 }} />
      </Grid>
      <Grid item xs={12}>
        <HomeOutlinedIcon sx={{ color: "white", fontSize: 35 }} />
      </Grid>
      <Grid item xs={12}>
        <HomeOutlinedIcon sx={{ color: "white", fontSize: 35 }} />
      </Grid>
    </Grid>
  );
};

export default Sidebar;
