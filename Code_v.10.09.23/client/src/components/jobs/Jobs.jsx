import { Grid, Stack, TextField } from "@mui/material";
import React from "react";
import { Outlet, useParams } from "react-router-dom";

function Jobs() {
  const { job_id } = useParams();

  return (
    <>
      <Grid item md={job_id ? 4 : 12}>
        <Grid container>
          <Grid item md={12}>
            <TextField
              placeholder="Search here ..."
              fullWidth
              size="small"
              inputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={8}>
        <Stack>
          <Outlet />
        </Stack>
      </Grid>
    </>
  );
}

export default Jobs;
