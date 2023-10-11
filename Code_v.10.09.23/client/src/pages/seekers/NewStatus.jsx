import {
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Preview from "../../modules/saved_jobs_components/Preview";
import { search_icon } from "../../templates/image_imports";
import JobPosts from "../../modules/jobs_components/JobPosts";
import StatusView from "../../modules/saved_jobs_components/StatusView";

const NewStatus = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid
        item
        md={3}
        sx={{ height: "100%", bgcolor: "#fff", padding: "16px 16px 16px 32px" }}
      >
        <DefinedTextField />
        <Stack mt={2} spacing={1}>
          <JobPosts />
          <JobPosts />
          <JobPosts />
          <JobPosts />
        </Stack>
      </Grid>

      <Grid item md={4} sx={{ height: "100%", bgcolor: "#fff", padding: 2 }}>
        <Preview />
      </Grid>

      <Grid
        item
        md={5}
        sx={{ height: "100%", bgcolor: "#fff", padding: "16px 32px 16px 16px" }}
      >
        <Stack sx={{ padding: 2, width: "100%" }}>
          <Typography mb={3}>Progress</Typography>
          <StatusView />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default NewStatus;

const DefinedTextField = () => {
  return (
    <TextField
      fullWidth
      placeholder="Search application"
      size="small"
      autoComplete="off"
      InputProps={{
        sx: { borderRadius: 5 },
        startAdornment: (
          <InputAdornment position="start">
            <img
              src={search_icon}
              style={{
                height: "20px",
                width: "20px",
                marginRight: "10px",
              }}
              alt=""
            />
          </InputAdornment>
        ),
      }}
    />
  );
};
