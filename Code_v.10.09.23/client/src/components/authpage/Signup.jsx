import {
  Button,
  Grid,
  Link,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TextF from "./textF";
import register from "./../../utils/registration";

function Signup() {
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

  return (
    <>
      <Grid item md={6} sm={12}>
        <p>Simple Hi</p>
      </Grid>
      <Grid item md={6} sm={12}>
        <Stack width="60%" m="auto" spacing={4}>
          <Stack spacing={0.5}>
            <Typography fontSize={20} fontWeight={500}>
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
                error={roleError}
                onBlur={handleBlur}
                helperText={roleError ? "* field is required" : ""}
              >
                <MenuItem value="0" disabled>
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
            sx={{ textTransform: "none" }}
            onClick={handleClick}
          >
            Sign in
          </Button>

          <Stack>
            <Typography fontSize={12}>
              Already have an account?{" "}
              <Link sx={{ cursor: "pointer" }} fontWeight={500}>
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
