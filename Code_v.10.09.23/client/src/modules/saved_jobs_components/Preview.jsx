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
import jwtDecode from "jwt-decode";

import { useLocation } from "react-router-dom";
import { createDeleteApplication } from "../../context/CRUD_Operations";

function Preview({ aD }) {
  const { pathname } = useLocation();
  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const handleCancel = () => {
    const data = {
      job: aD.id,
      applicant: user_id,
      key: aD.id.toString() + "-" + user_id.toString(),
    };

    createDeleteApplication(data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

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
              {aD.job_title}
            </Typography>
            <Typography fontSize={14} mb={0.2} color="#333333">
              {aD.name}
            </Typography>
            <Typography fontSize={12} mb={1.5} color="#333333">
              {aD.location}
            </Typography>
            <Divider />

            <Typography fontSize={16} mb={1} mt={2} fontWeight={500}>
              About the role
            </Typography>
            <Typography fontSize={14} color="#333333">
              {aD.job_desc}
            </Typography>

            <Typography fontSize={16} mt={2} fontWeight={500}>
              Required Experience
            </Typography>
            <Typography fontSize={14} color="#333333">
              {aD.req_expi}
            </Typography>

            <Stack direction="row" spacing={1} mt={2} alignItems="end">
              <Typography fontSize={16} fontWeight={500}>
                Job Type :
              </Typography>
              <Typography fontSize={14} color="#333333">
                {aD.emp_type}
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
          <Button
            onClick={handleCancel}
            variant="contained"
            sx={{ textTransform: "none" }}
            disableElevation
            fullWidth
          >
            {pathname !== "/status" ? "Apply" : "Cancel Application"}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Preview;
