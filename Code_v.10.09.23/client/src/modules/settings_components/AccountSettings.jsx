import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material";

import { chevron_right } from "./../../templates/image_imports";
import { useEffect, useState } from "react";

import { accountModel } from "./../../models/models";
import jwtDecode from "jwt-decode";
import { getAllAccounts, updateAccount } from "./../../context/CRUD_Operations";

const AccountSettings = () => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));
  const [details, setDetails] = useState(accountModel);

  const titles = [
    "Where you're logged in",
    "Login alerts",
    "Recent emails",
    "Security Checkup",
  ];

  const CustomMenuItem = ({ title }) => {
    return (
      <MenuItem
        sx={{
          bgcolor: "#fff",
          borderRadius: "10px",
          paddingBlock: 0,
          border: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Stack
          direction="row"
          sx={{ height: "45px" }}
          width="100%"
          alignItems="center"
        >
          <Typography flexGrow={1} fontSize={14}>
            {title}
          </Typography>
          <img src={chevron_right} className="icon-16x16" alt="" />
        </Stack>
      </MenuItem>
    );
  };

  const handleUpdate = () => {
    const payload = { ...details, account: user_id };

    if (payload.password !== payload.conf_password) {
      console.log("error");
    } else {
      updateAccount(payload)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getAllAccounts(user_id)
      .then((data) => {
        setDetails({
          username: data.username,
          email: data.email,
          old_password: "",
          password: "",
          conf_password: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Stack sx={{ padding: "16px 32px" }}>
      <Typography fontSize={24} mb={2} fontWeight={700}>
        Account Settings
      </Typography>
      <Typography fontSize={16} fontWeight={600}>
        Manage log in credentials
      </Typography>
      <Typography fontSize={12}>
        Take care of all aspects of your account information securely.
      </Typography>

      <Stack mt={2} spacing={1.5}>
        <CustomTextField
          label="Username"
          placeholder="example: @mr_pr2xiay"
          name="username"
          pay={details}
          set={setDetails}
        />

        <CustomTextField
          label="Email Address"
          placeholder="example@gmail.com"
          name="email"
          pay={details}
          set={setDetails}
        />

        <CustomTextField
          label="Old password"
          placeholder="Juan's old password"
          name="old_password"
          pay={details}
          set={setDetails}
          type="password"
        />

        <CustomTextField
          label="New password"
          placeholder="Juan's new password"
          name="password"
          pay={details}
          set={setDetails}
          type="password"
        />

        <CustomTextField
          label="Confirm new password"
          placeholder="Juan's new password"
          name="conf_password"
          pay={details}
          set={setDetails}
          type="password"
        />
      </Stack>

      <Stack direction="row" mt={2} spacing={1} justifyContent="end">
        <Button variant="outlined" sx={{ textTransform: "none" }}>
          Discard
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{ textTransform: "none" }}
          onClick={handleUpdate}
        >
          Save changes
        </Button>
      </Stack>

      <Typography fontSize={16} mt={5} fontWeight={600}>
        Security checks
      </Typography>
      <Typography fontSize={12}>
        Review security issues by running checks across apps, devices and emails
        sent.
      </Typography>

      <Stack mt={2} spacing={1.5}>
        {titles.map((item, idx) => {
          return <CustomMenuItem title={item} key={idx} />;
        })}
      </Stack>
    </Stack>
  );
};

export default AccountSettings;

const CustomTextField = ({ label, placeholder, name, pay, set, type }) => {
  const handleChange = (e, name) => {
    set({ ...pay, [name]: e.target.value });
  };

  return (
    <Stack spacing={0.2}>
      <Typography fontSize={12}>{label}</Typography>
      <TextField
        size="small"
        type={type}
        value={pay[name] ? pay[name] : ""}
        onChange={(e) => handleChange(e, name)}
        InputProps={{
          sx: {
            bgcolor: "#fff",
            borderRadius: "10px",
            fontSize: 14,
            paddingBlock: 0.5,
          },
        }}
        placeholder={placeholder}
      />
    </Stack>
  );
};
