import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import jwtDecode from "jwt-decode";

import { useEffect, useState } from "react";
import { get_profile } from "../../context/GetUserData";

import dots_horizontal from "./../../assets/icons/dots-horizontal.svg";

function MessDetail({ id, setSearchOpen }) {
  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [details, setDetails] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const [payload, setPayload] = useState({
    conversation: "",
    receiver: "",
    message: "",
    command: "",
    custom_key: "",
  });

  const set_custom_key =
    id > user_id
      ? id.toString() + user_id.toString()
      : user_id.toString() + id.toString();

  useEffect(() => {
    const socket = new WebSocket(
      `ws://localhost:8000/get-my-convo/${set_custom_key}`
    );

    socket.onopen = function (event) {
      console.log("WebSocket is open now.");
    };

    socket.onmessage = function (event) {
      const get_data = JSON.parse(event.data);

      const temp_holder = {
        receiver: get_data.text.receiver,
        message: get_data.text.message,
      };

      get_data.text.length === undefined &&
        setMessages((prevstate) => [...prevstate, temp_holder]);
    };

    socket.onclose = function (event) {
      console.log("Server closed unexpectedly");
    };

    setSocket(socket);
  }, []);

  useEffect(() => {
    setMessages([]);

    get_profile(id)
      .then((data) => {
        data.name && setDetails(data);
      })
      .catch((error) => {
        setDetails("");
      });

    setSearchOpen(false);
    triggerFetch();
  }, [id]);

  const triggerFetch = () => {
    const socket = new WebSocket(
      `ws://localhost:8000/get-my-convo/${set_custom_key}`
    );

    socket.onopen = function (event) {
      console.log("websocket2 is open");

      socket.send(
        JSON.stringify({
          text: {
            ...payload,
            custom_key: set_custom_key,
            command: "fetch_messages",
          },
        })
      );

      socket.onmessage = function (event) {
        const get_data = JSON.parse(event.data);
        const empty_array = [];

        const temp_holder = {
          receiver: get_data.text.receiver,
          message: get_data.text.message,
        };

        get_data.text.length !== undefined &&
          get_data.text.map((item) => {
            empty_array.push({
              receiver: item.receiver,
              message: item.message,
            });
          });

        get_data.text.length !== undefined && setMessages(empty_array);
      };
    };
  };

  const handleSubmit = () => {
    try {
      socket.send(JSON.stringify({ text: payload }));
    } catch (error) {
      alert(error);
    }

    setPayload({ ...payload, message: "" });
  };

  const show_info = () => {
    setShowInfo(!showInfo);
  };

  const handleChange = (event) => {
    setPayload({
      conversation: set_custom_key,
      receiver: id,
      message: event.target.value,
      command: "new_message",
    });
  };

  const handleKeyDown = (event) => {
    event.key === "Enter" && handleSubmit();
  };

  return (
    details.id && (
      <>
        <Card elevation={0} sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}>
          <Grid container height="calc(100vh - 85px)">
            <Grid
              item
              md={showInfo ? 8 : 12}
              sm={12}
              height="100%"
              sx={{
                borderRight: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >
              <Stack
                height="12%"
                alignItems="center"
                direction="row"
                spacing={2}
                sx={{
                  mb: 1,
                  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                  paddingInline: 2,
                }}
              >
                <Avatar />

                <Stack flexGrow={1}>
                  <Typography fontSize={18} fontWeight={500}>
                    {details.name ? details.name : "Loading ..."}
                  </Typography>
                  <Typography fontSize={12}>Active now</Typography>
                </Stack>

                <IconButton size="small" onClick={show_info}>
                  <img src={dots_horizontal} alt="" />
                </IconButton>
              </Stack>

              <Stack sx={{ overflowY: "scroll", height: "76%" }}>
                <CardContent>
                  {messages &&
                    messages.map((item, idx) => {
                      return (
                        <Stack
                          key={idx}
                          direction="row"
                          justifyContent={
                            item.receiver.toString() !== user_id.toString()
                              ? "end"
                              : "start"
                          }
                          spacing={1.25}
                          mb={1}
                        >
                          <Chip
                            label={item.message}
                            sx={{
                              bgcolor:
                                item.receiver.toString() !==
                                  user_id.toString() && "#1976d2",
                              color:
                                item.receiver.toString() !==
                                  user_id.toString() && "#fff",
                              maxWidth: "60%",
                              padding: "8px 4px",
                              height: "auto",
                              "& .MuiChip-label": {
                                display: "block",
                                whiteSpace: "normal",
                              },
                            }}
                          />
                        </Stack>
                      );
                    })}
                </CardContent>
              </Stack>

              <Stack
                height="12%"
                justifyContent="center"
                mt={1}
                sx={{ mb: 1, borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}
              >
                <CardActions sx={{ mt: "-15px", padding: "0px 16px" }}>
                  <TextField
                    placeholder="Type your message here"
                    value={payload.message}
                    size="small"
                    autoComplete="off"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    inputProps={{
                      style: { fontSize: 14, padding: "8px 16px" },
                    }}
                    InputLabelProps={{ style: { fontSize: 14 } }}
                    fullWidth
                  />

                  <Button
                    variant="contained"
                    size="small"
                    disableElevation
                    onClick={handleSubmit}
                    sx={{
                      textTransform: "none",
                      fontSize: 14,
                      borderRadius: "5px",
                      marginLeft: 1,
                    }}
                  >
                    Send
                  </Button>
                </CardActions>
              </Stack>
            </Grid>
            <Grid
              item
              md={4}
              height="100%"
              sx={{
                display: {
                  sm: "none",
                  md: showInfo ? "unset" : "none",
                },
              }}
            >
              <Stack
                height="30%"
                textAlign="center"
                sx={{
                  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                  marginBottom: 2,
                }}
              >
                <Avatar
                  sx={{
                    marginInline: "auto",
                    height: 48,
                    width: 48,
                    marginTop: 5,
                  }}
                />
                <Typography fontSize={18} fontWeight={500} margin="16px 0 4px">
                  {details.name ? details.name : "Loading ..."}
                </Typography>
                <Typography fontSize={12} fontStyle="italic">
                  ...
                </Typography>
              </Stack>

              <Stack spacing={1} height="20%" p={2}>
                <Typography
                  fontSize={14}
                  pb={2}
                  textAlign="center"
                  fontStyle="italic"
                >
                  {details.bio ? details.bio : "set bio"}
                </Typography>

                <Stack spacing={1}>
                  <Button
                    variant="contained"
                    size="small"
                    disableElevation
                    sx={{ textTransform: "none" }}
                  >
                    View profile
                  </Button>
                </Stack>
              </Stack>

              <Stack
                p="16px 16px 0 16px"
                height="40%"
                sx={{ overflowY: "scroll" }}
              >
                <Typography fontSize={16} fontWeight={500}>
                  Media and Files
                </Typography>

                <Stack
                  direction="row"
                  mt={1}
                  sx={{
                    height: "100%",
                    borderRadius: "5px 5px 0 0",
                    padding: 2,
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
                >
                  <Typography fontSize={12}>
                    All files and photos will appear here.
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </>
    )
  );
}

export default MessDetail;
