import { Stack, Avatar, TextField } from "@mui/material";

function QuestionInput() {
  return (
    <Stack direction="row" spacing={2} alignItems="center" padding={1}>
      <Avatar />
      <TextField placeholder="What do you want to ask or share?" fullWidth />
    </Stack>
  );
}

export default QuestionInput;
