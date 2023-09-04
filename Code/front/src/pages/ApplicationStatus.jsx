import { ArrowBack } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

function ApplicationStatus() {
  return (
    <>
      <Grid item md={3}>
        <Card elevation={0}>
          <CardHeader title="List of applications" />
          <Stack>
            <CardActionArea sx={{ borderLeft: "3px solid blue" }}>
              <CardContent>
                <Typography fontSize={18} fontWeight={500}>
                  UI/UX Designer
                </Typography>
                <Typography fontSize={14} fontWeight={500}>
                  Google, Inc.
                </Typography>
                <Typography fontSize={12} color="#333333">
                  Batangas City, Batangas
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActionArea>
              <CardContent>
                <Typography fontSize={18} fontWeight={500}>
                  UI/UX Designer
                </Typography>
                <Typography fontSize={14} fontWeight={500}>
                  Google, Inc.
                </Typography>
                <Typography fontSize={12} color="#333333">
                  Batangas City, Batangas
                </Typography>
              </CardContent>
            </CardActionArea>
          </Stack>
        </Card>
      </Grid>

      {/* Start of right side */}
      <Grid item md={9}>
        <Card elevation={0} sx={{ padding: 2 }}>
          <Stack
            width="100%"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button startIcon={<ArrowBack sx={{ height: 20, width: 20 }} />}>
              Back
            </Button>
            <Typography fontSize={14} color="#333333">
              Application on progress
            </Typography>
          </Stack>
          <Stack width="100%">
            <Typography fontSize={16} fontWeight={500}>
              Application Details
            </Typography>
          </Stack>
          <Grid item md={12}>
            <Grid container spacing={2}>
              <Grid
                item
                md={5}
                sx={{ borderRight: "1px solid rgba(0,0,0,0.12)" }}
              >
                Hello, this is world
              </Grid>
              <Grid item md={7}>
                <Timeline
                  sx={{ display: "flex", flexDirection: "column-reverse" }}
                >
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography fontSize={12} color="#333333">
                        Feb. 26, 2023
                      </Typography>
                      <Typography fontSize={16} fontWeight={500}>
                        Application was submitted
                      </Typography>
                    </TimelineContent>
                    <TimelineOppositeContent
                      style={{ flex: 0.1 }}
                    ></TimelineOppositeContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography fontSize={12} color="#333333">
                        Feb. 26, 2023
                      </Typography>
                      <Typography fontSize={16} fontWeight={500}>
                        Application is being processed
                      </Typography>
                    </TimelineContent>
                    <TimelineOppositeContent
                      style={{ flex: 0.1 }}
                    ></TimelineOppositeContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography fontSize={12} color="#333333">
                        Feb. 26, 2023
                      </Typography>
                      <Typography fontSize={16} fontWeight={500}>
                        Job application compatibility was determined. <br />
                        <Link fontSize={14} sx={{ cursor: "pointer" }}>
                          Check Compatibility
                        </Link>
                      </Typography>
                    </TimelineContent>
                    <TimelineOppositeContent
                      style={{ flex: 0.1 }}
                    ></TimelineOppositeContent>
                  </TimelineItem>
                </Timeline>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
}

export default ApplicationStatus;
