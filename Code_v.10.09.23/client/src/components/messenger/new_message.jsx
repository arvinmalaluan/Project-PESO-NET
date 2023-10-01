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

import { get_accounts } from "../../context/GetUserData";
import jwtDecode from "jwt-decode";

const CreateMessage = () => {
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState([]);
  const [list, setList] = useState([]);

  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const [convo, setConvo] = useState({
    involve_one: user_id,
    involve_two: "",
  });

  const [payload, setPayload] = useState({
    action: "",
    conversation: "",
    custom_key: "",
    message_content: "",
  });

  const [receiver, setReceiver] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
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
    console.log(payload);
  }, [payload.custom_key]);

  const handleSearch = (event) => {
    setAnchorEl(event.currentTarget);
    setSearch(event.target.value);

    const searchTerm = event.target.value;
    const new_details = [...details];
    const searched_users = new_details.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setList(searched_users);
  };

  const handleMenuItemClick = (name, account) => {
    setAnchorEl(null);
    setReceiver(name);
    setConvo({ ...convo, involve_two: account });
  };

  const handleSendMessage = () => {
    let custom_key;

    convo.involve_one > convo.involve_two
      ? (custom_key =
          convo.involve_two.toString() + convo.involve_one.toString())
      : (custom_key =
          convo.involve_one.toString() + convo.involve_two.toString());

    setPayload({ ...payload, custom_key: custom_key, action: "new_message" });
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
                  value={payload.message_content}
                  placeholder={
                    receiver === ""
                      ? "Currently disabled. Select a recepient first"
                      : "Type your message here"
                  }
                  onChange={(e) => {
                    setPayload({ ...payload, message_content: e.target.value });
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
                  disabled={payload.message_content === ""}
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
                      <Typography fontSize={14}>{item.name}</Typography>
                    </Stack>
                  </Stack>
                </MenuItem>
              )
            );
          })}

          {list.length < 1 && (
            <Typography
              fontSize={14}
              sx={{
                textAlign: "center",
                margin: "auto",
              }}
            >
              Sorry, we couldn't find any matches.
            </Typography>
          )}
        </Stack>
      </Popper>
    </>
  );
};

export default CreateMessage;
