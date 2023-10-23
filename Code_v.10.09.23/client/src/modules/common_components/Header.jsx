import { Avatar, Button, IconButton, InputAdornment } from "@mui/material";
import { Stack, TextField, Typography } from "@mui/material";

// Import for icons
import { close_icon, menu, search_icon } from "./../../templates/image_imports";
import { bell_icon, send_icon } from "./../../templates/image_imports";

import { useLocation } from "react-router-dom";
import { useState } from "react";

import MenuOptions from "./MenuOptions";

const Header = () => {
  const { pathname } = useLocation();
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
        justifyContent="space-between"
        sx={{
          padding: {
            md: "8px 32px",
            xs: "8px 8px",
          },
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton
            size="small"
            sx={{
              display: { xs: "block", md: "none" },
              height: 32,
              width: 32,
              alignItems: "center",
            }}
          >
            <img src={menu} alt="" />
          </IconButton>

          <Typography textTransform="capitalize">
            {pathname === "/" ? "Home" : pathname.substring(1)}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={3}>
          <TextField
            size="small"
            placeholder="Search"
            autoComplete="off"
            InputProps={{
              sx: { borderRadius: 5, display: { xs: "none" } },
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

          <Stack direction="row" spacing={0.5}>
            <IconButton
              size="small"
              sx={{
                height: 40,
                width: 40,
                display: { xs: "none", md: "block" },
              }}
              onClick={openAvatar}
              id="notif-btn"
            >
              <img src={bell_icon} style={{ height: 20, width: 20 }} alt="" />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                height: 40,
                width: 40,
                display: { xs: "none", md: "block" },
              }}
              onClick={openAvatar}
              id="message-btn"
            >
              <img src={send_icon} style={{ height: 20, width: 20 }} alt="" />
            </IconButton>

            <IconButton size="small" onClick={openAvatar} id="avatar-btn">
              <Avatar sx={{ height: 32, width: 32 }} />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>

      <MenuOptions
        anchor={anchorEl}
        setAnchor={setAnchorEl}
        visible={isOpen}
        btnId={btnId}
      />
    </>
  );
};

export default Header;
