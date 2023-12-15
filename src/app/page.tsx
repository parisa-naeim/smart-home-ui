import Summary from "@/components/summary/Summary";
import { Grid } from "@mui/material";

function Home() {
  return (
    <Grid container>
      <Grid item xs={12} sm={10} md={8} sx={{ margin: { xs: 1 } }}>
        <Summary />
      </Grid>
    </Grid>
  );
}

export default Home;
