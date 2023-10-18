import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import TextF from "./textF";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import loginimg from "./../../assets/login-img.jpg";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [checkInput, setCheckInput] = useState({
    page: "signin",
    bool: false,
  });

  const { login_user } = useContext(AuthContext);

  const handleClick = () => {
    setCheckInput({ ...checkInput, bool: !checkInput.bool });

    if (Boolean(formData.identifier) && Boolean(formData.password)) {
      login_user(formData);
    }
  };

  return (
    <>
      <Grid item md={6} sx={{}}>
        <Stack height="100%" sx={{ overflow: "hidden" }}>
          <img
            src={loginimg}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </Stack>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        sx={{
          height: { xs: "80vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Stack sx={{ width: { xs: "80%", md: "60%" } }} spacing={5}>
          <Stack spacing={0.5}>
            <Typography fontSize={24} fontWeight={700}>
              Welcome back, <br /> User
            </Typography>

            <Typography fontSize={14}>Sign in to continue</Typography>
          </Stack>

          <Stack spacing={2}>
            <TextF
              label="Registered email or username"
              placeholder="Email or username"
              formData={formData}
              setFormData={setFormData}
              type="text"
              setCheck={checkInput}
              enter={handleClick}
            />

            <TextF
              label="Password"
              placeholder="Password"
              formData={formData}
              setFormData={setFormData}
              type="password"
              setCheck={checkInput}
              enter={handleClick}
            />
          </Stack>

          <Button
            disableElevation
            variant="contained"
            sx={{ textTransform: "none", bgcolor: "#0891b2" }}
            onClick={handleClick}
          >
            Sign in
          </Button>

          <Stack>
            <Typography fontSize={12}>
              Not yet a member?{" "}
              <Link
                sx={{ cursor: "pointer" }}
                fontWeight={500}
                onClick={() => navigate("register")}
              >
                Join now
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </>
  );
}

export default Login;
