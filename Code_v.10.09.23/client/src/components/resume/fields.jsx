import { Button, Stack, TextField, Typography } from "@mui/material";

function InputFieldTemp({ title, fields, is_replicable }) {
  const Field = ({ field, idx }) => {
    return (
      <TextField
        key={idx}
        placeholder={field}
        size="small"
        sx={{ marginBottom: 1 }}
        inputProps={{ style: { fontSize: 14 } }}
        InputLabelProps={{ style: { fontSize: 14 } }}
        fullWidth
      />
    );
  };
  return (
    <>
      <Typography fontSize={16} mb={1.5} mt={2} fontWeight={500}>
        {title}
      </Typography>

      {fields.map((field, idx) => {
        return is_replicable && idx == fields.length - 1 ? (
          <Stack direction="row" spacing={1}>
            <Field field={field} idx={idx} key={idx} />
            <Button sx={{ height: 38 }} variant="contained" disableElevation>
              Add
            </Button>
          </Stack>
        ) : (
          <Field field={field} idx={idx} key={idx} />
        );
      })}
    </>
  );
}

export default InputFieldTemp;
