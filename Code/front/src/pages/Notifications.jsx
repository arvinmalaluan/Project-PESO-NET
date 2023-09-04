import {
  Card,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";

import { useState } from "react";
import NotificationTemplate from "../components/menu/NotificationTemplate";

function Notifications() {
  const [activeTab, setActiveTab] = useState(0);

  const activeStyle = {
    bgcolor: "#e7f3ff",
    color: "#1877f2",
  };
  const defaultStyle = {
    bgcolor: "transparent",
    color: "#3333333",
  };
  return (
    <Grid item md={12}>
      <Grid container>
        <Grid item md={3}></Grid>
        <Grid item md={6} p={1} bgcolor="#fff" height="calc(100vh - 80px)">
          <Grid container height="100%">
            <Card sx={{ height: "100%", width: "100%" }} elevation={0}>
              <CardHeader
                title={
                  <Typography fontSize={24} fontWeight={500}>
                    Notifications
                  </Typography>
                }
                action={
                  <IconButton>
                    <MoreHoriz />
                  </IconButton>
                }
                sx={{
                  paddingBottom: 1,
                }}
              />
              <Stack direction="row" pl={2} mb={2} spacing={1}>
                <Chip
                  label="All"
                  sx={activeTab ? defaultStyle : activeStyle}
                  // bgcolor: "#e7f3ff", color: "#1877f2",

                  onClick={() => {
                    setActiveTab(0);
                  }}
                />
                <Chip
                  label="Unread"
                  sx={activeTab ? activeStyle : defaultStyle}
                  onClick={() => {
                    setActiveTab(1);
                  }}
                />
              </Stack>

              <Typography fontSize={16} pl={2} fontWeight={500}>
                New
              </Typography>
              <Grid item md={12}>
                <NotificationTemplate />
              </Grid>

              <Typography fontSize={16} pl={2} pt={2} fontWeight={500}>
                Earlier
              </Typography>
              <Grid item md={12}>
                <NotificationTemplate />
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </Grid>
  );
}

export default Notifications;
