import { IconButton, Stack, TextField, Typography } from "@mui/material";
import deleteIcon from "../../assets/icons/delete-icon.svg";

const FieldTemplate = (props) => {
  const {
    placeholder,
    name,
    index,
    dupli_index,
    length,
    add, // for displaying the add button on the side of textfield
    addField,
    setAdd,
    category,
    setVal,
    state,
    setState,
  } = props;

  const handleDelete = () => {
    const new_array = {};

    Object.keys(state).forEach((key) => {
      new_array[key] = state[key].filter(
        (item, index) => index !== dupli_index
      );
    });

    setState(new_array);
  };

  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center" mb={1}>
        {dupli_index !== 0 && index === 0 && (
          <IconButton
            size="small"
            onClick={handleDelete}
            sx={{
              height: 32,
              width: 32,
              bgcolor: "red",
              "&:hover": {
                bgcolor: "red",
              },
            }}
          >
            <img src={deleteIcon} style={{ height: 16 }} />
          </IconButton>
        )}

        <TextField
          placeholder={placeholder}
          size="small"
          value={state[name][dupli_index]}
          inputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          fullWidth
          onChange={(event) =>
            setVal(name, dupli_index, event.target.value, setState)
          }
        />

        {length - 1 === index &&
          add &&
          state[name][dupli_index] !== "" &&
          state[name].length - 1 === dupli_index && (
            <IconButton
              size="small"
              sx={{ height: 32, width: 32, bgcolor: "whitesmoke" }}
              onClick={() => setAdd(state, setState)}
            >
              +
            </IconButton>
          )}
      </Stack>
    </>
  );
};

export default FieldTemplate;
