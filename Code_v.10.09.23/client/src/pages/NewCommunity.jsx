import { Grid, Stack } from "@mui/material";
import TrendingPosts from "../modules/community_components/TrendingPosts";
import Activities from "../modules/community_components/Activities";
import Posts from "../modules/community_components/Posts";
import NewPost from "../modules/community_components/NewPost";
import { useEffect, useState } from "react";

const NewCommunity = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/community/broadcast`);

    socket.onopen = function (event) {
      socket.send(JSON.stringify({ text: { action: "fetch_all" } }));
      console.log("WebSocket is open now.");
    };

    socket.onmessage = function (event) {
      const get_data = JSON.parse(event.data);
      const { text } = get_data;

      const if_new = {
        created: text.created,
        description: text.description,
        id: text.id,
        image: text.image,
        poster_name: text.poster_name,
        profile: text.profile,
        comments: [],
        engagements: [],
      };

      text.length !== undefined
        ? setPosts(text)
        : setPosts((prev) => [...prev, if_new]);
    };

    socket.onclose = function (event) {
      console.log("Server closed unexpectedly");
    };
  }, []);

  return (
    <>
      <Grid
        container
        sx={{ height: "100%", padding: "16px 32px 0", bgcolor: "#fff" }}
      >
        <Grid item md={3} sx={{ height: "100%", paddingRight: "32px" }}>
          <Stack sx={{ height: "100%" }}>
            <Activities />
          </Stack>
        </Grid>
        <Grid
          item
          md={6}
          sx={{ height: "100%", paddingInline: "8px", overflowY: "scroll" }}
        >
          <NewPost />
          <Stack mb={2} flexDirection="column-reverse">
            {posts.map((item, idx) => {
              return <Posts key={idx} details={item} />;
            })}
          </Stack>
        </Grid>
        <Grid item md={3} sx={{ height: "100%", paddingLeft: "32px" }}>
          <Stack sx={{ height: "100%" }}>
            <TrendingPosts />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default NewCommunity;
