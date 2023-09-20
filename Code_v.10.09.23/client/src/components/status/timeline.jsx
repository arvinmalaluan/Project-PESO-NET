import { Typography } from "@mui/material";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

function TimeLineTemp() {
  return (
    <>
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
          mb={2}
          style={{ padding: "8px 0 16px 16px" }}
        >
          <Typography fontSize={12} mb={0.5}>
            Feb. 26, 2023
          </Typography>
          <Typography fontSize={16} fontWeight={500}>
            Job application compatibility was determined.
          </Typography>
          <Typography fontSize={12} mt={0.5} color="primary">
            Check Compatibility
          </Typography>
        </TimelineContent>
        <TimelineOppositeContent
          style={{ flex: 0.1 }}
        ></TimelineOppositeContent>
      </TimelineItem>
    </>
  );
}

export default TimeLineTemp;
