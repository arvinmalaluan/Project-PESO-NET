import OpenDialog from "../../modules/community_components/Dialog";
import { useEffect, useState } from "react";

import jwtDecode from "jwt-decode";
import { get_profile } from "../../context/GetUserData";

import { Avatar, Divider, Stack, TextField, Typography } from "@mui/material";
import { film, image, smile } from "../../templates/image_imports";

const NewPost = () => {
  const [open, setOpen] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    id: "",
    name: "",
    profile: "",
  });

  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    get_profile(user_id)
      .then((data) => {
        setProfileDetails({
          id: data.id,
          name: data.name,
          profile: data.photo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Stack
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.12)",
          mb: 1,
          p: 2,
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            borderRadius: "5px",
            mb: 1.5,
          }}
        >
          <Avatar src={profileDetails.profile} sx={{ height: 37, width: 37 }} />
          <TextField
            placeholder={`What is on your mind, ${profileDetails.name}?`}
            size="small"
            fullWidth
            onClick={handleClickOpen}
            InputProps={{
              readOnly: true,
              sx: {
                borderRadius: "5px",
                bgcolor: "whitesmoke",
                paddingLeft: 1,
                fontSize: 14,
              },
            }}
            sx={{
              "& fieldset": { border: "none" },
            }}
          />
        </Stack>

        <Divider />

        <Stack direction="row" spacing={1} mt={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            justifyContent="center"
            width="100%"
            onClick={handleClickOpen}
            sx={{
              "&:hover": { bgcolor: "whitesmoke" },
              paddingBlock: 1,
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            <img src={film} alt="" className="icon-20x20" />
            <Typography fontSize={14}>Share video</Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            justifyContent="center"
            width="100%"
            onClick={handleClickOpen}
            sx={{
              "&:hover": { bgcolor: "whitesmoke" },
              paddingBlock: 1,
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            <img src={image} alt="" className="icon-20x20" />
            <Typography fontSize={14}>Share photo</Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            justifyContent="center"
            width="100%"
            onClick={handleClickOpen}
            sx={{
              "&:hover": { bgcolor: "whitesmoke" },
              paddingBlock: 1,
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            <img src={smile} alt="" className="icon-20x20" />
            <Typography fontSize={14}>Feeling/Activity</Typography>
          </Stack>
        </Stack>
      </Stack>

      <OpenDialog
        open={open}
        set={setOpen}
        details={profileDetails}
        user_id={user_id}
      />
    </>
  );
};

export default NewPost;
