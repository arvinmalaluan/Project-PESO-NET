import { Avatar, MenuItem, Stack, Typography } from "@mui/material";
import { map_pin } from "./../../templates/image_imports";
import { useLocation } from "react-router-dom";

const JobPosts = () => {
  const { pathname } = useLocation();
  return (
    <MenuItem
      sx={{
        paddingBlock: 2,
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "5px",
      }}
    >
      <Avatar variant="rounded" sx={{ marginRight: 2 }} />
      <Stack sx={{ width: "100%" }}>
        <Stack direction="row" sx={{ width: "100%" }}>
          <Typography fontSize={12} flexGrow={1} fontWeight={300}>
            Google, Inc.
          </Typography>
          {pathname !== "/status" && (
            <Typography fontSize={12} fontWeight={300}>
              Simlong, Batangas City
            </Typography>
          )}
        </Stack>

        <Stack direction="row" alignItems="center" width="100%">
          <Typography fontSize={18} flexGrow={1}>
            UI/UX Designer
          </Typography>
          {pathname !== "/status" && (
            <Stack direction="row" spacing={1}>
              <img src={map_pin} className="icon-16x16" alt="" />
              <Typography fontSize={12} fontWeight={300}>
                Posted 8hrs. ago.
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>
    </MenuItem>
  );
};

export default JobPosts;
