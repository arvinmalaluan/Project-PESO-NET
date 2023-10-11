import {
  Avatar,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import { Stack, TextField, Typography } from "@mui/material";

import {
  phone,
  video,
  dots_horiz,
  chevron_right,
} from "../../templates/image_imports";
import { smile, cirle_plus, send } from "../../templates/image_imports";
import { linkedin, bell_icon } from "../../templates/image_imports";
import { search_icon } from "../../templates/image_imports";

import check_position from "./format_chats";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

const MessageDetails = ({ id }) => {
  const height_setter = window.innerHeight;
  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const [messages, setMessages] = useState([]);
  const [payload, setPayload] = useState({});

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/get-my-convo/${id}`);

    socket.onopen = function (event) {
      console.log("WebSocket is open now.");
    };

    socket.onmessage = function (event) {
      const get_data = JSON.parse(event.data);

      console.log(get_data);
    };

    socket.onclose = function (event) {
      console.log("Server closed unexpectedly");
    };
  }, []);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/get-my-convo/${id}`);

    socket.onopen = function (event) {
      console.log("websocket2 is open");

      socket.send(
        JSON.stringify({
          text: {
            ...payload,
            custom_key: id,
            command: "fetch_messages",
          },
        })
      );

      socket.onmessage = function (event) {
        const get_data = JSON.parse(event.data);
        const empty_array = [];

        get_data.text.length !== undefined &&
          get_data.text.map((item) => {
            console.log(item.receiver, user_id);
            empty_array.push({
              name: item.receiver == user_id ? "Me" : "You",
              message: item.message,
            });
          });

        get_data.text.length !== undefined && setMessages(empty_array);
      };
    };
  }, [id]);

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item md={8} sx={{ height: "100%" }}>
        <Stack sx={{ height: "100%", bgcolor: "#fff" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              height: height_setter * 0.075,
            }}
          >
            <FileHeader />
          </Stack>

          <Stack
            sx={{
              paddingInline: "16px 8px",
              height: height_setter * 0.85,
              borderTop: "1px solid rgba(0, 0, 0, 0.12)",
              overflowY: "scroll",
            }}
          >
            <FileBody messages={messages} />
          </Stack>

          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{
              height: height_setter * 0.075,
              borderTop: "1px solid rgba(0, 0, 0, 0.12)",
              paddingInline: "8px 16px",
            }}
          >
            <FileFooter />
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        md={4}
        sx={{ height: "100%", borderLeft: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <ConversationInformation />
      </Grid>
    </Grid>
  );
};

export default MessageDetails;

const FileHeader = () => {
  const filter_color =
    "invert(22%) sepia(79%) saturate(2464%) hue-rotate(233deg) brightness(102%) contrast(87%)";

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        ml={2}
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Avatar sx={{ height: 30, width: 30 }} />
        <Typography fontSize={14}>Astrid S.</Typography>
      </Stack>

      <Stack direction="row" mr={2} spacing={1}>
        <IconButton>
          <img
            src={phone}
            style={{ filter: filter_color }}
            className="icon-16x16"
            alt=""
          />
        </IconButton>

        <IconButton>
          <img
            src={video}
            style={{ filter: filter_color }}
            className="icon-16x16"
            alt=""
          />
        </IconButton>

        <IconButton>
          <img
            src={dots_horiz}
            style={{ filter: filter_color }}
            className="icon-16x16"
            alt=""
          />
        </IconButton>
      </Stack>
    </>
  );
};

const FileBody = ({ messages }) => {
  const check_prev_next = (name, idx) => {
    if (name === "Me") {
      return { justifyContent: "end" };
    }
  };

  console.log(messages);

  const msg_styles = (name, idx) => {
    const return_msg = check_position(name, idx, messages);

    return return_msg;
  };

  return (
    <Stack mt={1} mb={2}>
      {messages.map((item, idx) => {
        return (
          <Stack
            key={idx}
            direction="row"
            alignItems="end"
            spacing={1}
            mt={1}
            mr={1}
            sx={() => check_prev_next(item.name, idx)}
          >
            {item.name === "You" &&
            idx !== messages.length - 1 &&
            messages[idx + 1].name !== "You" ? (
              <>
                <Avatar sx={{ height: 28, width: 28 }} />
                <Chip
                  label={item.message}
                  sx={() => msg_styles(item.name, idx)}
                />
              </>
            ) : (
              <Chip
                label={item.message}
                style={{ marginLeft: "34px" }}
                sx={() => msg_styles(item.name, idx)}
              />
            )}

            {console.log(messages)}
          </Stack>
        );
      })}
    </Stack>
  );
};

const FileFooter = () => {
  const filter_color =
    "invert(22%) sepia(79%) saturate(2464%) hue-rotate(233deg) brightness(102%) contrast(87%)";

  return (
    <>
      <IconButton size="small">
        <img src={cirle_plus} alt="" />
      </IconButton>

      <TextField
        size="small"
        fullWidth
        placeholder="Search conversation"
        autoComplete="off"
        inputProps={{
          style: { fontSize: 14 },
        }}
        InputProps={{
          sx: { borderRadius: 5 },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small" sx={{ marginRight: "-8px" }}>
                <img
                  src={smile}
                  style={{
                    height: "20px",
                    width: "20px",
                    filter: filter_color,
                  }}
                  alt=""
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <IconButton size="small">
        <img
          src={send}
          style={{ filter: filter_color }}
          className="icon-20x20"
          alt=""
        />
      </IconButton>
    </>
  );
};

const ConversationInformation = () => {
  const NewIconItem = ({ name, icon }) => {
    return (
      <Stack width="40px" spacing={1}>
        <IconButton
          sx={{
            alignSelf: "center",
            height: "32px",
            width: "32px",
            bgcolor: "rgba(245, 245, 245, 0.8)",
          }}
        >
          <img src={icon} alt="" className="icon-16x16" />
        </IconButton>
        <Typography textAlign="center" fontSize={12} fontWeight={300}>
          {name}
        </Typography>
      </Stack>
    );
  };

  const NewMenuItem = ({ name }) => {
    return (
      <MenuItem
        sx={{
          marginInline: 1,
          padding: "6px 6px 6px 16px",
          borderRadius: "5px",
        }}
        disableGutters
      >
        <Typography flexGrow={1} fontSize={14}>
          {name}
        </Typography>
        <img src={chevron_right} alt="" className="icon-20x20" />
      </MenuItem>
    );
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#fff",
      }}
    >
      <Stack
        alignItems="center"
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Avatar
          sx={{
            height: 72,
            width: 72,
            marginInline: "auto",
            marginBlock: "16px 12px",
          }}
        />
        <Typography fontSize={18} fontWeight={500}>
          Arvin C. Malaluan
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2} mt={3}>
          <NewIconItem name="Profile" icon={linkedin} />
          <NewIconItem name="Mute" icon={bell_icon} />
          <NewIconItem name="Search" icon={search_icon} />
        </Stack>

        <Stack mt={3} sx={{ width: "100%" }}>
          <NewMenuItem name="Chat Info" />
          <NewMenuItem name="Media, files, and links" />
          <NewMenuItem name="Privace and support" />
        </Stack>
      </Stack>
    </Stack>
  );
};
