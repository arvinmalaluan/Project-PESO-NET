import { Grid, Stack } from "@mui/material";
import Header from "./profile_header";
import LeftTemp from "./left_template";
import CreatePost from "../common/create_post";
import { useEffect, useState } from "react";
import { get_post, get_profile } from "../../context/GetUserData";

import jwtDecode from "jwt-decode";
import CommPostTemplate from "../community/community_post";

function Profile() {
  const [details, setDetails] = useState();
  const [posts, setPosts] = useState(null);

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

    get_post()
      .then((data) => {
        // for (const item of data) {
        //   console.log(item.poster);
        // }

        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
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

        {posts &&
          posts.map((post) => {
            return (
              post.poster === user_id && (
                <Stack key={post.id} mb={2}>
                  <CommPostTemplate details={post} />
                </Stack>
              )
            );
          })}
      </Grid>
    </>
  );
}

export default Profile;
