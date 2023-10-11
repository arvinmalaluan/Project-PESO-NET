import { Avatar, AvatarGroup, Button, IconButton } from "@mui/material";
import { Card, CardActions, CardContent } from "@mui/material";
import { CardHeader, CardMedia, Checkbox } from "@mui/material";
import { FormControlLabel, Stack, Typography } from "@mui/material";

import {
  cross_icon,
  dislike,
  dislike_clicked,
  like,
  like_clicked,
} from "./../../templates/image_imports";

import { format_date } from "../../utils/format_date";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { format_count } from "../../utils/formatCounts";
import { createUpdateEngagement } from "../../context/CRUD_Operations";

const Posts = ({ details }) => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    disliked && setDisliked(!disliked);

    const key =
      details.id > details.profile
        ? details.id.toString() + details.profile.toString()
        : details.profile.toString() + details.id.toString();

    const payload = {
      is_liked: !liked,
      is_disliked: disliked ? !disliked : disliked,
      post: details.id,
      uni_profile: details.profile,
      custom_key: key,
    };

    createUpdateEngagement(payload);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    liked && setLiked(false);

    const key =
      details.id > details.profile
        ? details.id.toString() + details.profile.toString()
        : details.profile.toString() + details.id.toString();

    const payload = {
      is_liked: liked ? !liked : liked,
      is_disliked: !disliked,
      post: details.id,
      uni_profile: details.profile,
      custom_key: key,
    };

    createUpdateEngagement(payload);
  };

  useEffect(() => {
    const engagements = details.engagements;

    let upvote_count = 0;
    let downvote_count = 0;

    for (const engagement of engagements) {
      if (engagement.uni_profile === user_id) {
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
  }, []);

  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "5px",
      }}
    >
      <CardHeader
        avatar={<Avatar />}
        title={<Typography fontSize={16}>{details.poster_name}</Typography>}
        subheader={
          <Typography fontSize={12}>{format_date(details.created)}</Typography>
        }
        action={
          <IconButton sx={{ marginTop: "-3px" }}>
            <img src={cross_icon} alt="" />
          </IconButton>
        }
        sx={{ paddingBottom: 1 }}
      />
      <CardContent sx={{ paddingTop: 1 }}>
        <Typography fontSize={14}>{details.description}</Typography>
      </CardContent>

      {details.image && (
        <CardMedia
          sx={{ height: 200 }}
          image={`http://127.0.0.1:8000/${details.image}`}
        />
      )}

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ paddingBlock: 1, paddingInline: 2 }}
      >
        <Stack direction="row" alignItems="center" flexGrow={1} spacing={1}>
          <AvatarGroup total={2}>
            <Avatar
              sx={{
                height: 16,
                width: 16,
                padding: "2px",
                bgcolor: "#1877f2",
              }}
            />
            <Avatar
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

        <Typography fontSize={12}>
          {details.comments.length > 0 &&
            format_count(details.comments.length) +
              (details.comments.length > 1 ? " comments" : " comment")}
        </Typography>
      </Stack>

      <CardActions
        sx={{
          padding: "8px 16px",
          borderTop: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Stack direction="row" ml={1} flexGrow={1}>
          <FormControlLabel
            label={
              <Typography fontSize={14} sx={{ color: liked ? "#4f46e5" : "" }}>
                Like
              </Typography>
            }
            control={
              <Checkbox
                checked={liked}
                checkedIcon={
                  <img
                    src={like_clicked}
                    style={{
                      filter:
                        "invert(41%) sepia(98%) saturate(5968%) hue-rotate(239deg) brightness(92%) contrast(94%)",
                    }}
                    className="icon-16x16"
                    alt=""
                  />
                }
                icon={<img src={like} className="icon-16x16" alt="" />}
                onClick={handleLike}
              />
            }
            sx={{
              userSelect: "none",
              bgcolor: liked ? "rgba(79, 70, 229, 0.1)" : "",
              borderRadius: "5px",
              paddingRight: 2,
            }}
          />

          <FormControlLabel
            label={
              <Typography
                fontSize={14}
                sx={{ color: disliked ? "#e5464f" : "" }}
              >
                Dislike
              </Typography>
            }
            control={
              <Checkbox
                checked={disliked}
                checkedIcon={
                  <img
                    src={dislike_clicked}
                    style={{
                      filter:
                        "invert(40%) sepia(100%) saturate(2328%) hue-rotate(330deg) brightness(91%) contrast(97%)",
                    }}
                    className="icon-16x16"
                    alt=""
                  />
                }
                icon={<img src={dislike} className="icon-16x16" alt="" />}
                onClick={handleDislike}
              />
            }
            sx={{
              userSelect: "none",
              bgcolor: disliked ? "rgba(229, 70, 79, 0.1)" : "",
              borderRadius: "5px",
              paddingRight: 2,
            }}
          />
        </Stack>

        <Button
          disableElevation
          variant="contained"
          size="small"
          sx={{ textTransform: "none" }}
          onClick={null}
        >
          Write comment
        </Button>
      </CardActions>
    </Card>
  );
};

export default Posts;
