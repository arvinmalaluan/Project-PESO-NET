import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";

function JobLite() {
  return (
    <>
      <Card
        elevation={0}
        sx={{ border: "1px solid rgba(0, 0, 0, 0.12)", marginBottom: 2 }}
      >
        <CardHeader
          avatar={<Avatar />}
          title={
            <Typography fontSize={16} fontWeight={500}>
              UI/UX Designer
            </Typography>
          }
          subheader={
            <Stack direction="row" spacing={1.5}>
              <Typography fontSize={12}>Google, Inc.</Typography>
              <Typography fontSize={12}>200 applied for this</Typography>
            </Stack>
          }
          sx={{ paddingBottom: 1 }}
        />
        <CardContent sx={{ paddingTop: 1 }}>
          <Typography fontSize={16} fontWeight={500}>
            About the job
          </Typography>
          <Typography fontSize={14} mt={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            minima esse voluptas similique eum aspernatur, consequatur dicta
            sequi atque voluptate explicabo quas necessitatibus ut repellat est
            architecto consectetur, mollitia dolorum.
          </Typography>
        </CardContent>
        <CardActions sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}>
          <Button>View</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default JobLite;
