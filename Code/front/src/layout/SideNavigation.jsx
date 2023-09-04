import {
  Stack,
  Card,
  CardHeader,
  Divider,
  Avatar,
  Typography,
  IconButton,
  CardActions,
  ListItemButton,
} from "@mui/material";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";

function SideNavigation({ type }) {
  const navigate = useNavigate();
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
      <Typography
        variant="p"
        fontSize={14}
        pt={1}
        pb={5}
        width="80%"
        margin="auto"
        color="#333333"
      >
        {message}
      </Typography>
    );
  };

  const SetAction = ({ icon }) => {
    return <IconButton>{icon}</IconButton>;
  };

  const SetCardActions = ({ name, path }) => {
    return (
      <ListItemButton
        sx={{ padding: "8px 0 8px 8px" }}
        disableGutters
        onClick={() => navigate(`${path}`)}
      >
        <Typography flexGrow={1}>{name}</Typography>
        <ArrowRightIcon />
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
        <CardHeader
          sx={{ padding: "16px 20px 0 0" }}
          action={
            <SetAction
              icon={
                <DriveFileRenameOutlineIcon sx={{ height: 20, width: 20 }} />
              }
            />
          }
        />
        <Stack textAlign="center">
          <SetAvatar />
          <SetTitle name="ARVIN MALALUAN" />
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

export default SideNavigation;
