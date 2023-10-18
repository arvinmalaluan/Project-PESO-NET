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

import { useEffect, useState } from "react";
import { getAllJobs } from "../../context/CRUD_Operations";
import jwtDecode from "jwt-decode";

const NewStatus = () => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));
  const [jobs, setJobs] = useState([]);
  const [activeDetails, setActiveDetails] = useState({});

  useEffect(() => {
    getAllJobs()
      .then((data) => {
        let newdata = [];

        data.map((item, idx) => {
          for (const myapp of item.applicants) {
            const ck = myapp.custom_key.split("-");

            if (ck[1] == user_id) {
              newdata.push(item);
            }
          }
        });

        setJobs(newdata);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid
        item
        md={activeDetails.id ? 3 : 7}
        sx={{ height: "100%", bgcolor: "#fff", padding: "16px 16px 16px 32px" }}
      >
        <DefinedTextField />
        <Stack mt={2} spacing={1}>
          {jobs.map((item, idx) => {
            return (
              <JobPosts
                key={idx}
                details={item}
                aD={activeDetails}
                setAD={setActiveDetails}
              />
            );
          })}
        </Stack>
      </Grid>

      {activeDetails.id && (
        <Grid item md={4} sx={{ height: "100%", bgcolor: "#fff", padding: 2 }}>
          <Preview aD={activeDetails} />
        </Grid>
      )}

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
