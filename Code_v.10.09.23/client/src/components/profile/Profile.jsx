import { Grid, Stack } from "@mui/material";
import Header from "./profile_header";
import LeftTemp from "./left_template";
import CreatePost from "../common/create_post";
import CommPostTemplate from "../community/community_post";

function Profile() {
  return (
    <>
      <Grid item md={12}>
        <Header />
      </Grid>

      <Grid item md={5}>
        <Stack>
          <LeftTemp title="Photos" type="photos" />
        </Stack>

        <Stack mt={2}>
          <LeftTemp title="Following" type="following" />
        </Stack>
      </Grid>
      <Grid item md={7}>
        <CreatePost />
        <CommPostTemplate />
      </Grid>
    </>
  );
}

export default Profile;
