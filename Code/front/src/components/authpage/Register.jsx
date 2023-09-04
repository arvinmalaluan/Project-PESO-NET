import { Facebook } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function Register() {
  return (
    <>
      <CardContent
        sx={{
          padding: 0,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack sx={{ width: "70%" }}>
          <Typography fontSize={20} fontWeight={500}>
            Register
          </Typography>
          <Typography fontSize={12} color="#333333">
            A moment won't always be there for you.
          </Typography>

          <Stack mt={3}>
            <Typography fontSize={16} fontWeight={500} mb={1}>
              Full name
            </Typography>
            <TextField
              placeholder="Arvin Malaluan"
              size="small"
              inputProps={{
                style: {
                  fontSize: 14,
                  padding: "12px 16px",
                },
              }}
            />
          </Stack>

          <Stack mt={3}>
            <Typography fontSize={16} fontWeight={500} mb={1}>
              Active email
            </Typography>
            <TextField
              placeholder="arvin.workingemail@gmail.com"
              size="small"
              inputProps={{
                style: {
                  fontSize: 14,
                  padding: "12px 16px",
                },
              }}
            />
          </Stack>

          <Stack mt={2}>
            <Typography fontSize={16} fontWeight={500} mb={1}>
              Password
            </Typography>
            <TextField
              placeholder="Enter your password"
              type="password"
              size="small"
              inputProps={{ style: { fontSize: 14, padding: "12px 16px" } }}
            />
          </Stack>

          <Stack mt={2} mb={4}>
            <Typography fontSize={16} fontWeight={500} mb={1}>
              Confirm password
            </Typography>
            <TextField
              placeholder="Enter your password"
              type="password"
              size="small"
              inputProps={{ style: { fontSize: 14, padding: "12px 16px" } }}
            />
          </Stack>

          <Button
            variant="contained"
            disableElevation
            sx={{ textTransform: "none", marginBottom: 4 }}
          >
            Register
          </Button>
        </Stack>
      </CardContent>
    </>
  );
}

export default Register;
