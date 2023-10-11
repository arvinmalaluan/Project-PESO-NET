import { Avatar, Grid, Paper, Stack } from "@mui/material";
import { IconButton, Chip, Typography } from "@mui/material";

// imports for icons
import {
  cross_icon,
  arrow_circle_right,
} from "./../../templates/image_imports";

const NewHome = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        p="16px 32px 8px"
        justifyContent="space-between"
      >
        <Typography>Top picks for you</Typography>
        <Typography fontSize={14} fontWeight={300}>
          See all
        </Typography>
      </Stack>
      <Grid container p="8px 32px" spacing={2}>
        <Grid item md={4}>
          <JobPost />
        </Grid>

        <Grid item md={4}>
          <JobPost />
        </Grid>

        <Grid item md={4}>
          <JobPost />
        </Grid>

        <Grid item md={4}>
          <JobPost />
        </Grid>
      </Grid>

      <Stack
        direction="row"
        alignItems="center"
        p="16px 32px 8px"
        justifyContent="space-between"
      >
        <Typography>All jobs</Typography>
        <Typography fontSize={14} fontWeight={300}>
          See all
        </Typography>
      </Stack>
      <Grid container p="8px 32px" spacing={2}>
        <Grid item md={4}>
          <JobPost />
        </Grid>

        <Grid item md={4}>
          <JobPost />
        </Grid>

        <Grid item md={4}>
          <JobPost />
        </Grid>
      </Grid>
    </>
  );
};

export default NewHome;

const JobPost = () => {
  return (
    <Paper elevation={0} sx={{ padding: "16px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="start">
        <Stack direction="row" spacing={2}>
          <Avatar variant="rounded" />
          <Stack>
            <Typography>UI/UX Designer</Typography>
            <Typography fontSize={12}>Google, Inc.</Typography>
          </Stack>
        </Stack>

        <IconButton size="small">
          <img src={cross_icon} alt="" />
        </IconButton>
      </Stack>

      <Stack direction="row" mt={2} spacing={1}>
        <Chip label="Full time" />
        <Chip label="Onsite" />
        <Chip label="College Graduate" />
      </Stack>

      <Stack mt={2}>
        <Typography fontSize={14} mb={1}>
          About the job
        </Typography>
        <Typography fontSize={14} fontWeight={300} className="clip-2-lines">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos adipisci
          harum accusantium, quo iste laudantium! Ipsum aspernatur veritatis a,
          dolores totam omnis exercitationem natus ipsam, blanditiis vel soluta
          vitae mollitia.
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2} mt={3}>
          <Typography fontSize={14}>Learn more</Typography>
          <img
            src={arrow_circle_right}
            style={{ heigth: "16px", width: "16px" }}
            alt=""
          />
        </Stack>
      </Stack>
    </Paper>
  );
};
