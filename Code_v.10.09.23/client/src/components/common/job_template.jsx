import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Stack,
  Chip,
  Button,
  CardActions,
  Checkbox,
} from "@mui/material";

import { NavLink } from "react-router-dom";

function JobTemp(props) {
  const uid = "/jobs/" + props.id;

  return (
    <>
      <Card elevation={0} sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}>
        <CardHeader
          avatar={
            <Avatar
              src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"
              sx={{ height: 40, width: 40 }}
            />
          }
          title={
            <Typography fontWeight={500} fontSize={16}>
              {props.job_title}
            </Typography>
          }
          subheader={
            <Stack direction="row" spacing={1}>
              <Typography color="#333333" fontSize={12}>
                {props.comp_name}
              </Typography>

              <Typography color="#333333" fontSize={12} fontWeight={500}>
                {"???"} applied for this
              </Typography>
            </Stack>
          }
          action={
            <>
              <Checkbox />
            </>
          }
          sx={{ paddingBottom: 1 }}
        />

        <CardContent sx={{ height: 210 }}>
          <Stack direction="row" spacing={2} mb={2}>
            <Chip
              sx={{ borderRadius: "5px", bgcolor: "#f7e7f3" }}
              label={<Typography fontSize={12}>{props.emp_type}</Typography>}
            />
            <Chip
              sx={{ borderRadius: "5px", bgcolor: "#f7e7ea" }}
              label={<Typography fontSize={12}>{props.req_expi}</Typography>}
            />
            <Chip
              sx={{ borderRadius: "5px", bgcolor: "#f3f7e7" }}
              label={<Typography fontSize={12}>{props.req_educ}</Typography>}
            />
          </Stack>
          <Typography fontSize={16} fontWeight={500} mb={0.5}>
            About the job
          </Typography>
          <Typography fontSize={12} color="#3333333">
            {props.job_desc.substring(0, 200) + " ..."}
          </Typography>

          <Typography fontSize={16} fontWeight={500} mt={2} mb={0.5}>
            Location
          </Typography>
          <Typography fontSize={12}>{props.location}</Typography>
        </CardContent>

        <CardActions
          sx={{
            borderTop: "1px solid rgba(0, 0, 0, 0.12)",
            padding: "8px 16px",
          }}
        >
          <Stack direction="row" alignItems="center" width="100%">
            <Stack direction="row" flexGrow={1} spacing={1}>
              <Typography fontSize={12}>Posted {props.created} ago.</Typography>
            </Stack>
            <Button sx={{ textTransform: "none" }}>
              <NavLink
                to={uid}
                style={{ color: "#000", textDecoration: "none", fontSize: 12 }}
              >
                More details
              </NavLink>
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </>
  );
}

export default JobTemp;
