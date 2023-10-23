import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
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
  plus,
  dots_horiz,
  search_icon,
  close_icon,
  chevleft,
  darrowleft,
  darrowright,
  chevron_right,
  neweye,
  newtrash,
  xsquare,
  refreshccw,
} from "./../../templates/image_imports";
import CreateJob from "../../modules/jobs_components/CreateJob";
import { useEffect, useState } from "react";
import { getJobs, updateJobPost } from "../../context/CRUD_Operations";
import jwtDecode from "jwt-decode";
import { format_date } from "../../utils/format_date";
import Applicants from "../../modules/saved_jobs_components/Applicants";
import ButtonSort from "../../modules/common_components/ButtonSort";

const ManageJobs = () => {
  const [create, setCreate] = useState(false);

  return (
    <Grid container sx={{ height: "100%" }}>
      {create ? (
        <CreateJob setCreate={setCreate} />
      ) : (
        <Grid item md={12}>
          <TableForJobs setCreate={setCreate} />
          <Stack mr={4}>
            <TableFooter />
          </Stack>
        </Grid>
      )}
    </Grid>
  );
};

export default ManageJobs;

const TableForJobs = ({ setCreate }) => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs(user_id)
      .then((data) => setJobs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Stack sx={{ padding: "16px 32px" }}>
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <TextField
            size="small"
            placeholder="Search"
            autoComplete="off"
            InputProps={{
              sx: { borderRadius: 2, fontSize: 14 },
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src={search_icon}
                    style={{
                      height: "16px",
                      width: "16px",
                      marginRight: "10px",
                    }}
                    alt=""
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" sx={{ display: "none" }}>
                  <IconButton size="small" sx={{ marginRight: "-5px" }}>
                    <img
                      src={close_icon}
                      style={{ height: "16px", width: "16px" }}
                      alt=""
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Stack direction="row" spacing={1}>
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "#fff",
                fontSize: 14,
                border: "1px solid rgba(0, 0, 0, 0.12)",
                color: "#000",
                fontWeight: 500,
              }}
            >
              Export
            </Button>
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "#fff",
                fontSize: 14,
                border: "1px solid rgba(0, 0, 0, 0.12)",
                color: "#000",
                fontWeight: 500,
              }}
            >
              View
            </Button>

            <Button
              onClick={() => setCreate(true)}
              sx={{
                textTransform: "none",
                bgcolor: "#0891b2",
                fontSize: 14,
                border: "none",
                color: "#fff",
                fontWeight: 500,

                "&:hover": {
                  bgcolor: "#0891b2",
                  color: "#fff",
                },
              }}
            >
              New Job Post
            </Button>
          </Stack>
        </Stack>

        <Stack
          sx={{ border: "1px solid rgba(0, 0, 0, 0.12)", borderRadius: "5px" }}
        >
          <Table
            sx={{
              bgcolor: "transparent",
            }}
          >
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
                <TableCell>Job Title</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Applicants</TableCell>
                <TableCell>
                  <ButtonSort name="Date Created" />
                </TableCell>
                <TableCell>Deadline</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {jobs.map((item, idx) => {
                return <TableBodyTemplate key={idx} details={item} />;
              })}
            </TableBody>
          </Table>
        </Stack>
      </Stack>
    </>
  );
};

const TableBodyTemplate = ({ details }) => {
  const [anchorEl, setAnchorEl] = useState();
  const [appOpen, setAppOpen] = useState(false);
  const open = Boolean(anchorEl);

  const [holder, setHolder] = useState(details);

  const get_color = (item) => {
    let color;

    if (item.toLowerCase() == "open") {
      color = "#00FF00";
    }

    if (item.toLowerCase() == "closed") {
      color = "#ff0000";
    }

    if (item.toLowerCase() == "archived ") {
      color = "#808080";
    }

    return color;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    holder && (
      <>
        <TableRow
          sx={{
            "& .MuiTableCell-sizeMedium": {
              fontSize: 14,
            },
            "&:hover": {
              bgcolor: "whitesmoke",
            },
          }}
        >
          <TableCell>{holder.job_title}</TableCell>
          <TableCell
            sx={{
              bgcolor: get_color(holder.status),
            }}
          >
            {holder.status}
          </TableCell>
          <TableCell>{holder.applicants.length}</TableCell>
          <TableCell>{format_date(holder.created)}</TableCell>
          <TableCell>---</TableCell>
          <TableCell align="center">
            <IconButton onClick={handleClick}>
              <img src={dots_horiz} alt="" />
            </IconButton>
          </TableCell>
        </TableRow>

        <MenuCustom
          open={open}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          detail={holder}
          setHolder={setHolder}
          setAppOpen={setAppOpen}
        />

        <Applicants open={appOpen} setOpen={setAppOpen} detail={holder} />
      </>
    )
  );
};

export const TableFooter = () => {
  const NewIB = ({ img }) => {
    return (
      <IconButton
        sx={{ borderRadius: "10px", border: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <img src={img} alt="" />
      </IconButton>
    );
  };

  return (
    <Stack
      mt={2}
      pb={5}
      direction="row"
      alignItems="center"
      justifyContent="end"
    >
      <Typography fontSize={14} fontWeight={700} mr={5}>
        Page 1 of 1
      </Typography>

      <Stack direction="row" spacing={1}>
        <NewIB img={chevleft} />
        <NewIB img={darrowleft} />
        <NewIB img={darrowright} />
        <NewIB img={chevron_right} />
      </Stack>
    </Stack>
  );
};

const MenuCustom = ({
  open,
  anchorEl,
  setAnchorEl,
  detail,
  setAppOpen,
  setHolder,
}) => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const handleCloseJobPost = () => {
    if (detail.status == "open") {
      const payload = { allprofile: user_id, status: "closed" };

      updateJobPost(payload, detail.id)
        .then((data) => {
          setHolder({ ...detail, status: "closed" });
        })
        .catch((error) => console.log(error));
    } else if (detail.status == "closed") {
      const payload = { allprofile: user_id, status: "open" };

      updateJobPost(payload, detail.id)
        .then((data) => {
          setHolder({ ...detail, status: "open" });
        })
        .catch((error) => console.log(error));
    } else if (detail.status == "closed") {
    } else {
      console.log("not found");
    }
  };

  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Stack
        sx={{
          boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "5px",
          padding: "4px",
          width: "150px",
        }}
      >
        <Typography
          fontSize={14}
          fontWeight={600}
          sx={{ paddingInline: 1, paddingBlock: "8px 8px" }}
        >
          Actions
        </Typography>

        <MenuItem sx={{ paddingInline: 1 }} onClick={() => setAppOpen(true)}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src={neweye} className="icon-16x16" alt="" />
            <Typography fontSize={14} fontWeight={400}>
              View Applicants
            </Typography>
          </Stack>
        </MenuItem>

        <Divider style={{ marginBlock: "4px" }} />

        <MenuItem sx={{ paddingInline: 1 }} onClick={handleCloseJobPost}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img
              src={detail && detail.status == "open" ? xsquare : refreshccw}
              className="icon-16x16"
              alt=""
            />
            <Typography fontSize={14} fontWeight={400}>
              {detail && detail.status == "open"
                ? "Close Job Post"
                : "Reopen Job Post"}
            </Typography>
          </Stack>
        </MenuItem>

        <MenuItem sx={{ paddingInline: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src={newtrash} className="icon-16x16" alt="" />
            <Typography fontSize={14} fontWeight={400} color="red">
              Delete Job Post
            </Typography>
          </Stack>
        </MenuItem>
      </Stack>
    </Menu>
  );
};
