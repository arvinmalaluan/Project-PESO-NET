import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";

import upvote from "./../../assets/icons/arrow-top-right.svg";
import downvote from "./../../assets/icons/arrow-bottom-right.svg";

import { useEffect, useState } from "react";
import {
  get_post_details,
  get_profile,
  update_engagement,
} from "../../context/GetUserData";

import jwtDecode from "jwt-decode";
import OpenPost from "./open_post";

function CommPostTemplate({ details }) {
  const { id, image, description, created, poster } = details;

  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const [postDetails, setPostDetails] = useState({
    post_id: "",
    created: "",
    description: "",
    image_content: "",
    upvote: "",
    downvote: "",
    comments: "",
  });

  const [posterDetails, setPosterDetails] = useState({
    id: "",
    profile: "",
    name: "",
  });

  const { user_id } = jwtDecode(localStorage.getItem("token"));

  useEffect(() => {
    get_profile(poster)
      .then((data) => {
        setPosterDetails({
          id: data.id,
          name: data.name,
          profile: data.photo,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    get_post_details(id)
      .then((data) => {
        const engagements = data.engagement;
        let upvote_count = 0;
        let downvote_count = 0;

        for (const engagement of engagements) {
          if (engagement.account === user_id) {
            setLiked(engagement.is_liked);
            setDisliked(engagement.is_disliked);
          }

          if (engagement.is_liked) {
            upvote_count += 1;
          }

          if (engagement.is_disliked) {
            downvote_count += 1;
          }
        }

        setPostDetails({
          post_id: data.id,
          created: data.created,
          description: data.description,
          image_content: data.image,
          upvote: upvote_count,
          downvote: downvote_count,
          comments: data.comments,
        });
      })

      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const formData = {
      custom_key: String(postDetails.post_id) + String(user_id),
      is_liked: liked,
      is_disliked: disliked,
      post: postDetails.post_id,
      account: user_id,
    };

    postDetails.post_id && update_engagement(formData);
  }, [trigger]);

  const handleLike = () => {
    setLiked(!liked);
    disliked && setDisliked(!disliked);

    setTrigger(!trigger);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    liked && setLiked(false);

    setTrigger(!trigger);
  };

  return (
    <>
      <Card elevation={0} sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}>
        <CardHeader
          avatar={<Avatar />}
          title={
            <Typography fontSize={16} fontWeight={500}>
              {posterDetails.name ? posterDetails.name : "Loading ..."}
            </Typography>
          }
          subheader={
            <Typography fontSize={12}>
              {postDetails.created ? postDetails.created : "Loading ..."}
            </Typography>
          }
          sx={{ paddingBottom: 1 }}
        />
        <CardContent sx={{ paddingTop: 1 }}>
          <Typography fontSize={14}>{description}</Typography>
        </CardContent>

        {image && (
          <CardMedia
            sx={{ height: 200 }}
            image="https://c4.wallpaperflare.com/wallpaper/479/42/490/artwork-painting-city-cityscape-skyscraper-hd-wallpaper-preview.jpg"
          />
        )}

        {1 === 1 && (
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ paddingBlock: 1, paddingInline: 2 }}
          >
            <AvatarGroup total={2}>
              <Avatar
                src={upvote}
                sx={{
                  height: 16,
                  width: 16,
                  padding: "2px",
                  bgcolor: "#1877f2",
                  // bgcolor: "red",
                }}
              />
              <Avatar
                src={downvote}
                sx={{
                  height: 16,
                  width: 16,
                  padding: "2px",
                  bgcolor: "#f02849",
                }}
              />
            </AvatarGroup>
            <Typography fontSize={12}>32 upvotes</Typography>
          </Stack>
        )}

        <CardActions
          sx={{
            padding: "8px 16px",
            borderTop: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <Stack direction="row" flexGrow={1}>
            <FormControlLabel
              label="Upvote"
              control={<Checkbox checked={liked} onClick={handleLike} />}
              sx={{ userSelect: "none" }}
            />

            <FormControlLabel
              label="Downvote"
              control={<Checkbox checked={disliked} onClick={handleDislike} />}
              sx={{ userSelect: "none", ml: 1 }}
            />
          </Stack>

          <Button
            disableElevation
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            Write comment
          </Button>
        </CardActions>
      </Card>

      <OpenPost
        open={open}
        set={setOpen}
        post={postDetails}
        poster={posterDetails}
        user_id={user_id}
        handleLike={handleLike}
        handleDislike={handleDislike}
        liked={liked}
        disliked={disliked}
        trigger={trigger}
        setTrigger={setTrigger}
      />
    </>
  );
}

export default CommPostTemplate;
