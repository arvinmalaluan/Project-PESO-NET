import { Grid, Typography } from "@mui/material";
import FilterTemplate from "../../modules/saved_jobs_components/FilterTemplate";
import JobPosts from "../../modules/jobs_components/JobPosts";
import Preview from "../../modules/saved_jobs_components/Preview";

const NewSavedJobs = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid
        item
        md={3}
        sx={{
          height: "100%",
          padding: "16px 32px",
          bgcolor: "#fff",
          borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <FilterTemplate />
      </Grid>

      <Grid
        item
        md={5}
        sx={{
          height: "100%",
          padding: "16px 24px",
          bgcolor: "#fff",
        }}
      >
        <Typography mb={1} fontSize={16}>
          Earlier
        </Typography>
        <JobPosts />
      </Grid>

      <Grid
        item
        md={4}
        sx={{ height: "100%", padding: "16px 24px", bgcolor: "#fff" }}
      >
        <Preview />
      </Grid>
    </Grid>
  );
};

export default NewSavedJobs;
