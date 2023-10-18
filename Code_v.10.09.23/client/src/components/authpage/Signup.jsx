import { Button, Grid, Link, MenuItem } from "@mui/material";
import { Stack, TextField, Typography } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextF from "./textF";
import register from "./../../utils/registration";
import signupimg from "./../../assets/signup-img.jpg";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: null,
    password: "",
    confpass: "",
    role: "",
  });

  const [checkInput, setCheckInput] = useState({
    page: "signup",
    bool: false,
  });

  const [roleError, setRoleError] = useState(false);

  const [selectedRole, setSelectedRole] = useState(0);

  const handleClick = () => {
    setCheckInput({ ...checkInput, bool: !checkInput.bool });
    formData.role === "" && setRoleError(true);

    const is_valid =
      Boolean(formData.email) &&
      Boolean(formData.password) &&
      Boolean(formData.confpass) &&
      Boolean(formData.role);

    const does_match = formData.password === formData.confpass;

    if (is_valid && does_match) {
      const data = {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        role: formData.role,
      };

      register(data);
    }
  };

  const handleBlur = () => {
    formData.role === "" && setRoleError(true);
    formData.role !== "" && setRoleError(false);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    setFormData({ ...formData, role: event.target.value });
  };

  const handleRoleKey = () => {};

  return (
    <>
      <Grid item md={6} sm={12} sx={{ display: { xs: "none", md: "block" } }}>
        <Stack height="100vh" sx={{ overflow: "hidden" }}>
          <img src={signupimg} style={{ height: "100%" }} alt="" />
        </Stack>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        height="100vh"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Stack
          m="auto"
          spacing={4}
          sx={{ width: { xs: "80%", md: "60%" }, paddingBlock: 5 }}
        >
          <Stack spacing={0.5}>
            <Typography fontSize={24} fontWeight={700}>
              Welcome to PESO, <br /> User
            </Typography>

            <Typography fontSize={14}>Sign up to join</Typography>
          </Stack>

          <Stack spacing={2}>
            <Stack spacing={0.5}>
              <Typography fontSize={14} fontWeight={500}>
                What brings you here?
              </Typography>
              <TextField
                select
                size="small"
                value={selectedRole}
                onChange={handleRoleChange}
                onKeyDown={handleRoleKey}
                error={roleError}
                onBlur={handleBlur}
                helperText={roleError ? "* field is required" : ""}
                sx={{
                  ".MuiInputBase-input": { fontSize: "14px" },
                }}
              >
                <MenuItem value="0" sx={{ fontSize: "14px" }} disabled>
                  Select role
                </MenuItem>
                <MenuItem value="2" sx={{ fontSize: "14px" }}>
                  Job Seeker
                </MenuItem>
                <MenuItem value="3" sx={{ fontSize: "14px" }}>
                  Job Recruiter
                </MenuItem>
              </TextField>
            </Stack>

            <TextF
              label="Active email"
              placeholder="Email address"
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

            <TextF
              label="Repeat password"
              placeholder="Confirm your password"
              formData={formData}
              setFormData={setFormData}
              type="password"
              setCheck={checkInput}
            />
          </Stack>

          <Button
            disableElevation
            variant="contained"
            sx={{ textTransform: "none", bgcolor: "#0891b2" }}
            onClick={handleClick}
          >
            Sign up
          </Button>

          <Stack>
            <Typography fontSize={12}>
              Already have an account?{" "}
              <Link
                sx={{ cursor: "pointer" }}
                fontWeight={500}
                onClick={() => navigate("/")}
              >
                Log in
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </>
  );
}

export default Signup;
