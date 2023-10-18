import {
  Avatar,
  Grid,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { IconButton, Chip, Typography } from "@mui/material";

// imports for icons
import {
  cross_icon,
  arrow_circle_right,
  dots_horiz,
} from "./../../templates/image_imports";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../context/CRUD_Operations";
import jwtDecode from "jwt-decode";
import { format_date } from "../../utils/format_date";

const NewHome = () => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const [jobs, setJobs] = useState([]);
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    getAllJobs()
      .then((data) => {
        setJobs(data);

        let newdata = [];

        data.map((item, idx) => {
          for (const myapp of item.applicants) {
            const ck = myapp.custom_key.split("-");

            if (ck[1] == user_id) {
              newdata.push(item);
            }
          }
        });

        setMyJobs(newdata);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Grid container height="100%" sx={{ paddingInline: 4 }}>
      <Grid item md={9} height="100%" sx={{ paddingRight: 4 }}>
        <Stack>
          <Typography fontWeight={700} mt={2} mb={1}>
            Recommended jobs for you
          </Typography>
          <Grid container spacing={2}>
            <LeftSection />
            <LeftSection />
            <LeftSection />
            <LeftSection />
          </Grid>
        </Stack>

        <Stack>
          <Typography fontWeight={700} mt={4} mb={1}>
            Recently created job posts
          </Typography>
          <Grid container spacing={2}>
            <LeftSection />
            <LeftSection />
            <LeftSection />
            <LeftSection />
            <LeftSection />
            <LeftSection />
          </Grid>
        </Stack>

        <Stack>
          <Typography fontWeight={700} mt={4} mb={1}>
            Manage Applications
          </Typography>

          <TableOfApplications details={myJobs} id={user_id} />
        </Stack>
      </Grid>

      <Grid item md={3} height="100%">
        <Stack height="100%" mt={2}>
          <Typography fontWeight={700}>Trending in community</Typography>
          <TrendingSection />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default NewHome;

const LeftSection = ({ details }) => {
  return (
    <Grid item md={6}>
      <Stack>
        <LeftItems />
      </Stack>
    </Grid>
  );
};

const LeftItems = () => {
  return (
    <MenuItem
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "5px",
        paddingBlock: 1.5,
      }}
    >
      <Stack direction="row" spacing={1}>
        <Avatar />
        <Stack>
          <Typography fontSize={12}>Google, Inc.</Typography>
          <Typography fontWeight={600}>UI/UX Designer</Typography>
        </Stack>
      </Stack>
    </MenuItem>
  );
};

const TableOfApplications = ({ details, id }) => {
  console.log(id);

  const get_applied_date = (applicants) => {
    let date;

    console.log(applicants.applicants);

    applicants.applicants.map((applicant) => {
      if (applicant.applicant == id) {
        date = applicant.applied;
      }
    });

    return date;
  };

  return (
    <Stack
      sx={{ border: "1px solid rgba(0, 0, 0, 0.12)", borderRadius: "5px" }}
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
              "&:hover": {
                bgcolor: "whitesmoke",
              },
            }}
          >
            <TableCell>ID</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Applied</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {details &&
            details.map((detail, idx) => {
              return (
                <TableRow
                  key={idx}
                  sx={{
                    "& .MuiTableCell-sizeMedium": {
                      fontSize: 14,
                    },
                    "&:hover": {
                      bgcolor: "whitesmoke",
                    },
                  }}
                >
                  <TableCell>{detail.id}</TableCell>
                  <TableCell>{detail.job_title}</TableCell>
                  <TableCell>{format_date(get_applied_date(detail))}</TableCell>
                  <TableCell>On progress</TableCell>
                  <TableCell>
                    <IconButton>
                      <img src={dots_horiz} alt="" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </Stack>
  );
};

const TrendingSection = () => {
  return (
    <Stack
      sx={{
        mt: 1,
        borderRadius: "5px",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        padding: 2,
      }}
    >
      <Typography fontSize={14}>
        We're constantly updating our content. Check back later for the latest
        trending posts!
      </Typography>
    </Stack>
  );
};
