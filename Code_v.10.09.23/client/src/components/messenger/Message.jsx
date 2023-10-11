import React, { useEffect, useState } from "react";

import {
  Avatar,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import MessDetail from "./message_details";

// import statements for icons
import write_icon from "./../../assets/icons/pencil-2.svg";
import cross_icon from "./../../assets/icons/cross-2.svg";
import back_icon from "./../../assets/icons/arrow-left.svg";

import CreateMessage from "./new_message";
import MessageList from "./message_list";

import { get_profile } from "../../context/GetUserData";

function Message() {
  const [activeMessage, setActiveMessage] = useState("");
  const [details, setDetails] = useState();
  const [accList, setAccList] = useState([]);
  const [reload, setReload] = useState(false);

  const [messageList, setMessageList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    const filtered_array = [...messageList];

    let search_val = e.target.value;
    const new_list = filtered_array.filter((item) => {
      return item.name.toLowerCase().includes(search_val.toLowerCase());
    });

    search_val.length > 0 && setFilteredList(new_list);

    setSearchValue(search_val);

    search_val.length > 0 && setSearchOpen(true);
  };

  const resetSearch = () => {
    setSearchValue("");
    setFilteredList(messageList);
  };

  useEffect(() => {
    // console.log(filteredList);
  }, [filteredList]);

  useEffect(() => {
    const new_array = [];

    accList.length > 0 &&
      accList.map((item, idx) => {
        get_profile(item)
          .then((data) => {
            new_array.push({ name: data.name, account: data.account });
          })
          .catch((error) => {
            console.log(error);
          });
      });

    setMessageList(new_array);
  }, ["", accList]);

  return (
    <>
      <Grid item md={4} sm={12}>
        <Grid container>
          <Grid item md={12} sm={12}>
            <Stack
              spacing={1}
              direction={{
                sm: "row",
                md: "column",
              }}
              sx={{
                overflowY: {
                  sm: "scroll",
                  md: "none",
                },
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                  display: {
                    sm: "none",
                    md: "flex",
                  },
                }}
              >
                <Typography fontSize={16} fontWeight={500}>
                  Messages
                </Typography>
                <IconButton onClick={() => setActiveMessage(-1)}>
                  <img src={write_icon} alt="write-message" />
                </IconButton>
              </Stack>
              <Stack direction="row" spacing={1}>
                {searchOpen && (
                  <IconButton
                    onClick={() => {
                      setSearchOpen(false);
                      resetSearch();
                    }}
                  >
                    <img src={back_icon} alt="" />
                  </IconButton>
                )}
                <TextField
                  sx={{
                    display: {
                      sm: "none",
                      md: "block",
                    },
                  }}
                  placeholder="Search here ..."
                  autoComplete="off"
                  value={searchValue}
                  fullWidth
                  onChange={handleSearch}
                  size="small"
                  inputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          display: searchValue.length > 0 ? "" : "none",
                        }}
                      >
                        <IconButton size="small" onClick={resetSearch} hidden>
                          <img src={cross_icon} alt="" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              {searchOpen ? (
                <>
                  <Typography fontSize={16} fontWeight={500} pt={2}>
                    Search results
                  </Typography>

                  {filteredList.length > 0 &&
                    filteredList.map((item, idx) => {
                      return (
                        <MenuItem
                          key={idx}
                          disableGutters
                          sx={{ borderRadius: "5px", paddingBlock: "10px" }}
                          onClick={() => {
                            setActiveMessage(item.account);
                            setSearchOpen(false);
                            setSearchValue("");
                          }}
                        >
                          <Avatar sx={{ height: 32, width: 32, ml: 1 }} />
                          <Typography ml={1.5} fontSize={14}>
                            {item.name}
                          </Typography>
                        </MenuItem>
                      );
                    })}
                </>
              ) : (
                <MessageList
                  active={activeMessage}
                  set={setActiveMessage}
                  setDetails={setDetails}
                  setAccList={setAccList}
                  accList={accList}
                />
              )}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={8} sm={12}>
        {activeMessage === "" && (
          <>
            <Stack
              textAlign="center"
              sx={{
                height: "calc(100vh - 85px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >
              <Typography width="70%" fontSize={16}>
                Unlock Your Next Opportunity! Start a Conversation or Dive into
                Your Saved Jobs. Your Dream Career Awaits! 🚀🌟{" "}
                <strong>#JobPortalAdventures</strong>
              </Typography>
            </Stack>
          </>
        )}

        {activeMessage !== -1 && activeMessage !== "" && (
          <MessDetail id={activeMessage} setSearchOpen={setSearchOpen} />
        )}

        {activeMessage === -1 && (
          <CreateMessage
            list_details={accList}
            setActive={setActiveMessage}
            reload={reload}
            setReload={setReload}
            setAccList={setAccList}
            setSearchOpen={setSearchOpen}
          />
        )}
      </Grid>
    </>
  );
}

export default Message;
