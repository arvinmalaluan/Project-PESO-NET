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
  Checkbox,
  Divider,
} from "@mui/material";

import { useLocation } from "react-router-dom";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { LocationOnOutlined } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

function CardTemplate({ uniqueId }) {
  const jobdes =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, blanditiis harum. Minus, in illum. Impedit quidem voluptatibus iste quod eaque quo ipsa, debitis maxime eum, mollitia eos cupiditate fugit harum!";
  const uid = "/jobs/" + uniqueId;
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"
            sx={{ height: 48, width: 48 }}
          />
        }
        title={
          <Typography fontWeight={500} fontSize={18}>
            Data Scientist
          </Typography>
        }
        subheader={
          <Stack direction="row" spacing={1}>
            <Typography color="#333333" fontSize={14}>
              Google, Inc.
            </Typography>
            <span>●</span>
            <Typography color="#333333" fontSize={14}>
              148 applied for this
            </Typography>
          </Stack>
        }
        action={
          <>
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          </>
        }
        sx={{ paddingBottom: 1 }}
      />

      <CardContent sx={{ height: 210 }}>
        <Stack direction="row" spacing={2} mb={2}>
          <Chip
            sx={{ borderRadius: "5px", fontSize: 14 }}
            label={<Typography fontSize={14}>Weirdo</Typography>}
          />
          <Chip
            sx={{ borderRadius: "5px", fontSize: 14 }}
            label={<Typography fontSize={14}>Successfully</Typography>}
          />
          <Chip
            sx={{ borderRadius: "5px", fontSize: 14 }}
            label={<Typography fontSize={14}>No comment</Typography>}
          />
        </Stack>
        <Typography fontSize={16} fontWeight={500} mb={1}>
          About the job
        </Typography>
        <Typography fontSize={14} color="#3333333">
          {jobdes.substring(0, 200) + " ..."}
        </Typography>
      </CardContent>

      <CardActions sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}>
        <Stack direction="row" alignItems="center" width="100%">
          <Stack direction="row" flexGrow={1} spacing={1}>
            <LocationOnOutlined
              sx={{ height: 20, width: 20, color: "#333333" }}
            />
            <Typography fontSize={14} color="#3333333">
              San Isidro, Batangas City, Batangas
            </Typography>
          </Stack>
          <Button>
            <NavLink to={uid}>More details</NavLink>
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default CardTemplate;
