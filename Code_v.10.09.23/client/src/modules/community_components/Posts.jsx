import { Avatar, AvatarGroup, Button, IconButton } from "@mui/material";
import { Card, CardActions, CardContent } from "@mui/material";
import { CardHeader, CardMedia, Checkbox } from "@mui/material";
import { FormControlLabel, Stack, Typography } from "@mui/material";

import {
  barchart2,
  cross_icon,
  dislike,
  dislike_clicked,
  like,
  like_clicked,
  messagecircle,
} from "./../../templates/image_imports";

import { format_date } from "../../utils/format_date";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { format_count } from "../../utils/formatCounts";
import { createUpdateEngagement } from "../../context/CRUD_Operations";
import WriteComment from "./WriteComment";

const Posts = ({ details }) => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [engcount, setEngcount] = useState({});
  const [trigger, setTrigger] = useState(false);

  const [open, setOpen] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    disliked && setDisliked(!disliked);

    const key =
      details.id > user_id
        ? details.id.toString() + user_id.toString()
        : user_id.toString() + details.id.toString();

    const payload = {
      is_liked: !liked,
      is_disliked: disliked ? !disliked : disliked,
      post: details.id,
      uni_profile: user_id,
      custom_key: key,
    };

    createUpdateEngagement(payload);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    liked && setLiked(false);

    const key =
      details.id > user_id
        ? details.id.toString() + user_id.toString()
        : user_id.toString() + details.id.toString();

    const payload = {
      is_liked: liked ? !liked : liked,
      is_disliked: !disliked,
      post: details.id,
      uni_profile: user_id,
      custom_key: key,
    };

    createUpdateEngagement(payload);
  };

  const handleComment = () => {
    setOpen(true);
  };

  useEffect(() => {
    const engagements = details.engagements;

    let upvote_count = 0;
    let downvote_count = 0;

    for (const engagement of engagements) {
      if (engagement.uni_profile == user_id) {
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

    setEngcount({
      up: upvote_count,
      down: downvote_count,
    });
  }, []);

  return (
    <>
      <Card
        elevation={0}
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "5px",
          mb: 1,
        }}
      >
        <CardHeader
          avatar={<Avatar src={details.photo} />}
          title={<Typography fontSize={16}>{details.poster_name}</Typography>}
          subheader={
            <Typography fontSize={12}>
              {format_date(details.created)}
            </Typography>
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
            sx={{ height: 350 }}
            image={`http://127.0.0.1:8000/${details.image}`}
          />
        )}

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ paddingBlock: 1, paddingInline: 2 }}
        >
          <Stack direction="row" alignItems="center" flexGrow={1} spacing={0.5}>
            {(engcount.up > 0 || engcount.down > 0) && (
              <>
                <img
                  src={barchart2}
                  style={{ height: "13px", width: "13px" }}
                  alt=""
                />
                <Typography fontSize={12}>{`${
                  engcount.up > engcount.down ? engcount.up : engcount.down
                } ${
                  engcount.up > engcount.down
                    ? engcount.up > 1
                      ? "upvotes"
                      : "upvote"
                    : engcount.down > 1
                    ? "downvotes"
                    : "downvote"
                }`}</Typography>
              </>
            )}
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
                <Typography
                  fontSize={14}
                  sx={{
                    color: liked ? "#4f46e5" : "",
                    fontWeight: liked ? 700 : 500,
                  }}
                >
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
                // bgcolor: liked ? "rgba(79, 70, 229, 0.1)" : "",
                borderRadius: "5px",
                paddingRight: 2,
              }}
            />

            <FormControlLabel
              label={
                <Typography
                  fontSize={14}
                  sx={{
                    color: disliked ? "#e5464f" : "",
                    fontWeight: disliked ? 700 : 500,
                  }}
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
                // bgcolor: disliked ? "rgba(229, 70, 79, 0.1)" : "",
                borderRadius: "5px",
                paddingRight: 2,
              }}
            />
          </Stack>

          <Button
            disableElevation
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              bgcolor: "#fff",
              "&:hover": { bgcolor: "whitesmoke" },
            }}
            onClick={handleComment}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={messagecircle} className="icon-16x16" alt="" />
              <Typography fontSize={14} sx={{ color: "#000" }}>
                Write comment
              </Typography>
            </Stack>
          </Button>
        </CardActions>
      </Card>

      <WriteComment
        open={open}
        setOpen={setOpen}
        details={details}
        liked={liked}
        disliked={disliked}
        handleLike={handleLike}
        handleDislike={handleDislike}
      />
    </>
  );
};

export default Posts;
