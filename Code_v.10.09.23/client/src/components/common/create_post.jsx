import { Avatar, Stack, TextField } from "@mui/material";

function CreatePost() {
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
        />
      </Stack>
    </>
  );
}

export default CreatePost;
