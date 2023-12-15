"use client";
import { Box, Grid, Typography } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/system";

const GridItem = styled(Grid)`
  cursor: pointer;
  font-size: 2em;

  ${(props) => props.theme.breakpoints.up("sm")} {
    margin-right: 1em;
  }

  color: #393939;
`;

const UserMenu = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      sx={{ marginBottom: 1 }}
    >
      <GridItem item sx={{ display: { xs: "none", sm: "flex" } }}>
        <SettingsOutlinedIcon />
      </GridItem>
      <GridItem item sx={{ display: { xs: "none", sm: "flex" } }}>
        <NotificationsNoneIcon />
      </GridItem>
      <GridItem item>
        <Box sx={{ display: "flex" }}>
          <AccountCircleIcon sx={{ mr: 1 }} />
          <Typography>Parisa</Typography>
          <KeyboardArrowDownIcon />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default UserMenu;
