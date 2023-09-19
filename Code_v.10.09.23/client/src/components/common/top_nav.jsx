import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuOption from "./menu_options";

function TopNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [btnId, setBtnId] = useState(null);

  const isOpen = Boolean(anchorEl);

  const openAvatar = (event) => {
    setAnchorEl(event.currentTarget);
    setBtnId(event.currentTarget.id);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          mb: 2,
          padding: "0px 100px",
        }}
      >
        <Stack flexGrow={1}>
          <Typography fontSize={16} fontWeight={500}>
            PESO-Lipa
          </Typography>
        </Stack>

        <Stack flexGrow={1} direction="row" spacing={2}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="jobs">Jobs</NavLink>
          <NavLink to="community">Community</NavLink>
        </Stack>

        <Stack direction="row">
          <IconButton onClick={openAvatar} id="message-btn">
            .
          </IconButton>
          <IconButton onClick={openAvatar} id="notif-btn">
            .
          </IconButton>
          <IconButton onClick={openAvatar} id="avatar-btn">
            <Avatar sx={{ height: 32, width: 32 }} />
          </IconButton>
        </Stack>
      </Stack>

      <MenuOption
        anchor={anchorEl}
        setAnchor={setAnchorEl}
        visible={isOpen}
        btnId={btnId}
      />
    </>
  );
}

export default TopNav;
