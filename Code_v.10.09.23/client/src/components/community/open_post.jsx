import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  Dialog,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import send from "./../../assets/icons/send.svg";

import { useEffect, useState } from "react";
import { post_comment } from "../../context/GetUserData";

const OpenPost = ({
  open,
  set,
  post,
  poster,
  user_id,
  handleLike,
  handleDislike,
  liked,
  disliked,
  trigger,
  setTrigger,
}) => {
  const { id, name, profile } = poster;
  const {
    post_id,
    created,
    description,
    image_content,
    upvote,
    downvote,
    comments,
  } = post;

  const [formData, setFormData] = useState({
    content: "",
    post: "",
    profile: "",
    account: "",
  });

  const handleclose = () => {
    set(false);
  };

  const handleCommentChange = (event) => {
    const content_value = event.target.value;

    setFormData({
      content: content_value,
      post: post_id,
      profile: id,
      account: user_id,
    });
  };

  const handleComment = () => {
    post_comment(formData)
      .then((data) => {
        setFormData({
          content: "",
          post: "",
          profile: "",
          account: "",
        });

        setTrigger(!trigger);
      })
      .catch((error) => {
        console.log("unsuccessful", error);
      });
  };

  useEffect(() => {}, [comments]);

  return (
    <>
      <Dialog open={open} onClose={handleclose}>
        <Card
          sx={{
            width: "600px",
            height: "700px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Stack sx={{ height: "90%" }}>
            <CardHeader
              title={
                <Typography textAlign="center" fontSize={18} fontWeight={500}>
                  {name}'s Post
                </Typography>
              }
              sx={{
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                height: "5%",
              }}
            />

            <CardContent
              sx={{
                overflowY: "scroll",
                height: "95%",
                paddingInline: 3,
              }}
            >
              <Stack direction="row" spacing={2}>
                <Avatar src={profile ? "" : ""} />
                <Stack>
                  <Typography fontSize={16} fontWeight={500}>
                    {name}
                  </Typography>
                  <Typography fontSize={12}>{created}</Typography>
                </Stack>
              </Stack>

              <Stack mt={2}>
                <Typography fontSize={14}>
                  {description ? description : "loading"}
                </Typography>
              </Stack>

              <Stack
                mt={2}
                pb={0.5}
                direction="row"
                justifyContent="space-between"
              >
                <Typography fontSize={12}>
                  upvote: {upvote}, downvote: {downvote}
                </Typography>

                <Typography fontSize={12}>
                  {comments.length}{" "}
                  {comments.length > 1 ? "comments" : "comment"}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                sx={{
                  padding: "8px 16px",
                  borderBlock: "1px solid rgba(0, 0, 0, 0.12)",
                }}
              >
                <Stack direction="row" flexGrow={1}>
                  <FormControlLabel
                    label="Upvote"
                    control={
                      <Checkbox
                        size="small"
                        checked={liked}
                        onClick={handleLike}
                      />
                    }
                    sx={{ userSelect: "none" }}
                  />

                  <FormControlLabel
                    label="Downvote"
                    control={
                      <Checkbox
                        size="small"
                        checked={disliked}
                        onClick={handleDislike}
                      />
                    }
                    sx={{ userSelect: "none", ml: 1 }}
                  />
                </Stack>

                <Button
                  variant="contained"
                  size="small"
                  sx={{ textTransform: "none" }}
                  disabled
                >
                  Write comment
                </Button>
              </Stack>

              {comments &&
                comments.map((comment) => {
                  return (
                    <Stack
                      key={comment.id}
                      direction="row"
                      spacing={1}
                      alignItems="start"
                      mt={2}
                    >
                      <Avatar
                        sx={{
                          height: "32px",
                          width: "32px",
                        }}
                      />
                      <Stack>
                        <Chip
                          label={
                            <>
                              <Typography fontSize={12} fontWeight={500}>
                                {comment.account === user_id
                                  ? "You"
                                  : comment.commentor}
                              </Typography>
                              <Typography
                                fontSize={14}
                                whiteSpace="break-spaces"
                              >
                                {comment.content}
                              </Typography>
                            </>
                          }
                          sx={{
                            justifyContent: "start",
                            height: "auto",
                            paddingBlock: 1,
                            paddingInline: 1,
                            borderRadius: "20px",
                            bgcolor: "whitesmoke",
                          }}
                        />

                        <Stack direction="row" spacing={2} mt={0.5} ml="20px">
                          <Typography fontSize={12} fontWeight={500}>
                            Like
                          </Typography>
                          <Typography fontSize={12} fontWeight={500}>
                            Reply
                          </Typography>
                          <Typography fontSize={12}>3h</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  );
                })}
            </CardContent>
          </Stack>

          <CardActions
            sx={{
              paddingBlock: "16px",
              borderTop: "1px solid rgba(0, 0, 0, 0.12)",
              height: "5%",
            }}
          >
            <Stack
              direction="row"
              alignItems="start"
              spacing={2}
              width="100%"
              sx={{
                paddingInline: 2,
              }}
            >
              <Avatar sx={{ width: 32, height: 32 }} />
              <TextField
                fullWidth
                placeholder="Write a comment"
                size="small"
                value={formData.content}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        sx={{
                          padding: "5px",
                          display: formData.content ? "" : "none",
                        }}
                        onClick={handleComment}
                      >
                        <img src={send} height={20} alt="" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={handleCommentChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    paddingRight: 1,
                  },
                }}
              />
            </Stack>
          </CardActions>
        </Card>
      </Dialog>
    </>
  );
};

export default OpenPost;
