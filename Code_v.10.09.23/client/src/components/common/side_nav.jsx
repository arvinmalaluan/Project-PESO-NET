import {
  Stack,
  Card,
  CardHeader,
  Divider,
  Avatar,
  Typography,
  CardActions,
  ListItemButton,
} from "@mui/material";
import { useEffect, useState } from "react";

import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SideNav({ type }) {
  const navigate = useNavigate();

  useEffect(() => {
    const { user_id } = jwt_decode(localStorage.getItem("token"));

    const get_user_profile = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8001/seeker/create-profile/${user_id}`
      );

      console.log(response.data);
    };

    get_user_profile();
  }, []);

  const SetAvatar = () => {
    return (
      <Avatar
        src="https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
        sx={{
          display: "block",
          margin: "auto",
          height: 72,
          width: 72,
          marginTop: 2,
        }}
      />
    );
  };

  const SetTitle = ({ name }) => {
    return (
      <Typography variant="p" fontWeight={500} fontSize={18} pt={2}>
        {name}
      </Typography>
    );
  };

  const SetSubHeader = ({ message }) => {
    return (
      <Typography fontSize={12} pt={1} pb={5} width="80%" margin="auto">
        {message}
      </Typography>
    );
  };

  const SetCardActions = ({ name, path }) => {
    return (
      <ListItemButton
        sx={{ padding: "8px 0 8px 8px" }}
        disableGutters
        onClick={() => navigate(`${path}`)}
      >
        <Typography flexGrow={1} fontSize={14}>
          {name}
        </Typography>
      </ListItemButton>
    );
  };

  return (
    <Stack
      sx={{
        position: "sticky",
        top: 20,
        width: "100%",
      }}
    >
      <Card elevation={0}>
        <CardHeader sx={{ padding: "16px 20px 0 0" }} action={null} />
        <Stack textAlign="center">
          <SetAvatar />
          <SetTitle
            name={
              <Typography fontSize={18} fontWeight={500}>
                ARVIN MALALUAN
              </Typography>
            }
          />
          <SetSubHeader message="Success is not determined by how fast you achieved something, it is ..." />
        </Stack>
        <Divider />
        <CardActions>
          <Stack width="100%">
            {type === "home" ? (
              <>
                <SetCardActions name="Manage Resume" path="resume" />
                <SetCardActions name="View Application Status" path="status" />
                <SetCardActions name="View Saved Jobs" path="saved" />
              </>
            ) : (
              <SetCardActions name="Manage Queries" path="/profile" />
            )}
          </Stack>
        </CardActions>
      </Card>
    </Stack>
  );
}

export default SideNav;
