import { Stack, Typography } from "@mui/material";

function ActivityTemp() {
  return (
    <>
      <Typography fontSize={16} fontWeight={500}>
        Recent Activity
      </Typography>

      <Stack
        p={2}
        mt={1}
        sx={{ border: "1px solid rgba(0, 0, 0, 0.12)", borderRadius: "5px" }}
      >
        <Typography fontSize={12}>
          When you create a post or submit queries in the community, PESO-App
          will promptly notify you and provide the corresponding link(s) for
          your activity.
        </Typography>
      </Stack>
    </>
  );
}

export default ActivityTemp;
