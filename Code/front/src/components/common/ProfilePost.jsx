import { ArrowRight, MoreHoriz } from "@mui/icons-material";
import {
  Avatar,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function ProfilePost() {
  return (
    <>
      <Card elevation={0} sx={{ padding: "4px 16px 8px" }}>
        <Stack width="100%" direction="row" alignItems="center">
          <ArrowRight />
          <Typography flexGrow={1}>
            Posted in{" "}
            <Link>
              <b>Community</b>
            </Link>
          </Typography>

          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Stack>
        <Divider />
        <Stack
          mt={2}
          direction="row"
          width="100%"
          alignItems="start"
          spacing={2}
        >
          <Avatar
            variant="rounded"
            src="https://images.unsplash.com/photo-1618042164219-62c820f10723?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            style={{
              height: 80,
              width: 80,
            }}
          />
          <Stack spacing={2}>
            <Typography color="#333333">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              quaerat sint culpa saepe, sunt perferendis. Est, doloremque, fuga
              minus beatae non a sed tempore numquam temporibus fugit iusto ut
              ratione?
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="end">
              <Typography>2.3k upvotes</Typography>
              <Typography>2k comments</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

export default ProfilePost;
