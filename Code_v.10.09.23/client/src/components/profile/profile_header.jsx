import { Avatar, Button, Stack, Typography } from "@mui/material";

function Header() {
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
              <Typography fontSize={32} fontWeight={500} mt={2}>
                Arvin Malaluan
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} mt={2}>
              <Button variant="contained" disableElevation>
                Hire me!
              </Button>
              <Button variant="outlined">Message</Button>
            </Stack>
          </Stack>
          <Typography fontSize={12} width="50%" mt={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            esse magnam eaque nobis quae? Iusto eum, unde asperiores modi hic
            laudantium nisi, commodi ratione nihil fugit quos architecto, harum
            suscipit!
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default Header;
