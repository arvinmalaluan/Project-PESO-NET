import { Grid, Typography } from "@mui/material";

import CardTemplate from "../components/common/CardTemplate";
import SideNavigation from "../layout/SideNavigation";

function Home() {
  return (
    <>
      <Grid item md={3}>
        <SideNavigation type="home" />
      </Grid>
      <Grid item md={9}>
        <Typography fontWeight={500} mb={1}>
          Top picks for you
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <CardTemplate uniqueId="1" />
          </Grid>
          <Grid item md={6}>
            <CardTemplate uniqueId="1" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
