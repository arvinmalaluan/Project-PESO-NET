import { Avatar, Button, Stack, Typography } from "@mui/material";

function Header({ details }) {
  return (
    <>
      <Stack sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}>
        <Stack bgcolor="beige" height="150px"></Stack>
        <Stack p="0px 16px 32px">
          <Avatar
            sx={{ height: 80, width: 80, mt: -4, border: "5px solid #fff" }}
          />
          <Stack
            direction="row"
            alignItems="start"
            justifyContent="space-between"
          >
            <Stack>
              {details ? (
                <Typography
                  fontSize={24}
                  fontWeight={500}
                  mt={2}
                  sx={{ textTransform: "uppercase" }}
                >
                  {details.name}
                </Typography>
              ) : (
                "( name unset )"
              )}
            </Stack>
            <Stack direction="row" spacing={2} mt={2}>
              <Button
                variant="contained"
                disableElevation
                sx={{ textTransform: "none" }}
              >
                Hire me!
              </Button>
              <Button variant="outlined" sx={{ textTransform: "none" }}>
                Message
              </Button>
            </Stack>
          </Stack>
          {details ? (
            <Typography fontSize={12} width="50%" mt={1}>
              {details.bio.split(0, 100) +
                (details.bio.length > 100 ? "..." : "")}
            </Typography>
          ) : (
            "( set bio )"
          )}
        </Stack>
      </Stack>
    </>
  );
}

export default Header;
