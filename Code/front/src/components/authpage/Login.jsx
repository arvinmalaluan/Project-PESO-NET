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

import google from "./../../assets/google.png";

function Login() {
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
            Log in
          </Typography>
          <Typography fontSize={12} color="#333333">
            Welcome back! May the luck be with you.
          </Typography>

          <Stack mt={3}>
            <Typography fontSize={16} fontWeight={500} mb={1}>
              Identifier
            </Typography>
            <TextField
              placeholder="Enter your email or username"
              size="small"
              inputProps={{
                style: {
                  fontSize: 14,
                  padding: "12px 16px",
                },
              }}
            />
          </Stack>

          <Stack mt={2} mb={4}>
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

          <Button
            variant="contained"
            disableElevation
            sx={{ textTransform: "none", marginBottom: 4 }}
          >
            Login
          </Button>

          <Divider />
          <Stack direction="row" spacing={2} sx={{ marginTop: 4 }}>
            <Button
              startIcon={<Facebook sx={{ color: "#1877F2" }} />}
              sx={{
                fontSize: 13,
                border: "1px solid rgba(0, 0, 0, 0.12)",
                textTransform: "none",
                width: "100%",
                color: "#333333",
              }}
            >
              Login with Facebook
            </Button>
            <Button
              startIcon={
                <Avatar
                  sx={{
                    height: 16,
                    width: 16,
                  }}
                  src={google}
                />
              }
              sx={{
                fontSize: 13,
                border: "1px solid rgba(0, 0, 0, 0.12)",
                textTransform: "none",
                width: "100%",
                color: "#333333",
              }}
            >
              Login with Google
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </>
  );
}

export default Login;
