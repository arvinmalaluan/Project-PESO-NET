import { Avatar, Grid, InputAdornment, MenuItem } from "@mui/material";
import { Stack, TextField, Typography } from "@mui/material";

import { edit_icon, search_icon } from "../templates/image_imports";
import MessageDetails from "../modules/messages_components/MessageDetails";
import CreateNew from "../modules/messages_components/CreateNew";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const NewMessages = () => {
  const height_setter = window.innerHeight;
  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const [messages, setMessages] = useState([]);
  const [activeMessage, setActiveMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket(
      `ws://localhost:8000/get-my-convo/getmessages/${user_id}`
    );

    socket.onopen = function (event) {
      socket.send(JSON.stringify({ text: { action: "fetch_all" } }));
      console.log("WebSocket is open now.");
    };

    socket.onmessage = function (event) {
      const get_data = JSON.parse(event.data);
      const { text } = get_data;

      const if_new = {
        custom_key: text.custom_key,
        involve_one: text.involve_one,
        involve_two: text.involve_two,
        involve_one_name: text.involve_one_name,
        involve_two_name: text.involve_two_name,
        profile_one: text.profile_one,
        profile_two: text.profile_two,
      };

      text.length !== undefined
        ? setMessages(text)
        : setMessages((prev) => [...prev, if_new]);

      console.log(if_new);
    };

    socket.onclose = function (event) {
      console.log("Server closed unexpectedly");
    };
  }, []);

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid
        item
        md={3.5}
        sx={{
          height: "100%",
          bgcolor: "#fff",
          borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Stack sx={{ height: "100%" }}>
          <Stack
            sx={{
              height: height_setter * 0.1,
            }}
          >
            <SearchField list={messages} />
          </Stack>

          <Stack
            sx={{
              paddingInline: "16px 8px",
              height: height_setter * 0.85,
              overflowY: "scroll",
            }}
          >
            <Messages
              messages={messages}
              active={activeMessage}
              set={setActiveMessage}
              id={user_id}
            />
          </Stack>

          <Stack
            sx={{
              height: height_setter * 0.05,
              borderTop: "1px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <CTA_NewMessage set={setActiveMessage} />
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={8.5} sx={{ height: "100%" }}>
        {activeMessage && activeMessage !== -1 && (
          <MessageDetails id={activeMessage} />
        )}
        {activeMessage === -1 && (
          <CreateNew existing={messages} set={setActiveMessage} />
        )}
      </Grid>
    </Grid>
  );
};

export default NewMessages;

const SearchField = () => {
  return (
    <TextField
      size="small"
      placeholder="Search conversation"
      autoComplete="off"
      sx={{ paddingBlock: "16px 16px", paddingInline: "32px 16px" }}
      inputProps={{
        style: { fontSize: 14 },
      }}
      InputProps={{
        sx: { borderRadius: 5 },
        startAdornment: (
          <InputAdornment position="start">
            <img
              src={search_icon}
              style={{
                height: "20px",
                width: "20px",
                marginRight: "10px",
              }}
              alt=""
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

const Messages = ({ messages, set, active, id }) => {
  const Message = ({ details, id }) => {
    const handleClick = (custom_key) => {
      set(custom_key);
      console.log(custom_key);
    };

    return (
      <MenuItem
        disableRipple
        sx={{
          borderRadius: "10px",
          marginBottom: "5px",
          bgcolor: active === details.custom_key ? "whitesmoke" : "",
        }}
        onClick={() => handleClick(details.custom_key)}
      >
        <Avatar sx={{ height: 48, width: 48 }} />
        <Stack ml={2}>
          <Typography fontSize={16}>
            {details.involve_one === id
              ? details.involve_two_name
              : details.involve_one_name}
          </Typography>
          <Stack spacing={1} direction="row">
            <Typography fontSize={12}>Message is shown here.</Typography>
            <Typography fontSize={12} fontWeight={300}>
              24hrs ago.
            </Typography>
          </Stack>
        </Stack>
      </MenuItem>
    );
  };

  return messages.map((item, idx) => {
    return <Message key={idx} details={item} id={id} />;
  });
};

const CTA_NewMessage = ({ set }) => {
  const handleClick = () => {
    set(-1);
  };

  return (
    <MenuItem
      onClick={handleClick}
      sx={{
        height: "36px",
        gap: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={edit_icon} className="icon-16x16" alt="" />
      <Typography fontSize={14}>New Message</Typography>
    </MenuItem>
  );
};
