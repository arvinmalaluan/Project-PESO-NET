import {
  Avatar,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  filter_icon,
  map_pin,
  search_icon,
} from "../../templates/image_imports";

const NewJobs = () => {
  const for_loop = [1, 2, 3, 4, 5, 6, , 6, 2, 3, 5, 5];
  return (
    <Grid
      container
      sx={{ bgcolor: "#fff", height: "100%", alignContent: "start" }}
    >
      <Grid item md={12} sx={{ height: "100%", paddingInline: 4 }}>
        <Stack direction="row" spacing={1} pt={2}>
          <Chip label="All" />
          <Chip label="Hot Picks" />
          <Chip label="Recommended" />
        </Stack>

        <Stack pt={2} direction="row" spacing={1}>
          <TextField
            placeholder="Search company name or job title"
            size="small"
            fullWidth
            InputProps={{
              sx: {
                fontSize: 14,
                borderRadius: 4,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src={search_icon}
                    className="icon-16x16"
                    style={{ marginRight: 2 }}
                    alt=""
                  />
                </InputAdornment>
              ),
            }}
          />
          <IconButton sx={{ bgcolor: "whitesmoke" }}>
            <img src={filter_icon} className="icon-20x20" alt="" />
          </IconButton>
        </Stack>

        <Stack mt={3}>
          <Typography fontSize={14}>Recent Posts</Typography>
          <Typography fontSize={12} fontWeight={300} mb={2}>
            A new opportunity indeed!
          </Typography>

          <Grid container columnSpacing={2} rowSpacing={2}>
            <Grid item md={6}>
              <JobLists />
            </Grid>

            <Grid item md={6}>
              <JobLists />
            </Grid>
            <Grid item md={6}>
              <JobLists />
            </Grid>

            <Grid item md={6}>
              <JobLists />
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default NewJobs;

const JobLists = () => {
  return (
    <MenuItem
      sx={{
        paddingBlock: 2,
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "5px",
      }}
    >
      <Avatar variant="rounded" sx={{ marginRight: 2 }} />
      <Stack sx={{ width: "100%" }}>
        <Stack direction="row" sx={{ width: "100%" }}>
          <Typography fontSize={12} flexGrow={1} fontWeight={300}>
            Google, Inc.
          </Typography>
          <Typography fontSize={12} fontWeight={300}>
            Simlong, Batangas City
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" width="100%">
          <Typography fontSize={18} flexGrow={1}>
            UI/UX Designer
          </Typography>
          <Stack direction="row" spacing={1}>
            <img src={map_pin} className="icon-16x16" alt="" />
            <Typography fontSize={12} fontWeight={300}>
              Posted 8hrs. ago.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </MenuItem>
  );
};
