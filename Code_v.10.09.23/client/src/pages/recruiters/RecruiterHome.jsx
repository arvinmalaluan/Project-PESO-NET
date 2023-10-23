import {
  Avatar,
  Button,
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

import { useEffect, useState } from "react";
import { getJobs } from "../../context/CRUD_Operations";
import jwtDecode from "jwt-decode";
import { format_date } from "../../utils/format_date";
import { dots_horiz, download } from "../../templates/image_imports";
import TinyLineChart from "../../modules/charts/TinyLineChart";
import PieChartComponent from "../../modules/charts/PieChartComponent";
import { TableFooter as CustomTableFooter } from "./ManageJobs";

const RecruiterHome = () => {
  return (
    <Grid container sx={{ bgcolor: "#fff" }}>
      <Grid item md={12} sx={{ padding: "16px 32px 16px 32px" }}>
        <Typography mb={1} fontWeight={700}>
          Statistics
        </Typography>
        <LeftStats />
      </Grid>
      <Grid item md={12}>
        <Grid container spacing={2} sx={{ padding: "16px 32px" }}>
          <Grid item md={8}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontWeight={700}>Job Posts</Typography>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  textTransform: "none",
                  bgcolor: "#fff",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  "&:hover": {
                    bgcolor: "whitesmoke",
                  },
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  color="#000"
                  spacing={1}
                >
                  <img src={download} className="icon-16x16" alt="" />
                  <Typography fontSize={14}>Export</Typography>
                </Stack>
              </Button>
            </Stack>
            <TableOfPosts />
            <CustomTableFooter />
          </Grid>

          <Grid item md={4}>
            <Stack pl={2}>
              <Typography ml={2} fontSize={14} fontWeight={700} mb={1}>
                Today's schedules
              </Typography>

              <Stack>
                <CustomMenuItem />
                <CustomMenuItem />
                <CustomMenuItem />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecruiterHome;

const LeftStats = () => {
  const GridCustom = ({ title, total, today }) => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
          bgcolor: "#fff",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "5px",
        }}
      >
        <Stack sx={{ padding: 3 }}>
          <Typography fontSize={14} fontWeight={500} color="#64748b">
            {title}
          </Typography>
          <Typography fontSize={18} fontWeight={600}>
            0 total
          </Typography>
          <Typography fontSize={12} mt={3} fontWeight={500}>
            View all
          </Typography>
        </Stack>

        <Stack sx={{ height: "70px", width: "100px", paddingRight: 3 }}>
          <TinyLineChart />
          <Typography fontSize={12} mt={1}>
            This week
          </Typography>
        </Stack>
      </Stack>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <Stack spacing={2}>
          <GridCustom title="Seekers Engagement" />
          <GridCustom title="New Applicants" />
        </Stack>
      </Grid>

      <Grid item md={4}>
        <Stack spacing={2}>
          <GridCustom title="Active Job Posts" />
          <GridCustom title="New Messages" />
        </Stack>
      </Grid>

      <Grid item md={4}>
        <Stack
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "5px",
            height: "100%",
          }}
        >
          <TimeToHire />
        </Stack>
      </Grid>
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
          <TableRow
            sx={{
              "& .MuiTableCell-sizeMedium": {
                padding: "10px 16px",
                color: "#64748b",
                fontWeight: "600",
                fontSize: 14,
              },
            }}
          >
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
        padding: "16px 16px 16px 16px",
        borderRadius: "5px",
        height: "245px",
      }}
    >
      <Typography mb={2}>Your schedule</Typography>
      <PieChartComponent />
    </Stack>
  );
};

const CustomMenuItem = () => {
  return (
    <MenuItem
      sx={{
        alignItems: "center",
        gap: 2,
        paddingBlock: 1.5,
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <Avatar />
      <Stack>
        <Typography fontSize={14} fontWeight={500}>
          ARVIN MALALUAN
        </Typography>
        <Typography fontSize={12}>Time: 11:30 AM</Typography>
      </Stack>
    </MenuItem>
  );
};
