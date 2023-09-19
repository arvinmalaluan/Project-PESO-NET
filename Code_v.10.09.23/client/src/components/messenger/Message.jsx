import { Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import MessTemp from "../common/message_template";
import { useParams } from "react-router-dom";
import MessDetail from "./message_details";

function Message() {
  const { message_id } = useParams();

  //   alert(message_id);
  return (
    <>
      <Grid item md={4}>
        <Grid container>
          <Grid item md={12}>
            <Stack spacing={1}>
              <Stack pb={1}>
                <Typography fontSize={16} fontWeight={500}>
                  Messages
                </Typography>
              </Stack>
              <TextField
                placeholder="Search here ..."
                fullWidth
                size="small"
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
              />
              <MessTemp />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={8}>
        {message_id == undefined ? (
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
              fullWidth
            >
              <Typography width="70%" fontSize={16}>
                Unlock Your Next Opportunity! Start a Conversation or Dive into
                Your Saved Jobs. Your Dream Career Awaits! 🚀🌟{" "}
                <strong>#JobPortalAdventures</strong>
              </Typography>
            </Stack>
          </>
        ) : (
          <>
            <MessDetail />
          </>
        )}
      </Grid>
    </>
  );
}

export default Message;
