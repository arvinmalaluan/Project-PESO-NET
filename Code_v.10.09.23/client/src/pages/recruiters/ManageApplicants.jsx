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
import { useEffect, useState } from "react";
import { getProfilesWithRole } from "../../context/CRUD_Operations";

const ManageApplicants = () => {
  const [selected, setSelected] = useState({});

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item md={12}>
        <Stack sx={{ paddingInline: 4, paddingBlock: 2 }}>
          <TableForApplicants selected={selected} setSelected={setSelected} />
        </Stack>
      </Grid>

      {selected.name && (
        <Grid item md={3.5} sx={{ bgcolor: "#fff", height: "100%" }}>
          <ApplicantPreview />
        </Grid>
      )}
    </Grid>
  );
};

export default ManageApplicants;

const TableForApplicants = ({ selected, setSelected }) => {
  const [seekers, setSeekers] = useState([]);

  useEffect(() => {
    getProfilesWithRole()
      .then((data) => setSeekers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Stack sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}>
      <Table sx={{ bgcolor: "white" }}>
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
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Educational Attainment</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {seekers.map((item, idx) => {
            return <TableBodySingleData key={idx} details={item} />;
          })}
        </TableBody>
      </Table>
    </Stack>
  );
};

const TableBodySingleData = ({ details }) => {
  return (
    <TableRow
      sx={{
        "& .MuiTableCell-sizeMedium": {
          fontSize: 14,
        },
        "&:hover": { bgcolor: "whitesmoke" },
      }}
    >
      <TableCell>{details.name}</TableCell>
      <TableCell>---</TableCell>
      <TableCell>{details.location}</TableCell>
      <TableCell>{details.name}</TableCell>
      <TableCell>{details.educational_attainment}</TableCell>
    </TableRow>
  );
};

const ApplicantPreview = () => {
  return <Stack></Stack>;
};
