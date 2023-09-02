import { Grid } from "@mui/material";

import CardTemplate from "../components/common/CardTemplate";
import SideNavigation from "../layout/SideNavigation";

function Home() {
  return (
    <>
      <Grid item md={2.5}>
        <SideNavigation type="home" />
      </Grid>
      <Grid item md={9.5}>
        <Grid item md={4}>
          <CardTemplate uniqueId="1" />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
