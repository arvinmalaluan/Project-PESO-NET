import {
  Avatar,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import jwtDecode from "jwt-decode";
import { default_data } from "../../templates/templates";
import { useEffect, useState } from "react";
import { profileModel } from "../../models/models";
import { createUpdateProfile, getProfile } from "../../context/CRUD_Operations";

import ImageIcon from "./../../assets/icons/image.svg";
import remove_icon from "./../../assets/icons/cross-2.svg";

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
    const newPayload = { ...payload, account: user_id, fk: user_id };

    let newdata = new FormData();

    newdata.append("account", newPayload.account);
    newdata.append("bio", newPayload.bio);
    newdata.append("comp_overview", newPayload.comp_overview);
    newdata.append("educational_attainment", newPayload.educational_attainment);
    newdata.append("emp_count", newPayload.emp_count);
    newdata.append("fk", newPayload.fk);
    newdata.append("location", newPayload.location);
    newdata.append("name", newPayload.name);
    newdata.append("photo", newPayload.photo);
    newdata.append("portfolio_link", newPayload.portfolio_link);
    newdata.append("site_link", newPayload.site_link);
    newdata.append("social_links", newPayload.social_links);
    newdata.append("subsidiaries_count", newPayload.subsidiaries_count);

    createUpdateProfile(newdata, user_id)
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

            <AddPhoto pay={payload} set={setPayload} />
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

            <AddPhoto pay={payload} set={setPayload} />
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

const AddPhoto = ({ pay, set }) => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No file selected");

  useEffect(() => {
    setImage(pay.photo);
  }, []);

  return !pay.photo ? (
    <Stack sx={{ height: 200, width: 200, paddingBlock: 2 }}>
      <Stack sx={{ height: 200, bgcolor: "whitesmoke" }}>
        <input
          type="file"
          name="post-img-input"
          id="post-img-input"
          accept=".png, .jpeg, .jpg"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            files ? setImage(URL.createObjectURL(files[0])) : "";
            files[0] && set({ ...pay, photo: files[0] });
          }}
        />
        <label htmlFor="post-img-input" className="post-img-label">
          <Avatar
            src={ImageIcon}
            sx={{
              padding: 1,
              bgcolor: "#e4e6eb",
              height: 24,
              width: 24,
            }}
          />
          <Typography fontSize={16} fontWeight={500} mt={1}>
            Add profile
          </Typography>
        </label>
      </Stack>
    </Stack>
  ) : (
    <Stack sx={{ height: 200, width: 200, paddingBlock: 2 }}>
      <Stack sx={{ height: 200, bgcolor: "whitesmoke", position: "relative" }}>
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            bgcolor: "white",
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            "&:hover": {
              bgcolor: "whitesmoke",
            },
          }}
          onClick={() => {
            setFileName("No file selected");
            setImage(null);
            set({ ...pay, photo: "" });
          }}
        >
          <img src={remove_icon} height={16} alt="" />
        </IconButton>
        <img
          src={image ? image : pay.photo}
          style={{ height: "200px", width: "200px" }}
          alt="no image found"
        />
      </Stack>
    </Stack>
  );
};
