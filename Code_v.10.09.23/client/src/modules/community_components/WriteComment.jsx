import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
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
import {
  cross_icon,
  dislike,
  dislike_clicked,
  dots_horiz,
  like,
  like_clicked,
  messagecircle,
  send,
} from "../../templates/image_imports";
import { format_date } from "../../utils/format_date";
import { useState } from "react";
import { createComment } from "../../context/CRUD_Operations";

import jwtDecode from "jwt-decode";

const WriteComment = ({
  open,
  setOpen,
  details,
  liked,
  disliked,
  handleLike,
  handleDislike,
}) => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));
  const [payload, setPayload] = useState({
    content: "",
    post: "",
    profile: "",
  });

  const [temp, setTemp] = useState([]);

  const handleChange = (e) => {
    setPayload({ ...payload, content: e.target.value });
  };

  const handleKeyDown = (e) => {
    e.key === "Enter" && handleComment();
  };

  const handleComment = () => {
    const data = { ...payload, post: details.id, profile: user_id };
    createComment(data)
      .then((data) => {
        setPayload({
          content: "",
          post: "",
          profile: "",
        });

        setTemp([...temp, data]);
      })
      .catch(console.error());
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Stack width="600px">
        <Stack
          justifyContent="center"
          direction="row"
          sx={{ position: "relative", border: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <Typography
            fontSize={18}
            fontWeight={700}
            p={1}
          >{`${details.poster_name}'s Post`}</Typography>
          <IconButton
            size="small"
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <img src={cross_icon} className="icon-20x20" alt="" />
          </IconButton>
        </Stack>
      </Stack>

      <Stack>
        <Card sx={{ height: "450px", overflowY: "scroll" }}>
          <CardHeader
            title={
              <Typography fontSize={16} fontWeight={600}>
                {details.poster_name}
              </Typography>
            }
            avatar={<Avatar />}
            subheader={
              <Typography fontSize={12} fontWeight={500}>
                {format_date(details.created)}
              </Typography>
            }
            action={
              <IconButton sx={{ marginRight: 1.5 }}>
                <img src={dots_horiz} alt="" />
              </IconButton>
            }
            sx={{ pb: 0.5 }}
          />

          <CardContent sx={{ pt: 0, pb: 1 }}>
            <Typography fontSize={14}>{details.description}</Typography>
          </CardContent>

          {details.image && (
            <CardMedia
              sx={{ height: 350 }}
              image={`http://127.0.0.1:8000/${details.image}`}
            />
          )}

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

            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={messagecircle} className="icon-16x16" alt="" />
              <Typography fontSize={14} sx={{ color: "#000" }}>
                Write comment
              </Typography>
            </Stack>
          </CardActions>

          <Stack
            sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.12)", pt: 1.5 }}
            spacing={0.5}
          >
            {details.comments.length != 0 &&
              details.comments.map((item, idx) => {
                return (
                  <Stack
                    key={idx}
                    direction="row"
                    spacing={1}
                    sx={{
                      paddingInline: 2,
                      paddingBlock: 0.5,
                    }}
                  >
                    <Avatar sx={{ height: 32, width: 32 }} />
                    <Chip
                      sx={{
                        height: "auto",
                        bgcolor: "whitesmoke",
                        paddingBlock: 1,
                        maxWidth: "90%",
                        "& .MuiChip-label": {
                          display: "block",
                          whiteSpace: "normal",
                        },
                      }}
                      label={
                        <Stack>
                          <Typography fontSize={12} fontWeight={600}>
                            {item.commentor}
                          </Typography>
                          <Typography fontSize={14} fontWeight={400}>
                            {item.content}
                          </Typography>
                        </Stack>
                      }
                    />
                  </Stack>
                );
              })}

            {temp.length != 0 &&
              temp.map((item, idx) => {
                return (
                  <Stack
                    key={idx}
                    direction="row"
                    spacing={1}
                    sx={{
                      paddingInline: 2,
                      paddingBlock: 0.5,
                    }}
                  >
                    <Avatar sx={{ height: 32, width: 32 }} />
                    <Chip
                      sx={{
                        height: "auto",
                        bgcolor: "whitesmoke",
                        paddingBlock: 1,
                        maxWidth: "90%",
                        "& .MuiChip-label": {
                          display: "block",
                          whiteSpace: "normal",
                        },
                      }}
                      label={
                        <Stack>
                          <Typography fontSize={12} fontWeight={600}>
                            {item.commentor}
                          </Typography>
                          <Typography fontSize={14} fontWeight={400}>
                            {item.content}
                          </Typography>
                        </Stack>
                      }
                    />
                  </Stack>
                );
              })}
          </Stack>
        </Card>

        <Stack
          direction="row"
          sx={{ paddingInline: 2, paddingBlock: 1 }}
          spacing={1}
        >
          <Avatar sx={{ height: 32, width: 32 }} />
          <TextField
            placeholder="Send a comment"
            size="small"
            fullWidth
            multiline
            value={payload.content}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={2}
            InputProps={{
              sx: { borderRadius: "10px", bgcolor: "whitesmoke" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleComment}
                    sx={{ mt: 2 }}
                    disabled={payload.content === "" ? true : false}
                  >
                    <img
                      src={send}
                      className="icon-16x16"
                      style={{
                        filter:
                          payload.content !== ""
                            ? "invert(33%) sepia(30%) saturate(6263%) hue-rotate(233deg) brightness(86%) contrast(110%)"
                            : "invert(59%) sepia(0%) saturate(273%) hue-rotate(134deg) brightness(86%) contrast(77%)",
                      }}
                      alt=""
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{
              sx: { paddingBlock: 0, fontSize: 14 },
            }}
            sx={{
              ".css-1iklgb7-MuiInputBase-root-MuiOutlinedInput-root": {
                paddingRight: 1,
              },
            }}
          />
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default WriteComment;
