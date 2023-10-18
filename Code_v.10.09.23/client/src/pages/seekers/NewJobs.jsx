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
import { useEffect, useState } from "react";
import JobDetails from "../../modules/jobs_components/JobDetails";
import { getAllJobs } from "../../context/CRUD_Operations";
import { format_date } from "./../../utils/format_date";

const NewJobs = () => {
  const [active, setActive] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [activeDetails, setActiveDetails] = useState({});

  useEffect(() => {
    getAllJobs()
      .then((data) => setJobs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Grid
      container
      sx={{
        bgcolor: "#fff",
        height: "100%",
        alignContent: "start",
        overflowY: "scroll",
      }}
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
            <Grid item md={active ? 5 : 12}>
              <Grid container columnSpacing={2} rowSpacing={2}>
                {jobs.map((job, idx) => {
                  return (
                    <Grid item md={active ? 12 : 6} key={idx}>
                      <JobLists
                        setActive={setActive}
                        details={job}
                        setActiveDetails={setActiveDetails}
                        activeDetails={activeDetails}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            {active && (
              <Grid item md={7}>
                <JobDetails details={activeDetails} />
              </Grid>
            )}
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default NewJobs;

const JobLists = ({ setActive, details, setActiveDetails, activeDetails }) => {
  const handleClick = () => {
    setActive(true);
    setActiveDetails(details);
  };
  return (
    <MenuItem
      onClick={handleClick}
      sx={{
        paddingBlock: 2,
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "5px",
        bgcolor:
          activeDetails.id === details.id ? "rgba(8, 145, 178, 0.5)" : "",
        "&:hover": {
          bgcolor: "rgba(8, 145, 178, 0.8)",
        },
      }}
    >
      <Avatar variant="rounded" sx={{ marginRight: 2 }} />
      <Stack sx={{ width: "100%" }}>
        <Stack direction="row" sx={{ width: "100%" }}>
          <Typography fontSize={12} flexGrow={1} fontWeight={300}>
            {details.name}
          </Typography>
          <Typography fontSize={12} fontWeight={300}>
            {format_date(details.created)}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" width="100%">
          <Typography fontSize={18} flexGrow={1}>
            {details.job_title}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img
              src={map_pin}
              style={{ height: "12px", width: "12px" }}
              alt=""
            />
            <Typography fontSize={12} fontWeight={300}>
              {details.location}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </MenuItem>
  );
};
