import {
  Button,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const ManageApplicants = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item md={8}>
        <TableForApplicants />
      </Grid>

      <Grid item md={4} sx={{ bgcolor: "#fff", height: "100%" }}>
        <ApplicantPreview />
      </Grid>
    </Grid>
  );
};

export default ManageApplicants;

const TableForApplicants = () => {
  return (
    <Stack sx={{ padding: "16px 32px" }}>
      <Table sx={{ bgcolor: "white" }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Experience</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Experience</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Stack>
  );
};

const ApplicantPreview = () => {
  return <Stack></Stack>;
};
