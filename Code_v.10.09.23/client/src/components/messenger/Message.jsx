import React, { useState } from "react";

import { Grid, IconButton, Stack, TextField, Typography } from "@mui/material";

import MessTemp from "../common/message_template";
import MessDetail from "./message_details";

// import statements for icons
import write_icon from "./../../assets/icons/pencil-2.svg";
import CreateMessage from "./new_message";

function Message() {
  const [activeMessage, setActiveMessage] = useState("");

  return (
    <>
      <Grid item md={4}>
        <Grid container>
          <Grid item md={12}>
            <Stack spacing={1}>
              <Stack direction="row" justifyContent="space-between">
                <Typography fontSize={16} fontWeight={500}>
                  Messages
                </Typography>
                <IconButton onClick={() => setActiveMessage(-1)}>
                  <img src={write_icon} alt="write-message" />
                </IconButton>
              </Stack>
              <TextField
                placeholder="Search here ..."
                fullWidth
                size="small"
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
              />
              <MessTemp set={setActiveMessage} id={1} active={activeMessage} />
              <MessTemp set={setActiveMessage} id={2} active={activeMessage} />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={8}>
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

        {activeMessage !== -1 && activeMessage !== "" && <MessDetail />}

        {activeMessage === -1 && <CreateMessage />}
      </Grid>
    </>
  );
}

export default Message;
