import {
  Avatar,
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  close_icon,
  filter_icon,
  plus,
  search_icon,
} from "../../templates/image_imports";

const ManageUsers = () => {
  return (
    <Grid container height="100%">
      <Grid item md={12} height="100%" sx={{ padding: "16px 32px" }}>
        <SearchUser />
        <TableOfUser />
      </Grid>
    </Grid>
  );
};

export default ManageUsers;

const SearchUser = () => {
  return (
    <Stack direction="row" alignItems="center" sx={{ paddingBlock: 2 }}>
      <Stack direction="row" alignItems="center" spacing={1} flexGrow={1}>
        <TextField
          size="small"
          placeholder="Search"
          autoComplete="off"
          InputProps={{
            sx: { borderRadius: 5 },
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src={search_icon}
                  style={{
                    height: "20px",
                    width: "20px",
                    marginRight: "10px",
                  }}
                  alt=""
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" sx={{ marginRight: "-5px" }}>
                  <img
                    src={close_icon}
                    style={{ height: "20px", width: "20px" }}
                    alt=""
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Stack direction="row" pl={3} spacing={1}>
          <Chip label="All" color="primary" />
          <Chip label="Recruiter" />
          <Chip label="Seeker" />
        </Stack>
      </Stack>

      <Stack>
        <Button
          variant="contained"
          disableElevation
          sx={{ textTransform: "none" }}
        >
          <Stack spacing={1} direction="row" alignItems="center">
            <img src={plus} className="icon-16x16" alt="" />
            <Typography fontSize={14}>Add new user</Typography>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
};

const TableOfUser = () => {
  return (
    <Stack height="80%" sx={{ bgcolor: "#fff", overflowY: "scroll" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last logged in</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody alignItems="start">
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last logged in</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Stack>
  );
};
