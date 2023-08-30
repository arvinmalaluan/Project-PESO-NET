import { Avatar, Badge, MenuItem, Stack, Typography } from "@mui/material";

export default function NotificationTemplate() {
  return (
    <>
      <MenuItem>
        <Avatar />

        <Stack width="240px" mr={2} ml={2}>
          <Typography
            variant="body1"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              whiteSpace: "normal",
              textOverflow: "ellipsis",
            }}
          >
            <b>Arvin Colis Malaluan</b>
            <span
              style={{
                fontSize: "14px",
              }}
            >
              {
                " — This is to commemorate the inaugaration of the newly elected president of the republic"
              }
            </span>
          </Typography>
          <Typography color="primary" variant="caption" component="span">
            2 hours ago.
          </Typography>
        </Stack>

        <Badge color="primary" variant="dot" />
      </MenuItem>
    </>
  );
}
