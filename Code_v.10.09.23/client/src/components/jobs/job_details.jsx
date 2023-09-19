import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

function DetailsTemp() {
  const CommonContent = ({ title, message }) => {
    return (
      <Stack spacing={0.5} mb={2}>
        <Typography fontSize={16} fontWeight={500}>
          {title}
        </Typography>
        <Typography fontSize={12}>{message}</Typography>
      </Stack>
    );
  };

  return (
    <>
      <Card>
        <Grid container height="calc(100vh - 85px)">
          <Grid
            item
            md={8}
            height="100%"
            sx={{
              borderRight: "1px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <Stack
              height="12%"
              sx={{ mb: 1, borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <CardHeader
                title={
                  <Typography fontSize={18} fontWeight={500}>
                    UI/UX Designer
                  </Typography>
                }
                subheader={
                  <Stack direction="row" spacing={1}>
                    <Typography fontSize={12}>Twitter, Inc.</Typography>
                    <Typography fontSize={12} fontWeight={500}>
                      122 applied for this
                    </Typography>
                  </Stack>
                }
              />
            </Stack>

            <Stack height="78%" sx={{ overflowY: "scroll" }}>
              <CardContent>
                <CommonContent
                  title="About the job"
                  message="This is a message"
                />

                <CommonContent
                  title="Contact information"
                  message="List of array"
                />

                <CommonContent
                  title="Application deadline"
                  message="No due date specified"
                />

                <CommonContent
                  title="Qualifications"
                  message="No due date specified"
                />

                <CommonContent
                  title="Responsibilities"
                  message="No due date specified"
                />

                <CommonContent
                  title="Benefits"
                  message="No due date specified"
                />

                <CommonContent
                  title="Salary or compensation"
                  message="No due date specified"
                />
              </CardContent>
            </Stack>

            <Stack
              height="10%"
              justifyContent="center"
              mt={1}
              sx={{ mb: 1, borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <CardActions sx={{ mt: "-15px", padding: "0px 16px" }}>
                <Typography fontSize={12} flexGrow={1}>
                  Posted 8 fucking hours ago
                </Typography>

                <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  sx={{ textTransform: "none", fontSize: 14 }}
                >
                  Apply
                </Button>
              </CardActions>
            </Stack>
          </Grid>
          <Grid item md={4} height="100%">
            <Stack
              height="30%"
              textAlign="center"
              sx={{
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                marginBottom: 2,
              }}
            >
              <Avatar
                sx={{
                  marginInline: "auto",
                  height: 48,
                  width: 48,
                  marginTop: 5,
                }}
              />
              <Typography fontSize={18} fontWeight={500} margin="16px 0 4px">
                Google, Inc.
              </Typography>
              <Typography fontSize={12} fontStyle="italic">
                A multinational technology company
              </Typography>
            </Stack>

            <Stack spacing={1} height="25%" p={2}>
              <Typography fontSize={14} pb={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                earum, possimus ad cupiditate ...
              </Typography>

              <Stack spacing={1}>
                <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  sx={{ textTransform: "none" }}
                >
                  Message
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  disableElevation
                  sx={{ textTransform: "none" }}
                >
                  Visit site
                </Button>
              </Stack>
            </Stack>

            <Stack p={2}>
              <Typography fontSize={16} fontWeight={500}>
                Other Roles
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default DetailsTemp;
