import {
  Add,
  AddPhotoAlternate,
  Call,
  DriveFileRenameOutline,
  EmojiEmotions,
  Info,
  Search,
  Send,
  Videocam,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Messages() {
  const { uid } = useParams();
  const navigate = useNavigate();

  const arrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [activeList, setActiveList] = useState(null);

  useEffect(() => {
    uid !== undefined ? setActiveList(uid) : setActiveList(null);
  });

  return (
    <Grid item md={12}>
      <Grid
        container
        height="89vh"
        sx={{ borderRadius: "10px 10px 0 0" }}
        bgcolor="#fff"
      >
        <Grid
          item
          md={3}
          sx={{
            height: "100%",
            borderRight: "1px solid rgba(0, 0, 0, 0.12)",
            padding: "16px 0 8px 16px",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            pr={2}
          >
            <Typography fontSize={18} fontWeight={500}>
              Messages
            </Typography>
            <IconButton>
              <DriveFileRenameOutline />
            </IconButton>
          </Stack>

          <Stack mt={1} pr={2} pb={1}>
            <TextField
              placeholder="Search Conversation"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <Search sx={{ marginRight: 1 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack pr={1} sx={{ overflowY: "scroll", height: "73vh" }}>
            <List sx={{ width: "98%" }}>
              {arrayOfNum.map((list, idx) => {
                return (
                  <ListItemButton
                    disableGutters
                    key={idx}
                    onClick={() => {
                      setActiveList(idx);
                      navigate(`${idx}`);
                    }}
                    sx={{
                      bgcolor:
                        idx == activeList ? "rgba(0, 132, 255, 0.1)" : "",
                      padding: "8px 16px 8px 8px",
                      "&:hover": {
                        bgcolor:
                          idx == activeList
                            ? "rgba(0, 132, 255, 0.1)"
                            : "whitesmoke",
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography fontSize={16} fontWeight={500}>
                          Arvin Malaluan
                        </Typography>
                      }
                      secondary={
                        <Stack direction="row">
                          <Typography noWrap fontSize={12} color="#333333">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Impedit saepe et debitis expedita quisquam,
                            quaerat atque quas iste delectus repellendus
                            laudantium aliquam. Nihil hic, nulla aut harum
                            commodi deleniti cupiditate.
                          </Typography>
                          <Typography
                            sx={{ padding: "0 16px 0 8px" }}
                            fontSize={12}
                            color="primary"
                          >
                            12h
                          </Typography>
                          <Badge color="primary" variant="dot" />
                        </Stack>
                      }
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </Stack>
        </Grid>
        <Grid item md={9} height="inherit">
          {activeList != null ? (
            <>
              <Card elevation={0} sx={{ height: "100%" }}>
                <CardHeader
                  avatar={<Avatar />}
                  title={
                    <Typography fontSize={16} fontWeight={500}>
                      Arvin Malaluan
                    </Typography>
                  }
                  subheader={
                    <Typography fontSize={14} color="rgba(0, 0, 0, 0.5)">
                      Active 8h ago
                    </Typography>
                  }
                  action={
                    <>
                      <IconButton>
                        <Call color="primary" />
                      </IconButton>
                      <IconButton>
                        <Videocam color="primary" />
                      </IconButton>
                      <IconButton>
                        <Info color="primary" />
                      </IconButton>
                    </>
                  }
                  sx={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                    height: "10%",
                  }}
                />
                <CardContent sx={{ height: "80%" }}>
                  <Stack direction="row" justifyContent="start">
                    <Chip label="hello" sx={{ fontSize: "14px" }} />
                  </Stack>
                  <Stack direction="row" justifyContent="end">
                    <Chip
                      label="hi? how may i help you?"
                      sx={{
                        bgcolor: "#0084ff",
                        color: "white",
                        fontSize: "14px",
                      }}
                    />
                  </Stack>
                </CardContent>
                <CardActions
                  sx={{
                    height: "10%",
                    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    width="100%"
                  >
                    <IconButton
                      sx={{
                        bgcolor: "#0084ff",
                        color: "white",
                        height: "24px",
                        width: "24px",
                        "&:hover": {
                          bgcolor: "primary.main",
                        },
                      }}
                    >
                      <Add />
                    </IconButton>
                    <IconButton
                      sx={{
                        bgcolor: "#0084ff",
                        color: "white",
                        height: "24px",
                        width: "24px",
                        "&:hover": {
                          bgcolor: "primary.main",
                        },
                      }}
                    >
                      <AddPhotoAlternate sx={{ height: 16, width: 16 }} />
                    </IconButton>
                    <TextField
                      fullWidth
                      placeholder="Write your message here"
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <IconButton size="small">
                            <EmojiEmotions color="primary" />
                          </IconButton>
                        ),
                      }}
                    />
                    <IconButton>
                      <Send color="primary" />
                    </IconButton>
                  </Stack>
                </CardActions>
              </Card>
            </>
          ) : (
            <Container
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography color="#65676b" fontWeight={500} fontSize={20}>
                Select a chat or start a new conversation
              </Typography>
            </Container>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Messages;
