import {
  Avatar,
  Chip,
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
import { useEffect, useState } from "react";
import { circle, dots_horiz } from "../../templates/image_imports";
import { get2Roles, getDbStats } from "../../context/CRUD_Operations";

import { format_date } from "./../../utils/format_date";

const HomeAdmin = () => {
  const [upperStat, setUpperStat] = useState();

  useEffect(() => {
    getDbStats()
      .then((data) => setUpperStat(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Grid container sx={{ bgcolor: "#fff" }}>
      <Grid item md={8} sx={{ padding: "16px 16px 16px 32px" }}>
        <Typography mb={1}>Statistics</Typography>
        <Grid container spacing={2} sx={{ boxSizing: "border-box" }}>
          <Grid item md={6} sx={{ width: "100%" }}>
            <CustomChip
              title={"Users Overview"}
              count={upperStat && upperStat.tu}
              subtitle={`${
                upperStat && upperStat.users[0].unique_user_count
              } new users today`}
            />
          </Grid>
          <Grid item md={6} sx={{ width: "100%" }}>
            <CustomChip
              title={"Waiting for Verifications"}
              count={upperStat && upperStat.tp}
              subtitle={`${
                upperStat && upperStat.pending[0].unique_user_count
              } new pending request today`}
            />
          </Grid>
          <Grid item md={6} sx={{ width: "100%" }}>
            <CustomChip
              title={"Message Activity"}
              count={upperStat && upperStat.tm}
              subtitle={`${
                upperStat && upperStat.pending[0].unique_user_count
              } new message today`}
            />
          </Grid>
          <Grid item md={6} sx={{ width: "100%" }}>
            <CustomChip
              title={"Reports Status"}
              count={0}
              subtitle={`${0} new reports today`}
            />
          </Grid>

          {console.log(upperStat)}

          <Grid item md={12}>
            <Typography pb={1}>Recently registered user</Typography>
            <TableTemplate />
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={4} sx={{ padding: "16px 32px", bgcolor: "#fff" }}>
        <CustomReport />

        <Reports />
      </Grid>
    </Grid>
  );
};

export default HomeAdmin;

const CustomChip = ({ title, count, subtitle }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        bgcolor: "#fff",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "5px",
      }}
    >
      <Stack sx={{ padding: 3 }}>
        <Typography fontSize={14} fontWeight={600} color="#64748b">
          {title}
        </Typography>
        <Typography fontSize={18} fontWeight={600}>
          {count}
        </Typography>
        <Typography fontSize={12} mt={3} fontWeight={500}>
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
};

const Visualilzation = () => {
  return (
    <Stack width="100%" height="350px" bgcolor="#fff">
      <Stack sx={{ padding: 2 }}>
        <Typography fontSize={14} textAlign="center">
          User Demographics: Gender Distribution in Our App Community
        </Typography>
      </Stack>
    </Stack>
  );
};

const TableTemplate = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    get2Roles()
      .then((data) => {
        const reversed = data.reverse();
        const sliced = reversed.slice(0, 5);

        setNewUsers(sliced);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Stack
      sx={{
        bgcolor: "white",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "5px",
      }}
    >
      <Stack>
        <Table sx={{ bgcolor: "transparent" }}>
          <TableHead>
            <TableRow
              sx={{
                "& .MuiTableCell-sizeMedium": {
                  padding: "10px 16px",
                  color: "#64748b",
                  fontWeight: "600",
                  fontSize: 14,
                  bgcolor: "rgba(80, 145, 178, 0.04)",
                },
              }}
            >
              <TableCell>Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              "& .MuiTableCell-sizeMedium": {
                fontSize: 14,
              },
            }}
          >
            {newUsers.map((user, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell sx={{ fontSize: 14 }}>
                    {user.allprofile[0] ? user.allprofile[0].name : "unset"}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>{format_date(user.created)}</TableCell>
                  <TableCell>
                    {user.role == 3 ? "Job Recruiter" : "Job Seeker"}
                  </TableCell>
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
    </Stack>
  );
};

const CustomReport = () => {
  return (
    <Stack>
      <Typography mb={1}>Job Applications vs. Job Creations</Typography>

      <Stack
        sx={{
          height: "295px",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "5px",
        }}
      >
        p
      </Stack>
    </Stack>
  );
};

const Reports = () => {
  return (
    <Stack mt={6}>
      <Stack
        sx={{
          paddingBlock: 1,
          bgcolor: "rgba(80, 145, 178, 0.04)",
          paddingInline: 1,
          borderRadius: "5px",
        }}
      >
        <Typography color={"#64748b"}>Reports</Typography>
      </Stack>

      <Stack
        mt={1}
        sx={{
          height: "295px",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "5px",
        }}
      >
        p
      </Stack>
    </Stack>
  );
};
