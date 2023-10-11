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
import { useState } from "react";
import { circle, dots_horiz } from "../../templates/image_imports";

const HomeAdmin = () => {
  const [upperStat, setUpperStat] = useState([
    { title: "Total Users", count: "100", subtitle: "2 new users" },
    { title: "Pending Verifications", count: "2", subtitle: "4 new request" },
    { title: "New Messages", count: "300", subtitle: "4 new messages" },
    { title: "Pending User Reports", count: "200", subtitle: "5 new reports" },
  ]);

  return (
    <Grid container>
      <Grid item md={9} sx={{ padding: "16px 16px 16px 32px" }}>
        <Typography mb={1}>Statistics</Typography>
        <Grid container spacing={2} sx={{ boxSizing: "border-box" }}>
          {upperStat.map((item, idx) => {
            return (
              <Grid item key={idx} md={3} sx={{ width: "100%" }}>
                <CustomChip
                  title={item.title}
                  count={item.count}
                  subtitle={item.subtitle}
                />
              </Grid>
            );
          })}

          <Grid item md={6}>
            <Visualilzation />
          </Grid>

          <Grid item md={6}>
            <Visualilzation />
          </Grid>

          <Grid item md={12}>
            <Typography mb={1}>Recently registered user</Typography>
            <TableTemplate />
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={3} sx={{ padding: "16px 32px", bgcolor: "#fff" }}>
        <Stack>
          <Typography mb={2}>Pending User Reports</Typography>

          <Stack>
            <CustomReport />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HomeAdmin;

const CustomChip = ({ title, count, subtitle }) => {
  return (
    <Stack sx={{ width: "100%", bgcolor: "#fff" }}>
      <Stack sx={{ padding: 3 }}>
        <Typography fontSize={14} fontWeight={300}>
          {title}
        </Typography>
        <Typography fontSize={18}>{count}</Typography>
        <Typography fontSize={12} mt={3} fontWeight={300}>
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
  return (
    <Stack sx={{ bgcolor: "white" }}>
      <Stack sx={{ padding: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email Address</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Last login</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell sx={{ fontSize: 14 }}>Arvin Malaluan</TableCell>
              <TableCell>malaluanofficial7@gmail.com</TableCell>
              <TableCell>Allowed</TableCell>
              <TableCell>September 25, 2001</TableCell>
              <TableCell>Seeker</TableCell>
              <TableCell>
                <IconButton>
                  <img src={dots_horiz} alt="" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Stack>
    </Stack>
  );
};

const CustomReport = () => {
  return (
    <Stack
      pl={4}
      pb={2}
      ml={0.5}
      sx={{ borderLeft: "1px solid black", position: "relative" }}
    >
      <Typography fontWeight={300} fontSize={12} marginTop="-4px">
        2 days ago
      </Typography>
      <Typography fontSize={14} className="clip-2-lines">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        fuga sit culpa sapiente, dolores fugit quidem ullam, nesciunt sunt, vel
        nostrum. Vero numquam saepe dolorum, quaerat unde recusandae beatae
        sapiente.
      </Typography>
      <Typography fontSize={12} mt={1} color="primary">
        View report <span style={{ marginLeft: "5px" }}>&#10230;</span>
      </Typography>

      <img
        src={circle}
        style={{ height: "10px", position: "absolute", left: -5, top: 0 }}
        alt=""
      />
    </Stack>
  );
};
