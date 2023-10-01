import { Avatar, Badge, MenuItem, Stack, Typography } from "@mui/material";

function MessTemp({ set, id, active }) {
  const open_message = () => {
    set(id);
  };

  return (
    <>
      <MenuItem
        onClick={open_message}
        sx={{
          bgcolor: id === active && "whitesmoke",
          borderRadius: "10px",
        }}
      >
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
            <Stack direction="row" spacing={1}>
              <Typography fontSize={12}>
                This is a very long message.
              </Typography>
              <Typography fontSize={12}>2h ago</Typography>
            </Stack>
          </Stack>

          <Badge variant="dot" color="primary" />
        </Stack>
      </MenuItem>
    </>
  );
}

export default MessTemp;
