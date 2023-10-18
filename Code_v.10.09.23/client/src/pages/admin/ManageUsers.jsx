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
  chevleft,
  chevron_right,
  close_icon,
  darrowleft,
  darrowright,
  dots_horiz,
  newcopy,
  newedit,
  neweye,
  newtrash,
  search_icon,
} from "../../templates/image_imports";
import { useEffect, useState } from "react";
import { get2Roles } from "../../context/CRUD_Operations";
import ButtonSort from "../../modules/common_components/ButtonSort";
import ViewDetails from "../../modules/common_components/ViewDetails";

const ManageUsers = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <Grid container height="100%" bgcolor="#fff">
      <Grid item md={12} height="100%" sx={{ padding: "16px 32px" }}>
        <Typography fontSize={24} fontWeight={700}>
          Manage Users
        </Typography>
        <SearchUser activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
        <TableOfUser activeBtn={activeBtn} />
        <TableFooter />
      </Grid>
    </Grid>
  );
};

export default ManageUsers;

const SearchUser = ({ activeBtn, setActiveBtn }) => {
  const handleClick = (idx) => {
    setActiveBtn(idx);
  };

  return (
    <Stack direction="row" alignItems="center" sx={{ paddingBlock: 2 }}>
      <Stack direction="row" alignItems="center" spacing={1} flexGrow={1}>
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

        <Stack direction="row" pl={3} spacing={1}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => handleClick(0)}
            sx={{
              textTransform: "none",
              bgcolor: activeBtn == 0 ? "#0891b2" : "#fff",
              color: activeBtn == 0 ? "#fff" : "#000",
              border: activeBtn == 0 ? "none" : "1px solid rgba(0, 0, 0, 0.12)",
              fontSize: 14,
              "&:hover": {
                bgcolor: "#0891b2",
                color: "#fff",
              },
            }}
          >
            All
          </Button>

          <Button
            variant="contained"
            disableElevation
            onClick={() => handleClick(3)}
            sx={{
              textTransform: "none",
              bgcolor: activeBtn == 3 ? "#0891b2" : "#fff",
              color: activeBtn == 3 ? "#fff" : "#000",
              border: activeBtn == 3 ? "none" : "1px solid rgba(0, 0, 0, 0.12)",
              fontSize: 14,
              "&:hover": {
                bgcolor: "#0891b2",
                color: "#fff",
              },
            }}
          >
            Recruiter
          </Button>

          <Button
            variant="contained"
            disableElevation
            onClick={() => handleClick(2)}
            sx={{
              textTransform: "none",
              bgcolor: activeBtn == 2 ? "#0891b2" : "#fff",
              color: activeBtn == 2 ? "#fff" : "#000",
              border: activeBtn == 2 ? "none" : "1px solid rgba(0, 0, 0, 0.12)",
              fontSize: 14,
              "&:hover": {
                bgcolor: "#0891b2",
                color: "#fff",
              },
            }}
          >
            Seeker
          </Button>
        </Stack>
      </Stack>

      <Stack>
        <Button
          variant="contained"
          disableElevation
          sx={{
            textTransform: "none",
            height: "38px",
            bgcolor: "#fff",
            color: "#000",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            "&:hover": {
              bgcolor: "#0891b2",
              color: "#fff",
            },
          }}
        >
          <Typography fontSize={14}>Add new user</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

const TableOfUser = ({ activeBtn }) => {
  const [newUsers, setNewUsers] = useState([]);
  const [copy, setCopy] = useState([]);
  const [anchorEl, setAnchorEl] = useState();
  const [openD, setOpenD] = useState(false);
  const [level, setLevel] = useState();
  const [activeDetail, setActiveDetail] = useState();
  const open = Boolean(anchorEl);

  useEffect(() => {
    get2Roles()
      .then((data) => {
        setNewUsers(data);
        setCopy(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const reference = [...newUsers];

    if (activeBtn != 0) {
      const filtered = reference.filter((item) => {
        return item.role == activeBtn;
      });

      setCopy(filtered);
    } else {
      setCopy(newUsers);
    }
  }, [activeBtn]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setActiveDetail(event.currentTarget.getAttribute("id"));
  };

  const handleOpenDialog = (level) => {
    setOpenD(true);
    setLevel(level);
  };

  return (
    <>
      <Stack
        sx={{
          borderRadius: "10px",
          border: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Table sx={{ bgcolor: "transparent" }}>
          <TableHead
            sx={{ "&:hover": { bgcolor: "rgba(80, 145, 178, 0.04)" } }}
          >
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
              <TableCell>
                <ButtonSort name="Name" />
              </TableCell>
              <TableCell>
                <ButtonSort name="Email Address" />
              </TableCell>
              <TableCell>
                <ButtonSort name="Role" />
              </TableCell>
              <TableCell>
                <ButtonSort name="Status" />
              </TableCell>
              <TableCell>
                <ButtonSort name="Last logged in" />
              </TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {copy.map((user, idx) => {
              return (
                <TableRow
                  key={idx}
                  sx={{
                    "& .MuiTableCell-sizeMedium": {
                      fontSize: 14,
                      borderBottom: idx == newUsers.length - 1 && "none",
                    },
                    "&:hover": { bgcolor: "rgba(80, 145, 178, 0.04)" },
                  }}
                >
                  <TableCell>
                    {user.allprofile[0] ? user.allprofile[0].name : "unset"}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.role == 3 ? "Recruiter" : "Seeker"}
                  </TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>---</TableCell>
                  <TableCell>
                    <IconButton id={idx} onClick={handleClick}>
                      <img src={dots_horiz} alt="" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

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

            <MenuItem sx={{ paddingInline: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <img src={newcopy} className="icon-16x16" alt="" />
                <Typography fontSize={14} fontWeight={400}>
                  Copy user's id
                </Typography>
              </Stack>
            </MenuItem>

            <Divider style={{ marginBlock: "4px" }} />

            <MenuItem
              sx={{ paddingInline: 1 }}
              onClick={() => handleOpenDialog("view")}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <img src={neweye} className="icon-16x16" alt="" />
                <Typography fontSize={14} fontWeight={400}>
                  View details
                </Typography>
              </Stack>
            </MenuItem>
            <MenuItem
              sx={{ paddingInline: 1 }}
              onClick={() => handleOpenDialog("edit")}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <img src={newedit} className="icon-16x16" alt="" />
                <Typography fontSize={14} fontWeight={400}>
                  Edit details
                </Typography>
              </Stack>
            </MenuItem>
            <MenuItem sx={{ paddingInline: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <img src={newtrash} className="icon-16x16" alt="" />
                <Typography fontSize={14} fontWeight={400} color="red">
                  Delete User
                </Typography>
              </Stack>
            </MenuItem>
          </Stack>
        </Menu>
      </Stack>

      <ViewDetails
        open={openD}
        setOpen={setOpenD}
        lvl={level}
        details={copy[activeDetail]}
      />
    </>
  );
};

const TableFooter = () => {
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
