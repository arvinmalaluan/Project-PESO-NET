import {
  Avatar,
  Button,
  Divider,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

import up_acc from "./../../assets/upgrade_account.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { get_profile } from "../../context/GetUserData";

import jwtDecode from "jwt-decode";

function ProfTemp({ setAnchor }) {
  const navigate = useNavigate();
  const { logout_user } = useContext(AuthContext);
  const [name, setName] = useState("(unset)");

  const { user_id } = jwtDecode(localStorage.getItem("token"));

  useEffect(() => {
    get_profile(user_id)
      .then((data) => {
        setName(data.name);
      })
      .catch((error) => {
        console.log("Error encountered", error);
      });
  }, []);

  const ProfItem = ({ name, path }) => {
    return (
      <Stack p="0px 16px" mb={1}>
        <MenuItem
          sx={{ padding: "8px 16px", bgcolor: "whitesmoke" }}
          onClick={() => {
            navigate(`/${path}`);
            setAnchor(null);
          }}
        >
          <Typography fontSize={14}>{name}</Typography>
        </MenuItem>
      </Stack>
    );
  };

  return (
    <>
      <Stack
        m="0px 16px"
        sx={{ border: "1px solid rgba(0, 0, 0, 0.12)", borderRadius: "5px" }}
      >
        <MenuItem
          sx={{ padding: "8px 16px" }}
          onClick={() => {
            navigate("/profile");
            setAnchor(null);
          }}
        >
          <Avatar />
          <Stack ml={2}>
            {name ? (
              <Typography
                fontSize={16}
                fontWeight={500}
                sx={{ textTransform: "uppercase" }}
              >
                {name}
              </Typography>
            ) : (
              "unset"
            )}
            <Typography fontSize={12}>Navigate to profile</Typography>
          </Stack>
        </MenuItem>
      </Stack>

      <Stack
        m="8px 16px"
        direction="row"
        spacing={2}
        p={2}
        sx={{ border: "1px solid rgba(0, 0, 0, 0.12)", borderRadius: "5px" }}
      >
        <img src={up_acc} className="upgrade-acc-img" alt="" />

        <Stack spacing={1}>
          <Typography fontSize={16} fontWeight={500}>
            Unlock next level!
          </Typography>
          <Typography fontSize={14} pb={2}>
            Complete requirements to unlock next level.
          </Typography>
          <Button
            variant="contained"
            size="small"
            disableElevation
            sx={{ textTransform: "none" }}
          >
            Go now
          </Button>
        </Stack>
      </Stack>

      <Stack p="8px 16px 0px">
        <Divider />
        <Typography fontSize={14} mt={1} mb={1} fontWeight={500}>
          Career Hub
        </Typography>
      </Stack>
      <ProfItem name="Manage Resume" path="resume" />
      <ProfItem name="Saved" path="saved" />
      <ProfItem name="Application Status" path="status" />

      <Stack p="8px 16px 8px">
        <Divider />
      </Stack>

      <Stack p="0px 16px" mb={1}>
        <MenuItem
          sx={{ padding: "8px 16px", bgcolor: "whitesmoke" }}
          onClick={logout_user}
        >
          <Typography fontSize={14}>Log out</Typography>
        </MenuItem>
      </Stack>
    </>
  );
}

export default ProfTemp;
