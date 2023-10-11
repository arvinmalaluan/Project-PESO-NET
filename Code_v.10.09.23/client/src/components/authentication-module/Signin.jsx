import { Button, Grid, Stack, TextField, Typography } from "@mui/material";

const Signin = () => {
  // -> Logic handler
  const handleSignin = (event) => {
    return event.key === "Enter" && console.log("hello");
  };

  return (
    <>
      <Grid item md={6}>
        Hello
      </Grid>
      <Grid item md={6}>
        <Typography fontSize={16} fontWeight={300}>
          Welcome to PESO App
        </Typography>
        <Typography fontSize={24} fontWeight={500}>
          New User!
        </Typography>

        <SigninForm keyDown={handleSignin} />
      </Grid>
    </>
  );
};

export default Signin;

const SigninForm = ({ keyDown }) => {
  const InputField = (props) => {
    return (
      <Stack spacing={3} mb={4}>
        <TextField
          type={props.type}
          placeholder={props.placeholder}
          size="small"
          onKeyDown={props.hitEnter}
          inputProps={{
            style: {
              fontSize: 14,
              backgroundColor: "#FCFCFC",
            },
          }}
          InputLabelProps={{ style: { fontSize: 14 } }}
        />
      </Stack>
    );
  };

  return (
    <>
      <InputField
        type="text"
        placeholder="Registered username or email"
        name="identifier"
        hitEnter={keyDown}
      />

      <InputField
        type="password"
        placeholder="Your password here"
        name="password"
        hitEnter={keyDown}
      />

      <Button
        variant="contained"
        disableElevation
        sx={{ textTransform: "none", width: "100%", mt: 5 }}
        onClick={keyDown}
      >
        Log in
      </Button>
    </>
  );
};
