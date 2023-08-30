import { Grid } from "@mui/material";
import { Outlet, useParams } from "react-router-dom";
import CardTemplate from "../components/common/CardTemplate";
import { useState } from "react";

function Jobs() {
  const { jobId } = useParams();

  return (
    <Grid container>
      <Grid item md={jobId ? 3 : 12}>
        <Grid container spacing={2}>
          <Grid item md={jobId ? 12 : 3}>
            <CardTemplate uniqueId={1} />
          </Grid>
          <Grid item md={jobId ? 12 : 3}>
            <CardTemplate uniqueId={2} />
          </Grid>
          <Grid item md={jobId ? 12 : 3}>
            <CardTemplate uniqueId={41} />
          </Grid>
          <Grid item md={jobId ? 12 : 3}>
            <CardTemplate uniqueId={43} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item pl={4} display={jobId ? "block" : "none"} md={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default Jobs;
