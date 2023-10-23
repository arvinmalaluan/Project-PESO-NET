import {
  Button,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getProfilesWithRole } from "../../context/CRUD_Operations";
import ButtonSort from "../../modules/common_components/ButtonSort";
import { TableFooter as CustomTableFooter } from "./ManageJobs";

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
    <>
      <Stack direction="row" pb={2} sx={{ justifyContent: "space-between" }}>
        <TextField
          placeholder="Search"
          size="small"
          InputProps={{
            sx: {
              width: "100%",
              borderRadius: "5px",
              bgcolor: "whitesmoke",
              paddingLeft: 1,
              fontSize: 14,
            },
          }}
          sx={{
            "& fieldset": { border: "none" },
          }}
        />
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              bgcolor: "#fff",
              border: "1px solid rgba(0, 0, 0, 0.12)",
              color: "#000",
              "&:hover": {
                bgcolor: "whitesmoke",
              },
            }}
          >
            Filter
          </Button>

          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              bgcolor: "#fff",
              border: "1px solid rgba(0, 0, 0, 0.12)",
              color: "#000",
              "&:hover": {
                bgcolor: "whitesmoke",
              },
            }}
          >
            Export
          </Button>
        </Stack>
      </Stack>

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
              }}
            >
              <TableCell>Name</TableCell>
              <TableCell>
                <ButtonSort name="Age" />
              </TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Educational Attainment</TableCell>
              <TableCell>Assessed Position</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {seekers.map((item, idx) => {
              return <TableBodySingleData key={idx} details={item} />;
            })}
          </TableBody>
        </Table>
      </Stack>
      <CustomTableFooter />
    </>
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
      <TableCell>---</TableCell>
    </TableRow>
  );
};

const ApplicantPreview = () => {
  return <Stack></Stack>;
};
