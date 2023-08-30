import { Grid } from "@mui/material";

import CardTemplate from "../components/common/CardTemplate";
import SideNavigation from "../layout/SideNavigation";

function Home() {
  return (
    <>
      <Grid item md={2.5}>
        <SideNavigation />
      </Grid>
      <Grid item md={9.5} pl={4}>
        <Grid item md={4}>
          <CardTemplate uniqueId="1" />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
