import { MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ProfilePost from "../components/common/ProfilePost";

function Profile() {
  return (
    <>
      <Stack ml={2} bgcolor="#fff">
        <Stack
          bgcolor="blue"
          sx={{ height: 250, bgcolor: "cadetblue" }}
        ></Stack>
        <Avatar
          style={{ height: 90, width: 90, marginTop: "-45px", marginLeft: 16 }}
        />
        <Stack direction="row" alignItems="start" width="100%" p={2}>
          <Stack width="50%" flexGrow={1}>
            <Typography variant="h5">ARVIN MALALUAN</Typography>
            <Typography
              width="80%"
              mt={0.5}
              fontSize={14}
              color="rgba(0,0,0,0.8)"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              reprehenderit optio unde? Sint atque nihil non temporibus nulla
              quibusdam, minus necessitatibus fugiat officia molestias magni
              accusantium voluptas incidunt in doloribus?
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <MoreVert />
            </IconButton>
            <Button variant="outlined">Message</Button>
            <Button variant="contained" disableElevation>
              Hire me
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Grid item md={4}>
        <Stack spacing={2}>
          <Card elevation={0} sx={{ padding: 2 }}>
            <CardHeader
              sx={{ padding: 0, paddingBottom: 1 }}
              title="Photos"
              action={<Button>View all</Button>}
            />

            <Grid container spacing={2}>
              <Grid item md={4}>
                Photo goes here ..
              </Grid>
            </Grid>
          </Card>

          <Card elevation={0} sx={{ padding: 2 }}>
            <CardHeader
              sx={{ padding: 0, paddingBottom: 1 }}
              title="Following"
              action={<Button>View all</Button>}
            />

            <Grid container spacing={2}>
              <Grid item md={4}>
                List goes here ..
              </Grid>
            </Grid>
          </Card>
        </Stack>
      </Grid>
      <Grid item md={8}>
        <ProfilePost />
      </Grid>
    </>
  );
}

export default Profile;
