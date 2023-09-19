import { Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";

function Filter() {
  return (
    <>
      <Stack
        sx={{
          padding: 2,
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "5px",
        }}
      >
        <Typography fontSize={18} fontWeight={500}>
          Filters
        </Typography>

        <FormControlLabel label="Today" control={<Checkbox />} />
        <FormControlLabel label="This month" control={<Checkbox />} />
        <FormControlLabel label="This year" control={<Checkbox />} />
      </Stack>
    </>
  );
}

export default Filter;
