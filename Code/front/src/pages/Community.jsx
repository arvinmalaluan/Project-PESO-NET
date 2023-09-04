import {
  Box,
  Grid,
  List,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import SideNavigation from "./../layout/SideNavigation";
import { Timeline } from "@mui/lab";

import { useState } from "react";
import CommunityPost from "../components/common/CommunityPost";
import Timeline_Item from "../components/community/Timeline_Item";
import QuestionInput from "../components/community/QuestionInput";
import TrendingItem from "../components/community/TrendingItem";

function Community() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Grid item md={3}>
        <Stack spacing={2}>
          <Stack>
            <Paper elevation={0}>
              <SideNavigation type="queries" />
            </Paper>
          </Stack>
          <Stack>
            <Paper elevation={0} style={{ padding: "16px 8px 8px" }}>
              <Typography fontSize={16} fontWeight={500} mb={1} pl={2}>
                Most recent posts
              </Typography>
              <Timeline>
                <Timeline_Item date={null} content={null} />
              </Timeline>
            </Paper>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={6}>
        <Paper elevation={0} sx={{ marginBottom: 2 }}>
          <QuestionInput />
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
            <TrendingItem name={null} count={null} />
          </List>
        </Paper>
      </Grid>
    </>
  );
}

export default Community;
