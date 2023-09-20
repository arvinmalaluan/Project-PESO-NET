import { Avatar, CardHeader, MenuItem, Stack, Typography } from "@mui/material";
import React from "react";

function AppTemp() {
  return (
    <>
      <Stack>
        <MenuItem disableGutters>
          <CardHeader
            avatar={<Avatar />}
            title={
              <Typography fontSize={16} fontWeight={500}>
                UI/UX Designer
              </Typography>
            }
            subheader={<Typography fontSize={12}>Google, Inc.</Typography>}
            sx={{ padding: "8px 16px" }}
          />
        </MenuItem>
      </Stack>
    </>
  );
}

export default AppTemp;
