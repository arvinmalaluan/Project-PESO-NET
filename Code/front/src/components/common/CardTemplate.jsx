// TODO: Create an if else for a smaller version for the saved page

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Stack,
  Chip,
  Button,
  CardActions,
} from "@mui/material";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import { LocationOnOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function CardTemplate({ uniqueId }) {
  const uid = "/jobs/" + uniqueId;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar variant="rounded" />}
        title="LOOKING FOR SENIOR DATA ANALYST"
        subheader="Google - 148 applied for this"
        action={
          <>
            <IconButton>
              <BookmarkIcon />
            </IconButton>
          </>
        }
      />

      <CardContent>
        <Stack direction="row" spacing={2}>
          <Chip label="Failed" />
          <Chip label="Successfully" />
          <Chip label="No comment" />
        </Stack>
        <Typography>This is a dummy text</Typography>
      </CardContent>

      <CardActions>
        <Stack direction="row" alignItems="center" width="100%">
          <Stack direction="row" flexGrow={1}>
            <LocationOnOutlined />
            <Typography>San Isidro, Batangas City, Batangas</Typography>
          </Stack>
          <Button>
            <NavLink to={uid}>More Details</NavLink>
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default CardTemplate;
