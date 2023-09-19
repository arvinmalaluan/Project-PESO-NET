import {
  Avatar,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import MessTemp from "./message_template";
import NotifTemp from "./notification_template";
import ProfTemp from "./profile_items";

function MenuOption({ anchor, setAnchor, visible, btnId }) {
  const handleClose = () => {
    setAnchor(null);
  };

  const navigate = useNavigate();

  const getTitle =
    btnId === "avatar-btn"
      ? "Profile"
      : btnId === "message-btn"
      ? "Messages"
      : "Notifications";

  return (
    <>
      <Menu
        anchorEl={anchor}
        open={visible}
        onClose={handleClose}
        sx={{
          mt: 1,
          ml: "-50px",
        }}
      >
        <Stack
          sx={{
            width: 350,
          }}
        >
          <Typography variant="h6" sx={{ padding: "0 16px 8px" }}>
            {getTitle}
          </Typography>
          <Divider sx={{ marginBottom: 1 }} />
          {btnId === "avatar-btn" ? (
            <>
              <ProfTemp setAnchor={setAnchor} />
            </>
          ) : btnId === "message-btn" ? (
            <>
              <Stack justifyContent="space-between" height="70vh">
                <MessTemp />
                <MenuItem
                  onClick={() => {
                    navigate("messages");
                    setAnchor(null);
                  }}
                  sx={{
                    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
                    marginTop: 1,
                  }}
                >
                  <Stack
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography fontSize={14} color="primary">
                      See all messages
                    </Typography>
                  </Stack>
                </MenuItem>
              </Stack>
            </>
          ) : (
            <>
              <Stack justifyContent="space-between" height="70vh">
                <NotifTemp />
                <MenuItem
                  onClick={() => {
                    navigate("notifications");
                    setAnchor(null);
                  }}
                  sx={{
                    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
                    marginTop: 1,
                  }}
                >
                  <Stack
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography fontSize={14} color="primary">
                      See all notifications
                    </Typography>
                  </Stack>
                </MenuItem>
              </Stack>
            </>
          )}
        </Stack>
      </Menu>
    </>
  );
}

export default MenuOption;
