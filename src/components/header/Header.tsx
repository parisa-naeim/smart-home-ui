import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./header.module.css";
import SearchBar from "../search/SearchBar";

const Header = () => {
  return (
    <Grid container sx={{ textAlign: { xs: "center", sm: "left" } }}>
      <Grid item xs={12} sm={6}>
        <SearchBar />
      </Grid>
      <Grid item xs={12} sm={6}>
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
