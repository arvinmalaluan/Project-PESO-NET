import { Typography } from "@mui/material";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

import { Link } from "react-router-dom";

function Timeline_Item() {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot style={{ margin: 0 }} variant="outlined" />
        <TimelineConnector style={{ width: "1.5px" }} />
      </TimelineSeparator>
      <TimelineOppositeContent style={{ flex: 0.1 }}></TimelineOppositeContent>
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
  );
}

export default Timeline_Item;
