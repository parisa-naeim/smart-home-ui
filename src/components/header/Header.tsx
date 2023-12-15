import { Box, Grid, Typography } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./header.module.css";
import SearchBar from "../search/SearchBar";

const Header = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        order={{ xs: 2, sm: 2, md: 1 }}
        sx={{ margin: { sm: 1, md: 0 } }}
      >
        <SearchBar />
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 1, sm: 1, md: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item className={styles.headerItem}>
            <SettingsOutlinedIcon />
          </Grid>
          <Grid item className={styles.headerItem}>
            <NotificationsNoneIcon />
          </Grid>
          <Grid item className={styles.headerItem}>
            <Box sx={{ display: "flex" }}>
              <AccountCircleIcon sx={{ mr: 1 }} />
              <Typography>Parisa</Typography>
              <KeyboardArrowDownIcon />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
