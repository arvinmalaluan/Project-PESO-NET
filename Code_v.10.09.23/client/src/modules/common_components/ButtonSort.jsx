import { Button, Stack, Typography } from "@mui/material";
import { caret_sort } from "../../templates/image_imports";

const ButtonSort = ({ name }) => {
  return (
    <Button
      sx={{
        textTransform: "none",
        color: "#64748b",
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography fontSize={14} fontWeight={600}>
          {name}
        </Typography>
        <img
          src={caret_sort}
          style={{ height: "18px", width: "18px" }}
          alt=""
        />
      </Stack>
    </Button>
  );
};

export default ButtonSort;
