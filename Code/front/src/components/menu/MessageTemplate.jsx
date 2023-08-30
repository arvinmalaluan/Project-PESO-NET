import { Avatar, Badge, MenuItem, Stack, Typography } from "@mui/material";

function MessageTemplate() {
  return (
    <>
      <MenuItem>
        <Avatar />

        <Stack width="265px" ml={1}>
          <Typography variant="body1" fontWeight="bold">
            Arvin Colis Malaluan
          </Typography>
          <Typography
            variant="caption"
            sx={{
              width: "90%",
              display: "flex",
            }}
          >
            <p
              style={{
                width: "290px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                marginRight: "10px",
              }}
            >
              This is a very long message intended to hurt anybody who stands in
              my way of life
            </p>
            <span>10 h</span>
          </Typography>
        </Stack>

        <Badge color="primary" variant="dot" />
      </MenuItem>
    </>
  );
}

export default MessageTemplate;
