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
  const [details, setDetails] = useState([]);

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
    };

    socket.onclose = function (event) {
      console.log("Server closed unexpectedly");
    };
  }, []);

  return (
    <Grid container sx={{ height: "100%", width: "100%" }}>
      <Grid
        item
        md={3.5}
        sm={12}
        sx={{
          height: "100%",
          width: "100%",
          borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Stack sx={{ height: { md: "100%", xs: "97%" } }}>
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
              setDetails={setDetails}
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
      <Grid item md={8.5} sm={12} sx={{ height: "100%", width: "100%" }}>
        {activeMessage && activeMessage !== -1 && (
          <MessageDetails id={activeMessage} details={details} />
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
      sx={{
        paddingBlock: "16px 16px",
        paddingInline: "32px 16px",
        "& fieldset": { border: "none" },
      }}
      inputProps={{
        style: { fontSize: 14 },
      }}
      InputProps={{
        sx: {
          width: "100%",
          borderRadius: "5px",
          bgcolor: "whitesmoke",
          paddingLeft: 1,
          fontSize: 14,
        },
        startAdornment: (
          <InputAdornment position="start">
            <img
              src={search_icon}
              style={{
                height: "20px",
                width: "20px",
                marginRight: "10px",
                marginLeft: "4px",
              }}
              alt=""
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

const Messages = ({ messages, set, active, id, setDetails }) => {
  const Message = ({ details, id }) => {
    const [myDetails, setMyDetails] = useState(null);
    const name =
      details.involve_one === id
        ? details.involve_two_name
        : details.involve_one_name;

    const profile =
      details.involve_one === id ? details.profile_two : details.profile_one;

    const receiver =
      details.involve_one === id ? details.involve_two : details.involve_one;

    useEffect(() => {
      setMyDetails({ name: name, profile: profile });
    }, []);

    const handleClick = (details) => {
      set(details.custom_key);

      setDetails({ name: name, profile: profile, receiver: receiver });
    };

    return (
      <MenuItem
        disableRipple
        sx={{
          borderRadius: "10px",
          marginBottom: "5px",
          bgcolor: active === details.custom_key ? "whitesmoke" : "",
        }}
        onClick={() => handleClick(details)}
      >
        <Avatar
          src={myDetails ? `http://127.0.0.1:8000${myDetails.profile}` : ""}
          sx={{ height: 48, width: 48 }}
        />
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
