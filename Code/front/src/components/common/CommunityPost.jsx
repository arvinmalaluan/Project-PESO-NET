import { ArrowRight, Close, MoreHoriz } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

function CommunityPost({ fromProfile }) {
  return (
    <>
      <Card sx={{ marginTop: 2 }}>
        <CardHeader
          avatar={<Avatar />}
          title={<Typography>Arvin Malaluan</Typography>}
          subheader="8h ago + public icon"
          action={
            <>
              <IconButton>
                <MoreHoriz />
              </IconButton>
              <IconButton>
                <Close />
              </IconButton>
            </>
          }
        />
        <CardContent>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            laudantium tempora incidunt porro nihil at dolore corporis voluptate
            veritatis non molestias sint, quisquam veniam voluptatum repellendus
            inventore ipsum laboriosam esse.
          </Typography>
        </CardContent>

        {"hello" === "hello" ? (
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
            alt="Paella dish"
            sx={{
              maxHeight: "320px",
            }}
          />
        ) : null}

        <CardActions>
          <Stack direction="row" spacing={2}>
            <ToggleButtonGroup value={null} onChange={null}>
              <ToggleButton value="tggl-up">Upvote</ToggleButton>
              <ToggleButton value="tggl-down">Down</ToggleButton>
            </ToggleButtonGroup>
            {/* probably better to use button group for upvote and downvote */}
            <Button variant="contained" disableElevation>
              Comment
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </>
  );
}

export default CommunityPost;
