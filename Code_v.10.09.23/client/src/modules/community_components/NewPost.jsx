import OpenDialog from "../../modules/community_components/Dialog";
import { useEffect, useState } from "react";

import jwtDecode from "jwt-decode";
import { get_profile } from "../../context/GetUserData";

import { Avatar, Stack, TextField } from "@mui/material";

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
      <Stack direction="row" spacing={2} pt={2} pb={2}>
        <Avatar />

        <TextField
          placeholder={`What is on your mind, ${"Arvin"}?`}
          size="small"
          fullWidth
          onClick={handleClickOpen}
          InputProps={{
            readOnly: true,
            sx: { borderRadius: 5, bgcolor: "#fff", paddingLeft: 1 },
          }}
        />
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
