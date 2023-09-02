import { MoreHoriz } from "@mui/icons-material";
import {
  FormControlLabel,
  FormGroup,
  Card,
  TextField,
  Checkbox,
  Typography,
  Grid,
  CardHeader,
  IconButton,
  CardContent,
  Divider,
  Stack,
  CardActions,
  Button,
} from "@mui/material";
import ProfilePost from "../components/common/ProfilePost";

function Saved() {
  const CheckBoxTemplate = ({ name }) => {
    return (
      <FormControlLabel
        sx={{ height: 25 }}
        control={<Checkbox size="small" />}
        label={<Typography>{name}</Typography>}
      />
    );
  };

  return (
    <>
      <Grid item md={3}>
        <Card sx={{ padding: 2 }}>
          <TextField fullWidth placeholder="Search" size="small" />
          <Typography>Filter</Typography>

          <FormGroup>
            <Typography variant="h6">Type</Typography>
            <CheckBoxTemplate name="All" />
            <CheckBoxTemplate name="Community Posts" />
            <CheckBoxTemplate name="Job Posts" />
          </FormGroup>

          <FormGroup>
            <Typography variant="h6">Sort by</Typography>
            <CheckBoxTemplate name="Date Added (Oldest)" />
            <CheckBoxTemplate name="Date Added (Newest)" />
            <CheckBoxTemplate name="Date Published (Oldest)" />
            <CheckBoxTemplate name="Date Published (Newest)" />
          </FormGroup>

          <FormGroup>
            <Typography variant="h6">Date Saved</Typography>
            <CheckBoxTemplate name="This Day" />
            <CheckBoxTemplate name="This Month" />
            <CheckBoxTemplate name="This Year" />
          </FormGroup>
        </Card>
      </Grid>

      <Grid item md={4}>
        <Card
          sx={{
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Stack>
            <CardHeader
              title={<Typography fontSize={16}>Preview</Typography>}
              sx={{ padding: "20px 20px 16px" }}
              action={
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              }
            />
            <CardContent sx={{ paddingTop: 0 }}>
              <Typography fontSize={18} mb={0.2} fontWeight={500}>
                UI/UX Designer
              </Typography>
              <Typography fontSize={14} mb={0.2} color="#333333">
                Google, Inc.
              </Typography>
              <Typography fontSize={12} mb={1.5} color="#333333">
                Simlong, Batangas City, Batangas
              </Typography>
              <Divider />

              <Typography fontSize={16} mb={1} mt={2} fontWeight={500}>
                About the role
              </Typography>
              <Typography fontSize={14} color="#333333">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                repudiandae animi exercitationem dolorem, ex unde accusamus
                totam nobis amet. Laborum cumque nulla amet numquam aperiam
                ratione nam est harum beatae!
              </Typography>

              <Typography fontSize={16} mb={1} mt={2} fontWeight={500}>
                Required Experience
              </Typography>
              <Typography fontSize={14} color="#333333">
                2 years of experience with IT related field
              </Typography>

              <Stack direction="row" spacing={1} mt={2} alignItems="end">
                <Typography fontSize={16} mb={1} fontWeight={500}>
                  Job Type :
                </Typography>
                <Typography fontSize={14} color="#333333">
                  Full time
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} mt={1} alignItems="end">
                <Typography fontSize={16} mb={1} fontWeight={500}>
                  Job Location :
                </Typography>
                <Typography fontSize={14} color="#333333">
                  Onsite
                </Typography>
              </Stack>
            </CardContent>
          </Stack>
          <CardActions sx={{ padding: "0 16px 8px" }}>
            <Button variant="outlined">View more details</Button>
            <Button variant="contained" disableElevation>
              Apply for the position
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item md={5}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Card
              elevation={0}
              sx={{
                padding: 1,
                bgcolor: "transparent",
                border: "2px solid blue",
              }}
            >
              <ProfilePost />
            </Card>
          </Grid>
          <Grid item md={12}>
            <ProfilePost />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Saved;
