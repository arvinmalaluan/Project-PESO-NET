import { Stack, Typography } from "@mui/material";
import React from "react";

function LeftTemp({ title, type }) {
  return (
    <>
      <Stack
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.12)",
          padding: 2,
          borderRadius: "5px",
        }}
      >
        <Stack direction="row" alignItems="center">
          <Typography fontSize={18} flexGrow={1} fontWeight={500}>
            {title}
          </Typography>
          <Typography fontSize={14} color="primary">
            See all
          </Typography>
        </Stack>
        <Typography fontSize={12} mt={0.5}>
          212 {type}
        </Typography>
      </Stack>
    </>
  );
}

export default LeftTemp;
