import { Grid } from "@mui/material";
import FilterTemp from "./filter";
import Preview from "./preview";
import JobLite from "./job_lite";

function Saved() {
  return (
    <>
      <Grid item md={3}>
        <FilterTemp />
      </Grid>
      <Grid item md={4}>
        <Preview />
      </Grid>
      <Grid item md={5}>
        <JobLite />
      </Grid>
    </>
  );
}

export default Saved;
