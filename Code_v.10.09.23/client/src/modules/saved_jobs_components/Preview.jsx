import {
  Card,
  Typography,
  CardHeader,
  CardContent,
  Divider,
  Stack,
  CardActions,
  Button,
} from "@mui/material";

import { useLocation } from "react-router-dom";

function Preview() {
  const { pathname } = useLocation();

  return (
    <>
      <Card
        elevation={0}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Stack>
          <CardHeader
            title={<Typography fontSize={16}>Preview</Typography>}
            sx={{ padding: "20px 20px 16px" }}
          />
          <CardContent sx={{ paddingTop: 0 }}>
            <Typography fontSize={18} mb={0.2} fontWeight={500}>
              UI/UX Designer
            </Typography>
            <Typography fontSize={14} mb={0.2} color="#333333">
              Google, Inc.
            </Typography>
            <Typography fontSize={12} mb={1.5} color="#333333">
              Simlong, Batangas City, Batangas
            </Typography>
            <Divider />

            <Typography fontSize={16} mb={1} mt={2} fontWeight={500}>
              About the role
            </Typography>
            <Typography fontSize={14} color="#333333">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              repudiandae animi exercitationem dolorem, ex unde accusamus totam
              nobis amet. Laborum cumque nulla amet numquam aperiam ratione nam
              est harum beatae!
            </Typography>

            <Typography fontSize={16} mt={2} fontWeight={500}>
              Required Experience
            </Typography>
            <Typography fontSize={14} color="#333333">
              2 years of experience with IT related field
            </Typography>

            <Stack direction="row" spacing={1} mt={2} alignItems="end">
              <Typography fontSize={16} fontWeight={500}>
                Job Type :
              </Typography>
              <Typography fontSize={14} color="#333333">
                Full time
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} mt={2} alignItems="end">
              <Typography fontSize={16} mb={1} fontWeight={500}>
                Job Location :
              </Typography>
              <Typography fontSize={14} color="#333333">
                Onsite
              </Typography>
            </Stack>
          </CardContent>
        </Stack>
        <CardActions sx={{ padding: "0 16px 8px" }}>
          <Button variant="outlined" fullWidth sx={{ textTransform: "none" }}>
            Details
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            disableElevation
            fullWidth
          >
            {pathname !== "/status" ? "Apply" : "Cancel"}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Preview;
