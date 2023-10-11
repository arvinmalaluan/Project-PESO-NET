import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  MenuItem,
  Popper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";

import { create_convo, get_accounts } from "../../context/GetUserData";
import jwtDecode from "jwt-decode";

const CreateMessage = ({
  list_details,
  setActive,
  reload,
  setReload,
  setAccList,
  setSearchOpen,
}) => {
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState([]);
  const [list, setList] = useState([]);

  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const [convo, setConvo] = useState({
    involve_one: user_id,
    involve_two: "",
  });

  // sender, receiver, custom_key, message
  const [payload, setPayload] = useState({
    sender: "",
    receiver: "",
    custom_key: "",
    message: "",
  });

  const [receiver, setReceiver] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setSearchOpen(false);

    get_accounts()
      .then((data) => {
        data.map((item) => {
          setDetails((prevState) => [
            ...prevState,
            {
              name: item.name,
              account: item.account,
            },
          ]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log("ready to be submitted");
  }, [payload.custom_key]);

  const handleSearch = (event) => {
    setSearch(event.target.value);

    const searchTerm = event.target.value;
    const new_details = [...details];
    const searched_users = new_details.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setList(searched_users);
  };

  const handleMenuItemClick = (name, account) => {
    if (list_details.includes(account)) {
      setActive(account);
    } else {
      setReceiver(name);
      setConvo({ ...convo, involve_two: account });
      setPayload({ ...payload, receiver: account });
    }

    setAnchorEl(null);
  };

  const handleSendMessage = () => {
    let custom_key;

    convo.involve_one > convo.involve_two
      ? (custom_key =
          convo.involve_one.toString() + convo.involve_two.toString())
      : (custom_key =
          convo.involve_two.toString() + convo.involve_one.toString());

    const form_data = {
      sender: user_id,
      receiver: payload.receiver,
      custom_key: custom_key,
      message: payload.message,
    };

    create_convo(form_data);
    setReload(!reload);
    setAccList([...list_details, payload.receiver]);
    setActive(payload.receiver);
  };

  return (
    <>
      <Card elevation={0} sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}>
        <Grid container height="calc(100vh - 85px)">
          <Grid item md={12} height="100%">
            <Stack
              height="12%"
              sx={{ mb: 1, borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <CardHeader
                title={
                  <>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      sx={{
                        height: "100%",
                      }}
                    >
                      <Typography>To: </Typography>
                      {receiver ? (
                        <Chip
                          label={receiver}
                          sx={{
                            bgcolor: "#f0f7ff",
                            color: "#0072e5",
                          }}
                          onDelete={() => setReceiver("")}
                        />
                      ) : (
                        <TextField
                          placeholder="Search"
                          size="small"
                          fullWidth
                          sx={{
                            "& fieldset": { border: "none" },
                          }}
                          onChange={handleSearch}
                          autoComplete="new-password"
                          onFocus={(event) => setAnchorEl(event.currentTarget)}
                        />
                      )}
                    </Stack>
                  </>
                }
                sx={{ height: "100%" }}
              />
            </Stack>

            <Stack height="76%" sx={{ overflowY: "scroll" }}>
              <CardContent></CardContent>
            </Stack>

            <Stack
              height="12%"
              justifyContent="center"
              mt={1}
              sx={{ mb: 1, borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <CardActions sx={{ mt: "-15px", padding: "0px 16px" }}>
                <TextField
                  value={payload.message}
                  autoComplete="new-password"
                  placeholder={
                    receiver === ""
                      ? "Currently disabled. Select a recepient first"
                      : "Type your message here"
                  }
                  onChange={(e) => {
                    setPayload({ ...payload, message: e.target.value });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                  size="small"
                  inputProps={{ style: { fontSize: 14, padding: "8px 16px" } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  fullWidth
                  disabled={receiver === ""}
                />

                <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  disabled={payload.message === ""}
                  onClick={handleSendMessage}
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
        </Grid>
      </Card>

      <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
        <Stack
          sx={{
            bgcolor: "white",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "5px",
            p: 1,
            width: "300px",
            height: "400px",
            overflowY: "scroll",
          }}
        >
          {list.map((item, idx) => {
            return (
              search !== "" && (
                <MenuItem
                  key={idx}
                  onClick={() => handleMenuItemClick(item.name, item.account)}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar sx={{ height: 30, width: 30 }} />
                    <Stack>
                      <Typography fontSize={14}>
                        {item.account == user_id
                          ? item.name + " (You)"
                          : item.name}
                      </Typography>
                    </Stack>
                  </Stack>
                </MenuItem>
              )
            );
          })}

          {list.length < 1 && (
            <>
              <Typography
                fontSize={100}
                sx={{
                  textAlign: "center",
                  marginInline: "auto",
                  mb: 0,
                  mt: 10,
                }}
              >
                {">.<"}
              </Typography>
              <Typography
                fontSize={14}
                sx={{
                  textAlign: "center",
                  margin: "auto",
                  mt: 0,
                }}
              >
                Search their names, kickstart a chat!
              </Typography>
            </>
          )}
        </Stack>
      </Popper>
    </>
  );
};

export default CreateMessage;
