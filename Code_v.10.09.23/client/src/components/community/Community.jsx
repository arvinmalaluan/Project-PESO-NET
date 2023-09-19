import { Grid, Stack } from "@mui/material";

import SideNav from "./../common/side_nav";
import ActivityTemp from "../common/activities";
import CommPostTemplate from "./community_post";
import CreatePost from "../common/create_post";
import TrendingTemplate from "./trending_on_app";

function Community() {
  return (
    <>
      <Grid item md={3}>
        <Stack>
          <SideNav />
        </Stack>

        <Stack mt={4}>
          <ActivityTemp />
        </Stack>
      </Grid>

      <Grid item md={6}>
        <Stack>
          <CreatePost />
        </Stack>

        <Stack>
          <CommPostTemplate />
        </Stack>
      </Grid>

      <Grid item md={3}>
        <TrendingTemplate />
      </Grid>
    </>
  );
}

export default Community;
