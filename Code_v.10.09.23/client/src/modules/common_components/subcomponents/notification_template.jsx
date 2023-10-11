import { Avatar, Badge, MenuItem, Stack, Typography } from "@mui/material";

function NotifTemp() {
  return (
    <>
      <MenuItem>
        <Stack
          width="100%"
          padding="4px 8px 4px 0"
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Avatar />
          <Stack flexGrow={1}>
            <Typography fontSize={16} fontWeight={500}>
              Arvin Malaluan
            </Typography>
            <Typography fontSize={12}>This is a very long message.</Typography>
            <Typography fontSize={12} color="primary">
              2h ago
            </Typography>
          </Stack>

          <Badge variant="dot" color="primary" />
        </Stack>
      </MenuItem>
    </>
  );
}

export default NotifTemp;
