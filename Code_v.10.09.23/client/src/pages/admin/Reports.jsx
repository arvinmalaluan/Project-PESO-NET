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
    <Grid
      container
      sx={{ padding: "16px 32px", height: "100%", bgcolor: "white" }}
    >
      <Grid item md={12} sx={{ padding: 2, height: "100%" }}>
        <Typography fontSize={24} fontWeight={700} mb={2}>
          Reports
        </Typography>

        <Stack
          sx={{
            height: "90%",
            overflowY: "scroll",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "10px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  "& .MuiTableCell-sizeMedium": {
                    padding: "10px 16px",
                    color: "#64748b",
                    fontWeight: "600",
                    fontSize: 14,
                  },
                  "&:hover": { bgcolor: "rgba(80, 145, 178, 0.04)" },
                }}
              >
                <TableCell>ID</TableCell>
                <TableCell>Topic</TableCell>
                <TableCell>Scope</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            {arrayOfReports.map((item, idx) => {
              return (
                <TableBody key={idx}>
                  <TableRow
                    sx={{
                      "& .MuiTableCell-sizeMedium": {
                        fontSize: 14,
                      },
                      "&:hover": { bgcolor: "rgba(80, 145, 178, 0.04)" },
                    }}
                  >
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="end" spacing={2}>
                        <Typography fontSize={14}>Oct. - Nov.</Typography>
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
