import {
  Avatar,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import TrendingPosts from "./../../modules/community_components/TrendingPosts";
import { useEffect, useState } from "react";
import { getJobs } from "../../context/CRUD_Operations";
import jwtDecode from "jwt-decode";
import { format_date } from "../../utils/format_date";
import { dots_horiz } from "../../templates/image_imports";

const RecruiterHome = () => {
  return (
    <Grid container sx={{ height: "100%", bgcolor: "#fff" }}>
      <Grid item md={8} sx={{ height: "100%", padding: "16px 8px 16px 32px" }}>
        <Typography mb={1} fontWeight={700}>
          Statistics
        </Typography>
        <LeftStats />

        <Typography mt={4} fontWeight={700}>
          Job Posts
        </Typography>
        <TableOfPosts />
      </Grid>
      <Grid item md={4} sx={{ height: "100%", padding: "16px 32px 16px 16px" }}>
        <Typography fontWeight={700}>Time-to-hire metrics</Typography>
        <TimeToHire />
      </Grid>
    </Grid>
  );
};

export default RecruiterHome;

const LeftStats = () => {
  const GridCustom = () => {
    return (
      <Grid item md={6}>
        <Stack
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            padding: 2,
            borderRadius: "5px",
          }}
        >
          <Typography fontSize={14} fontWeight={600} color="#64748b">
            Interview Schedules for today.
          </Typography>

          <Typography
            fontSize={18}
            sx={{ marginBlock: "4px 16px" }}
            fontWeight={600}
          >
            8
          </Typography>

          <Typography fontSize={12} fontWeight={500}>
            2 new users
          </Typography>
        </Stack>
      </Grid>
    );
  };
  return (
    <Grid container spacing={2}>
      <GridCustom />
      <GridCustom />
      <GridCustom />
      <GridCustom />
    </Grid>
  );
};

const TableOfPosts = () => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs(user_id)
      .then((data) => setJobs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Stack
      sx={{
        borderRadius: "5px",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        mt: 1,
      }}
    >
      <Table sx={{ bgcolor: "transparent" }}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>No. of Applicants</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Duedate</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        {jobs.map((job, idx) => {
          return (
            <TableBody key={idx}>
              <TableRow>
                <TableCell>{job.id}</TableCell>
                <TableCell>{job.job_title}</TableCell>
                <TableCell>{job.applicants.length}</TableCell>
                <TableCell>{format_date(job.created)}</TableCell>
                <TableCell>---</TableCell>
                <TableCell>
                  <IconButton>
                    <img src={dots_horiz} alt="" />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </Stack>
  );
};

const TimeToHire = () => {
  return (
    <Stack
      sx={{
        padding: 2,
        border: "1px solid rgba(0, 0, 0, 0.12)",
        mt: 1,
        borderRadius: "5px",
      }}
    >
      <p>puwet</p>
    </Stack>
  );
};
