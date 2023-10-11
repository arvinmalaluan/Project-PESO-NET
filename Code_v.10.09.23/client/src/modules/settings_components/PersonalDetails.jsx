import { Button, Stack, TextField, Typography } from "@mui/material";
import jwtDecode from "jwt-decode";
import { default_data } from "../../templates/templates";
import { useEffect, useState } from "react";
import { profileModel } from "../../models/models";
import { createUpdateProfile, getProfile } from "../../context/CRUD_Operations";

const PersonalDetails = () => {
  const { user_role, user_id } = jwtDecode(localStorage.getItem("token"));
  const { company_profile, person_profile } = default_data;

  const [template, setTemplate] = useState([]);
  const [payload, setPayload] = useState(profileModel);

  useEffect(() => {
    user_role === 3
      ? setTemplate(company_profile)
      : setTemplate(person_profile);

    getProfile(user_id)
      .then((data) => {
        setPayload(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChanges = () => {
    const newPayload = { ...payload, account: user_id };
    console.log(newPayload);

    createUpdateProfile(newPayload)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Stack
        sx={{
          height: "100%",
          padding: "16px 32px",
        }}
      >
        {user_role === 3 ? (
          <>
            <Stack mb={2}>
              <Typography fontSize={24} mb={2}>
                Personal Details
              </Typography>
              <Typography fontSize={16}>Manage profile details</Typography>
              <Typography fontSize={12}>
                Take care of all aspects of your account information securely.
              </Typography>
            </Stack>

            <Stack spacing={1.5}>
              {template.map((item, idx) => {
                return (
                  <CustomTextField
                    key={idx}
                    name={item.name}
                    placeholder={item.placeholder}
                    label={item.label}
                    pay={payload}
                    set={setPayload}
                  />
                );
              })}
            </Stack>
          </>
        ) : (
          <>
            <Stack mb={2}>
              <Typography fontSize={24} mb={2}>
                Personal Details
              </Typography>
              <Typography fontSize={16}>Manage profile details</Typography>
              <Typography fontSize={12}>
                Take care of all aspects of your account information securely.
              </Typography>
            </Stack>

            <Stack spacing={1.5}>
              {template.map((item, idx) => {
                return (
                  <CustomTextField
                    key={idx}
                    name={item.name}
                    placeholder={item.placeholder}
                    label={item.label}
                    pay={payload}
                    set={setPayload}
                  />
                );
              })}
            </Stack>
          </>
        )}

        <Stack
          direction="row"
          spacing={1}
          sx={{
            mt: 2.5,
            justifyContent: "end",
          }}
        >
          <Button variant="contained" disableElevation>
            Discard Changes
          </Button>
          <Button variant="outlined" onClick={handleChanges}>
            Save Changes
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default PersonalDetails;

const CustomTextField = ({ placeholder, label, name, pay, set }) => {
  const handleChange = (e, name) => {
    set({ ...pay, [name]: e.target.value });
  };

  return (
    <Stack spacing={0.5}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        size="small"
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
