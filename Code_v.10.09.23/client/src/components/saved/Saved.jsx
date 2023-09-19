import { Grid } from "@mui/material";
import FilterTemp from "./filter";
import Preview from "./preview";

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
        Hello
      </Grid>
    </>
  );
}

export default Saved;
