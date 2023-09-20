import { Grid, Stack, TextField, Typography } from "@mui/material";
import AppTemp from "./app_template";
import AppStatus from "./app_status";

function Status() {
  return (
    <>
      <Grid item md={3}>
        <Stack
          height="83vh"
          sx={{ padding: 2, border: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <TextField
            placeholder="Search here ..."
            size="small"
            sx={{ marginBottom: 1 }}
          />

          <AppTemp />
        </Stack>
      </Grid>
      <Grid item md={9}>
        <AppStatus />
      </Grid>
    </>
  );
}

export default Status;
