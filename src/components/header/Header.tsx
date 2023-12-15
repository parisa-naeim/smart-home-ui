import { Grid } from "@mui/material";
import SearchBar from "../search/SearchBar";
import UserMenu from "../user/UserMenu";

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
        <UserMenu />
      </Grid>
    </Grid>
  );
};

export default Header;
