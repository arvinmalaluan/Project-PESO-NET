import { Avatar, Stack, TextField } from "@mui/material";
import AlertDialogSlide from "../community/dialog";
import { useState } from "react";

function CreatePost() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
          placeholder="What is on your mind, Arvin?"
          size="small"
          fullWidth
          onClick={handleClickOpen}
          autoComplete="new-password"
          InputProps={{
            readOnly: true,
          }}
        />
      </Stack>

      <AlertDialogSlide open={open} set={setOpen} />
    </>
  );
}

export default CreatePost;
