import {
  Button,
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

import { plus, dots_horiz } from "./../../templates/image_imports";

const ManageJobs = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item md={8}>
        <TableForJobs />
      </Grid>

      <Grid
        item
        md={4}
        bgcolor="white"
        sx={{ height: "100%", paddingInline: 4 }}
      >
        <Left />
      </Grid>
    </Grid>
  );
};

export default ManageJobs;

const Left = () => {
  return (
    <Stack
      alignItems="center"
      sx={{ height: "100%", justifyContent: "center" }}
    >
      <Typography textAlign="center" fontSize={18}>
        The very first automated job portal in Lipa City, Batangas
      </Typography>
      <Typography textAlign="center" fontWeight={300} mt={2} fontSize={14}>
        PESO Lipa is the heart of the job expo and the best resource to discover
        and connect with jobs and talents in Lipa City, Batangas.
      </Typography>

      <Button
        variant="contained"
        disableElevation
        sx={{
          textTransform: "none",
          borderRadius: 5,
          mt: 3,
          padding: "10px 16px",
          bgcolor: "#4f46e5",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <img
            src={plus}
            alt=""
            style={{
              filter:
                "invert(100%) sepia(100%) saturate(0%) hue-rotate(355deg) brightness(106%) contrast(101%)",
            }}
            className="icon-16x16"
          />
          <Typography fontSize={14}>Post a job</Typography>
        </Stack>
      </Button>
    </Stack>
  );
};

const TableForJobs = () => {
  return (
    <Stack sx={{ padding: "16px 32px" }}>
      <Table sx={{ bgcolor: "white" }}>
        <TableHead sx={{ bgcolor: "white" }}>
          <TableRow>
            <TableCell>Job Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Applicants</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Deadline</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>UI/UX Designer</TableCell>
            <TableCell>Open</TableCell>
            <TableCell>286</TableCell>
            <TableCell>December 24, 2023</TableCell>
            <TableCell>January 2, 2024</TableCell>
            <TableCell align="center">
              <IconButton>
                <img src={dots_horiz} alt="" />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Stack>
  );
};
