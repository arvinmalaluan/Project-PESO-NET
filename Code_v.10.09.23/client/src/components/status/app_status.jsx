import { Badge, Grid, Stack, Typography } from "@mui/material";
import { Timeline } from "@mui/lab";

import Preview from "../saved/preview";
import TimeLineTemp from "./timeline";

function AppStatus() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Typography fontSize={12}>Application on progress</Typography>
        </Grid>

        <Grid item md={5}>
          <Stack sx={{ height: "83vh" }}>
            <Preview />
          </Stack>
        </Grid>
        <Grid item md={7}>
          <Timeline sx={{ display: "flex", flexDirection: "column-reverse" }}>
            <TimeLineTemp />
            <TimeLineTemp />
          </Timeline>
        </Grid>
      </Grid>
    </>
  );
}

export default AppStatus;
