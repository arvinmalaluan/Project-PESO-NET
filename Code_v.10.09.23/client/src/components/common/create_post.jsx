import { Avatar, Stack, TextField, Typography } from "@mui/material";
import AlertDialogSlide from "../community/dialog";
import { useEffect, useState } from "react";

import jwtDecode from "jwt-decode";
import { get_profile } from "../../context/GetUserData";

function CreatePost() {
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
        direction="row"
        spacing={2}
        p={2}
        mb={2}
        sx={{ border: "1px solid rgba(0, 0, 0, 0.12)", borderRadius: "5px" }}
      >
        <Avatar />
        <TextField
          placeholder={"What is on your mind, " + profileDetails.name + "?"}
          size="small"
          fullWidth
          onClick={handleClickOpen}
          autoComplete="new-password"
          InputProps={{
            readOnly: true,
          }}
        />
      </Stack>

      <AlertDialogSlide
        open={open}
        set={setOpen}
        details={profileDetails}
        user_id={user_id}
      />
    </>
  );
}

export default CreatePost;
