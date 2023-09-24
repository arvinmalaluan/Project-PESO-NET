import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import SideNav from "./../common/side_nav";
import ActivityTemp from "../common/activities";
import CommPostTemplate from "./community_post";
import CreatePost from "../common/create_post";
import TrendingTemplate from "./trending_on_app";

import { get_post } from "../../context/GetUserData";

function Community() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    get_post()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

        {posts &&
          posts.map((post) => {
            return (
              <Stack key={post.id} mb={2}>
                <CommPostTemplate details={post} />
              </Stack>
            );
          })}
      </Grid>

      <Grid item md={3}>
        <TrendingTemplate />
      </Grid>
    </>
  );
}

export default Community;
