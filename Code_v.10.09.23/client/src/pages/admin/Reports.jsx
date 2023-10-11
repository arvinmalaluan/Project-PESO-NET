import {
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { download } from "../../templates/image_imports";

const Reports = () => {
  const arrayOfReports = [
    "User Activity Report",
    "Job Posting Performance Report",
    "Candidate Application Report",
    "Resume Submission Report",
    "Recruiter Activity Report",
    "Job Seeker Demographics Report",
    "Job Category Report",
    "Time-to-fill Report",
    "User Feedback and Satisfaction Report",
  ];

  return (
    <Grid container sx={{ padding: "16px 32px", height: "100%" }}>
      <Grid item md={12} sx={{ padding: 2, bgcolor: "white", height: "100%" }}>
        <Typography fontSize={18}>Reports</Typography>

        <Stack sx={{ height: "95%", overflowY: "scroll" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Topic</TableCell>
                <TableCell>Scope</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            {arrayOfReports.map((item, idx) => {
              return (
                <TableBody>
                  <TableRow>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography>Oct. - Nov.</Typography>
                        <Typography fontSize={12} color="primary">
                          Change
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton>
                        <img src={download} className="icon-16x16" alt="" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Reports;
