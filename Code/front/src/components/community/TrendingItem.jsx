import { ListItemButton, Stack, Typography } from "@mui/material";

function TrendingItem() {
  return (
    <ListItemButton>
      <Stack>
        <Typography fontSize={14} fontWeight={500}>
          What is love? Is it a necessity for stupid students?
        </Typography>
        <Typography fontSize={12} color="rgba(0, 0, 0, 0.5)">
          2.3k upvotes
        </Typography>
      </Stack>
    </ListItemButton>
  );
}

export default TrendingItem;
