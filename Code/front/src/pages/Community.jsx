import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import SideNavigation from "./../layout/SideNavigation";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

import { Link } from "react-router-dom";
import { useState } from "react";
import CommunityPost from "../components/common/CommunityPost";

function Community() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Grid item md={2.5}>
        <Stack spacing={2}>
          <Stack>
            <Paper elevation={0}>
              <SideNavigation type="queries" />
            </Paper>
          </Stack>
          <Stack>
            <Paper elevation={0} style={{ padding: "16px 8px 8px" }}>
              <Typography fontSize={16} fontWeight={500} pl={2}>
                Most recent posts
              </Typography>
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot style={{ margin: 0 }} variant="outlined" />
                    <TimelineConnector style={{ width: "1.5px" }} />
                  </TimelineSeparator>
                  <TimelineOppositeContent
                    style={{ flex: 0.1 }}
                  ></TimelineOppositeContent>
                  <TimelineContent
                    ml={-6}
                    mt="-11px"
                    style={{ padding: "8px 0 16px 16px" }}
                  >
                    <Typography color="rgba(0, 0, 0, 0.5)" fontSize={12}>
                      20:30 Aug. 23
                    </Typography>
                    <Typography fontSize={14} color="#000">
                      <Link
                        to="/"
                        style={{
                          fontWeight: "400",
                          opacity: 1,
                          color: "black",
                        }}
                      >
                        This is a lorem ipsum message modapaker
                      </Link>
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Paper>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={6.5}>
        <Paper elevation={0} sx={{ marginBottom: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center" padding={1}>
            <Avatar />
            <TextField
              placeholder="What do you want to ask or share?"
              fullWidth
            />
          </Stack>
        </Paper>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={selectedTab}
            onChange={(event, newValue) => {
              setSelectedTab(newValue);
            }}
          >
            <Tab label="For you" sx={{ fontSize: 12, padding: "0px 16px" }} />
            <Tab label="Following" sx={{ fontSize: 12, padding: "0px 16px" }} />
          </Tabs>
        </Box>

        <CommunityPost />
      </Grid>
      <Grid item md={3}>
        <Paper elevation={0}>
          <Typography p="16px 0 0 16px" fontSize={16} fontWeight={500}>
            Trending in PESO-App
          </Typography>

          <List>
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
          </List>
        </Paper>
      </Grid>
    </>
  );
}

export default Community;
