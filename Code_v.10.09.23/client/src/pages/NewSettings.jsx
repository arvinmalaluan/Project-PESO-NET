import { Chip, Grid, MenuItem, Stack, Typography } from "@mui/material";

import { Outlet, useNavigate } from "react-router-dom";

const NewSettings = () => {
  return (
    <Grid container height="100%">
      <Grid
        item
        md={4}
        sx={{ paddingInline: 4, paddingTop: 2, bgcolor: "#fff" }}
      >
        <Typography fontSize={18} mb={1}>
          Account Centre
        </Typography>

        <Typography fontSize={14} mb={3} fontWeight={400}>
          Manage your profile and preferences for a tailored experience on our
          platform.
        </Typography>

        <CustomMenuItem
          id="1"
          title="Account Settings"
          subtitle="Fine-tune your account details."
          path="account"
        />

        <CustomMenuItem
          id="2"
          title="Personal Details"
          subtitle="Share a bit about yourself."
          path="personal"
        />
      </Grid>
      <Grid
        item
        md={8}
        sx={{ height: "100%", overflowY: "scroll", padding: "16px 32px 0" }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default NewSettings;

const CustomMenuItem = ({ id, title, subtitle, path }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`${path}`);
  };

  return (
    <MenuItem sx={{ marginBottom: 2 }} onClick={() => handleNavigate(path)}>
      <Stack spacing={2} direction="row" alignItems="center">
        <Chip label={id} sx={{ height: 40, width: 40 }} />
        <Stack>
          <Typography>{title}</Typography>
          <Typography fontWeight={300} fontSize={12}>
            {subtitle}
          </Typography>
        </Stack>
      </Stack>
    </MenuItem>
  );
};
