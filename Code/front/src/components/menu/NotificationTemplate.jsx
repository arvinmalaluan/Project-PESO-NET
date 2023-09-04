import { Avatar, Badge, MenuItem, Stack, Typography } from "@mui/material";

export default function NotificationTemplate() {
  return (
    <>
      <MenuItem>
        <Stack spacing={1} direction="row" alignItems="center" pr={2}>
          <Avatar />

          <Stack width="100%" pl={1}>
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
                  color: "#3333333",
                }}
              >
                {
                  " — This is to commemorate the inaugaration of the newly elected president of the republic"
                }
              </span>
            </Typography>
            <Typography fontSize={12} color="primary" mt={0.5} fontWeight={500}>
              2 hours ago.
            </Typography>
          </Stack>

          <Badge color="primary" variant="dot" sx={{ paddingLeft: 1 }} />
        </Stack>
      </MenuItem>
    </>
  );
}
