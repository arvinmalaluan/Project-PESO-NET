import { Chip, Grid, Stack, Typography } from "@mui/material";
import NotifTemp from "./../common/notification_template";
import { useState } from "react";

function Notifications() {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <Grid item md={3}></Grid>
      <Grid item md={6}>
        <Stack
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            height: "86vh",
            padding: "16px 16px 0",
            overflowY: "scroll",
            borderRadius: "5px 5px 0 0",
          }}
        >
          <Typography fontSize={18} mb={2} fontWeight={500}>
            Notifications
          </Typography>
          <Stack direction="row" mb={2} spacing={1}>
            <Chip
              label="All"
              sx={{
                bgcolor: isActive ? "#e7f3ff" : "#fff",
                color: isActive && "#1877f2",
                fontWeight: isActive && "500",
              }}
              onClick={() => setIsActive(!isActive)}
            />
            <Chip
              label="Unread"
              sx={{
                bgcolor: !isActive ? "#e7f3ff" : "#fff",
                color: !isActive && "#1877f2",
                fontWeight: !isActive && "500",
              }}
              onClick={() => setIsActive(!isActive)}
            />
          </Stack>
          <Stack>
            <Typography fontSize={16} fontWeight={500}>
              This week
            </Typography>

            <NotifTemp />
          </Stack>

          <Typography fontSize={16} fontWeight={500} mt={2}>
            Earlier
          </Typography>

          <NotifTemp />
        </Stack>
      </Grid>
      <Grid item md={3}></Grid>
    </>
  );
}

export default Notifications;
