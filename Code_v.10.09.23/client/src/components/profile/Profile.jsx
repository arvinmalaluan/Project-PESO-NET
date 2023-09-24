import { Grid, Stack } from "@mui/material";
import Header from "./profile_header";
import LeftTemp from "./left_template";
import CreatePost from "../common/create_post";
import { useEffect, useState } from "react";
import { get_profile } from "../../context/GetUserData";

import jwtDecode from "jwt-decode";

function Profile() {
  const [details, setDetails] = useState();

  const { user_id } = jwtDecode(localStorage.getItem("token"));

  useEffect(() => {
    get_profile(user_id)
      .then((data) => {
        setDetails(data);
      })
      .catch((error) => {
        console.log("Error encountered", error);
        setDetails(null);
      });
  }, []);

  return (
    <>
      <Grid item sm={12}>
        <Header details={details} />
      </Grid>

      <Grid item md={5} sm={12}>
        <Stack>
          <LeftTemp title="Photos" type="photos" />
        </Stack>

        <Stack mt={2}>
          <LeftTemp title="Following" type="following" />
        </Stack>
      </Grid>

      <Grid item md={7} sm={12}>
        <CreatePost />
      </Grid>
    </>
  );
}

export default Profile;
