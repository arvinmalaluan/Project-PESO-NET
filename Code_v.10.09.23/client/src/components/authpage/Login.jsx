import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import TextF from "./textF";
import AuthContext from "../../context/AuthContext";

function Login() {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [checkInput, setCheckInput] = useState({
    page: "signin",
    bool: false,
  });

  const { login_user, acc_details } = useContext(AuthContext);

  const handleClick = () => {
    setCheckInput({ ...checkInput, bool: !checkInput.bool });

    if (Boolean(formData.identifier) && Boolean(formData.password)) {
      login_user(formData);
    }
  };

  return (
    <>
      <Grid item md={6} sm={12}>
        <p>Simple hello {acc_details === null ? "hey" : acc_details.role} </p>
      </Grid>
      <Grid item md={6} sm={12}>
        <Stack width="60%" m="auto" spacing={5}>
          <Stack spacing={0.5}>
            <Typography fontSize={20} fontWeight={500}>
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
            />

            <TextF
              label="Password"
              placeholder="Password"
              formData={formData}
              setFormData={setFormData}
              type="password"
              setCheck={checkInput}
            />
          </Stack>

          <Button
            disableElevation
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={handleClick}
          >
            Sign in
          </Button>

          <Stack>
            <Typography fontSize={12}>
              Not yet a member?{" "}
              <Link sx={{ cursor: "pointer" }} fontWeight={500}>
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
