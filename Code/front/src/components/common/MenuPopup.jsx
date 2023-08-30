import {
  Avatar,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

import NotificationTemplate from "../menu/NotificationTemplate";
import MessageTemplate from "../menu/MessageTemplate";
import ProfileTemplate from "../menu/ProfileTemplate";

import { avatarItems } from "./../../utils/constants";

export default function MenuPopup({ anchor, setAnchor, visible, btnId }) {
  const handleClose = () => {
    setAnchor(null);
  };

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
              <MenuItem>
                <Avatar />
                <Typography variant="body1" fontWeight="bold" ml={2}>
                  Arvin Malaluan
                </Typography>
              </MenuItem>

              {avatarItems.map((items) => {
                return (
                  <ProfileTemplate
                    key={items.id}
                    uniqueId={items.id}
                    name={items.name}
                    icon={items.icon}
                  />
                );
              })}
            </>
          ) : btnId === "message-btn" ? (
            <MessageTemplate />
          ) : (
            <>
              <NotificationTemplate />
            </>
          )}
        </Stack>
      </Menu>
    </>
  );
}
