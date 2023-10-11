import {
  Avatar,
  Button,
  Chip,
  Divider,
  Grid,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { circle } from "../../templates/image_imports";

import TrendingPosts from "./../../modules/community_components/TrendingPosts";

const RecruiterHome = () => {
  return (
    <Grid container sx={{ height: "100%", bgcolor: "#fff" }}>
      <Grid item md={8} sx={{ height: "100%" }}>
        <Grid
          container
          alignContent="start"
          sx={{ height: "100%", padding: "16px 16px 16px 32px" }}
        >
          <Grid item md={12}>
            <Stack direction="row" spacing={2} mb={4}>
              <CustomChip title="Schedules for today" count="10" />
              <CustomChip title="New messages" count="10" />
              <CustomChip title="Active job post" count="10" />
              <CustomChip title="Number of applicants" count="10" />
            </Stack>
          </Grid>
          <Grid item md={12}>
            <Stack direction="row" spacing={2.5}>
              <Stack width="49%" height="300px">
                <TrendingPosts />
              </Stack>
              <Stack width="50%">
                <Typography mb={1}>News</Typography>
                <Stack
                  sx={{
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    height: "242px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                >
                  <Typography fontSize={12}>
                    Job related news goes here
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={12}>
            <ImportantNumber />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} sx={{ height: "100%", padding: "16px 32px 16px 16px" }}>
        <Stack>
          <Stack direction="row" mb={1} alignItems="end">
            <Typography flexGrow={1}>Candidate Spotlight</Typography>
            <Typography fontSize={12}>See all</Typography>
          </Stack>

          <RecommendedUsers />
          <RecommendedUsers />

          <Divider />

          <Stack
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.12)",
              paddingInline: 3,
              paddingBlock: 2,
              marginTop: 2,
            }}
          >
            <Stack direction="row" mb={2} alignItems="end">
              <Typography flexGrow={1} fontSize={14}>
                Your recent activities
              </Typography>
              <Typography fontSize={12}>See all</Typography>
            </Stack>

            <RecentActivities />
            <RecentActivities />
            <RecentActivities />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default RecruiterHome;

const RecommendedUsers = () => {
  return (
    <MenuItem
      sx={{
        paddingInline: "8px",
        marginLeft: "-8px",
        marginBottom: "8px",
        paddingBlock: 1,
        alignItems: "start",
        borderRadius: "5px",
      }}
    >
      <Avatar sx={{ height: 56, width: 56 }} />
      <Stack sx={{ width: "100%" }} ml={2}>
        <Typography>Hello</Typography>
        <Typography fontSize={12} fontWeight={300}>
          Consultant
        </Typography>

        <Stack direction="row" sx={{ width: "100%" }} spacing={1} mt={1}>
          <Button
            variant="contained"
            disableElevation
            size="small"
            sx={{ textTransform: "none", width: "100%" }}
          >
            Hire
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{ textTransform: "none", width: "100%" }}
          >
            Details
          </Button>
        </Stack>
      </Stack>
    </MenuItem>
  );
};

const CustomStack = () => {
  return (
    <Stack>
      <Typography>Active Number of Job Posts</Typography>
      <Typography>Count</Typography>
    </Stack>
  );
};

const RecentActivities = () => {
  return (
    <Stack
      pl={4}
      pb={2}
      ml={0.5}
      sx={{ borderLeft: "1px solid black", position: "relative" }}
    >
      <Typography fontWeight={300} fontSize={12} marginTop="-4px">
        2 days ago
      </Typography>
      <Typography fontSize={14} className="clip-2-lines">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        fuga sit culpa sapiente, dolores fugit quidem ullam, nesciunt sunt, vel
        nostrum. Vero numquam saepe dolorum, quaerat unde recusandae beatae
        sapiente.
      </Typography>

      <img
        src={circle}
        style={{ height: "10px", position: "absolute", left: -5, top: 0 }}
        alt=""
      />
    </Stack>
  );
};

const CustomChip = ({ title, count }) => {
  return (
    <Chip
      label={
        <>
          <Typography fontSize={14}>{title}</Typography>
          <Typography fontSize={20}>{count}</Typography>
        </>
      }
      sx={{
        width: "100%",
        height: "auto",
        paddingBlock: 2,
        textAlign: "center",
      }}
    />
  );
};

const ImportantNumber = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Job Title</TableCell>
          <TableCell>Posted on</TableCell>
          <TableCell>Number of Applicants</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow>
          <TableCell>UI/UX Designer</TableCell>
          <TableCell>July 8, 2023</TableCell>
          <TableCell>23</TableCell>
          <TableCell>...</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
