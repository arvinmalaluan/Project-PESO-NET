import { useState } from "react";

import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import MenuPopup from "../components/common/MenuPopup";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [btnId, setBtnId] = useState(null);

  const isOpen = Boolean(anchorEl);

  const openAvatar = (event) => {
    setAnchorEl(event.currentTarget);
    setBtnId(event.currentTarget.id);
  };

  return (
    <>
      <Stack className="navigation-bar" direction="row">
        <Link to="/" style={{ opacity: 1 }}>
          <Typography>PESO-Lipa</Typography>
        </Link>

        <Stack direction="row" spacing={2}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="jobs">Job</NavLink>
          <NavLink to="community">Community</NavLink>
        </Stack>

        <Stack direction="row" spacing={2}>
          <IconButton
            onClick={openAvatar}
            id="message-btn"
            className="nav-icon-btn"
            sx={{ bgcolor: "whitesmoke", color: "#000" }}
          >
            <ChatRoundedIcon
              sx={{
                height: 20,
                width: 20,
              }}
            />
          </IconButton>

          <IconButton
            onClick={openAvatar}
            id="notif-btn"
            className="nav-icon-btn"
            sx={{ bgcolor: "whitesmoke", color: "#000" }}
          >
            <NotificationsActiveRoundedIcon
              sx={{
                height: 20,
                width: 20,
              }}
            />
          </IconButton>

          <IconButton size="small" onClick={openAvatar} id="avatar-btn">
            <Avatar
              sx={{
                height: 32,
                width: 32,
              }}
            />
          </IconButton>
        </Stack>
      </Stack>

      <MenuPopup
        anchor={anchorEl}
        setAnchor={setAnchorEl}
        visible={isOpen}
        btnId={btnId}
      />
    </>
  );
}
