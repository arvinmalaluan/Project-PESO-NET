import {
  ArrowDownward,
  ArrowUpward,
  Close,
  MoreHoriz,
  Public,
} from "@mui/icons-material";

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
import { useState } from "react";

function CommunityPost({ fromProfile }) {
  const [selectedInteraction, setSelectedInteraction] = useState("");

  const handleInteractionChange = (event, newValue) => {
    setSelectedInteraction(newValue);
  };

  return (
    <>
      <Card sx={{ marginTop: 2 }}>
        <CardHeader
          avatar={
            <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" />
          }
          title={
            <Typography fontSize={16} fontWeight={500}>
              Arvin Malaluan
            </Typography>
          }
          subheader={
            <Stack direction="row" spacing={1}>
              <Typography fontSize={12}>8hrs. ago</Typography>
              <Public sx={{ height: 16, width: 16 }} />
            </Stack>
          }
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
          sx={{
            paddingBottom: 1,
          }}
        />
        <CardContent sx={{ paddingTop: 1 }}>
          <Typography fontSize={14} color="#333333">
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
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            width="100%"
            sx={{ padding: "4px 8px" }}
          >
            <ToggleButtonGroup
              value={selectedInteraction}
              onChange={handleInteractionChange}
              exclusive
              size="small"
            >
              <ToggleButton value="tggl-up" color="success">
                Upvote
                <ArrowUpward sx={{ marginLeft: 0.5, height: 16, widdth: 16 }} />
              </ToggleButton>
              <ToggleButton value="tggl-down" color="error">
                <ArrowDownward />
              </ToggleButton>
            </ToggleButtonGroup>

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
