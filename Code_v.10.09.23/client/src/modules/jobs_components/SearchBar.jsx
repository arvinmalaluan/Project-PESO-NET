import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { chevron_down, filter_icon } from "../../templates/image_imports";

const SearchBar = () => {
  const NewTextField = ({ placeholder }) => {
    return (
      <TextField
        placeholder={placeholder}
        size="small"
        InputProps={{
          sx: {
            borderRadius: 5,
            paddingLeft: 1,
          },
        }}
      />
    );
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          bgcolor: "#fff",
          paddingBlock: 1,
          paddingInline: 4,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <NewTextField placeholder="Job Title" />
          <NewTextField placeholder="Job Location" />

          <IconButton sx={{ bgcolor: "whitesmoke" }}>
            <img src={filter_icon} className="icon-20x20" alt="not found" />
          </IconButton>
          <Button
            variant="contained"
            disableElevation
            sx={{ borderRadius: 5, textTransform: "none", paddingInline: 3 }}
          >
            Search
          </Button>
        </Stack>
        <Button
          variant="outlined"
          disableElevation
          sx={{ borderRadius: 5, textTransform: "none", paddingInline: 2 }}
        >
          <Stack direction="row" spacing={1}>
            <Typography>Data posted</Typography>
            <img src={chevron_down} alt="" />
          </Stack>
        </Button>
      </Stack>
    </>
  );
};

export default SearchBar;
