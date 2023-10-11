import { Stack, Typography } from "@mui/material";

const TrendingPosts = () => {
  return (
    <>
      <Typography fontSize={16} fontWeight={500}>
        Trending in PESO-App
      </Typography>

      <Stack
        p={2}
        mt={1}
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "5px",
          bgcolor: "#fff",
          height: "70%",
        }}
      >
        <Typography fontSize={12}>
          Stay connected and in the loop like never before. Download PESO-App
          now and take control of your community experience! 🌐📲
          #PESOAppRevolution #StayConnected #InstantUpdates
        </Typography>
      </Stack>
    </>
  );
};

export default TrendingPosts;
