import {
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import SocialLinks from "./social_links";
import axios from "axios";

const CreateProfile = () => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));
  const [path, setPath] = useState(null);

  const [links, setLinks] = useState([""]);
  const [details, setDetails] = useState({
    account: user_id,
    name: "",
    photo: null,
    bio: "",
    social_links: "",
    location: "",
    portfolio_link: "",
    educational_attainment: "",
  });

  useEffect(() => {
    const getUserDetails = async () => {
      const { user_id } = jwtDecode(localStorage.getItem("token"));

      try {
        const endpoint = `http://127.0.0.1:8001/seeker/create-profile/${user_id}`;
        const response = await axios.get(endpoint);

        const {
          account,
          name,
          photo,
          bio,
          social_links,
          location,
          portfolio_link,
          educational_attainment,
        } = response.data;

        const new_array = social_links.split("_+_");

        setPath("put");
        setLinks(new_array);
        setDetails({
          account: account,
          name: name,
          photo: photo,
          bio: bio,
          social_links: social_links,
          location: location,
          portfolio_link: portfolio_link,
          educational_attainment: educational_attainment,
        });
      } catch (error) {
        setPath("post");
      }
    };

    getUserDetails();
  }, []);

  useEffect(() => {
    const new_array = links.join("_+_");
    setDetails({ ...details, social_links: new_array });
  }, [links]);

  const handleSave = async () => {
    console.log(details);

    let response;

    try {
      const endpoint = `http://127.0.0.1:8001/seeker/create-profile${
        path === "put" ? "/" + user_id : ""
      }`;

      if (path === "put") {
        response = await axios.put(endpoint, details);
      } else {
        response = await axios.post(endpoint, details);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid item sm={12}>
        <Typography fontSize={16} fontWeight={500} mt={2} mb={1}>
          Personal Details
        </Typography>

        <SocialLinks
          placeholder="Full name"
          value={details.name}
          formData={details}
          setFormData={setDetails}
        />
        <SocialLinks
          placeholder="Bio"
          value={details.bio}
          formData={details}
          setFormData={setDetails}
        />
        <SocialLinks
          placeholder="Location"
          value={details.location}
          formData={details}
          setFormData={setDetails}
        />
        <SocialLinks
          placeholder="Portfolio Link"
          value={details.portfolio_link}
          formData={details}
          setFormData={setDetails}
        />
        <SocialLinks
          placeholder="Educational Attainment"
          value={details.educational_attainment}
          formData={details}
          setFormData={setDetails}
        />

        <Stack direction="row" spacing={2} mt={2} mb={1} alignItems="center">
          <Typography fontSize={16} fontWeight={500} flexGrow={1}>
            Share your social links
          </Typography>

          {links[links.length - 1] && (
            <Typography
              fontSize={12}
              fontWeight={500}
              color="primary"
              sx={{
                textTransform: "none",
                borderBottom: "1px solid blue",
                cursor: "pointer",
              }}
              onClick={() => {
                links[links.length - 1] !== "" && setLinks([...links, ""]);
              }}
            >
              Add
            </Typography>
          )}
        </Stack>

        <Stack spacing={1} sx={{ marginBottom: 1 }}>
          {links.map((item, idx) => {
            return (
              <TextField
                key={idx}
                value={item ? item : ""}
                placeholder="Link"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    paddingRight: 0,
                  },
                }}
                inputProps={{
                  style: { fontSize: 14 },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{ display: idx == 0 ? "none" : "" }}
                    >
                      <Button variant="contained" disableElevation>
                        x
                      </Button>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                fullWidth
                onChange={(event) => {
                  let copy_array = [...links];
                  copy_array[idx] = event.target.value;
                  setLinks(copy_array);
                }}
              />
            );
          })}
        </Stack>

        <Stack direction="row" mt={3} spacing={2}>
          <Button
            color="error"
            sx={{ textTransform: "none" }}
            variant="outlined"
          >
            Cancel, discard changes
          </Button>

          <Button
            sx={{ textTransform: "none" }}
            variant="contained"
            disableElevation
            onClick={handleSave}
          >
            Save, keep changes
          </Button>
        </Stack>
      </Grid>
    </>
  );
};

export default CreateProfile;
