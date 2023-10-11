import { Outlet, useNavigate } from "react-router-dom";
import { default_data } from "./../../templates/templates";

import { Chip, Grid, Stack, Typography } from "@mui/material";

const NewDocuments = () => {
  const { required_docs_application } = default_data;

  return (
    <Grid container sx={{ height: "100%", bgcolor: "#fff" }}>
      <Grid item md={4} sx={{ height: "100%", padding: "16px 16px 16px 32px" }}>
        <Stack>
          <Typography fontSize={18}>Important notice.</Typography>
          <Typography fontSize={14} fontWeight={300}>
            Please submit the following documents and use the app's resume
            generator.
          </Typography>

          {required_docs_application.map((item) => {
            return (
              <Template
                key={item.id}
                number={item.id}
                name={item.name}
                action={item.action}
                path={item.path}
              />
            );
          })}
        </Stack>
      </Grid>

      <Grid item md={8} sx={{ height: "100%", padding: "16px 32px" }}>
        {/* <p>Message about the benefits of completing your profile.</p> */}

        <Outlet />
      </Grid>
    </Grid>
  );
};

export default NewDocuments;

const Template = ({ number, name, action, path }) => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2} mt={3}>
      <Chip
        label={number}
        sx={{
          bgcolor: "transparent",
          height: 40,
          width: 40,
          border: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      />
      <Stack>
        <Typography fontWeight={400}>{name}</Typography>
        <Typography
          fontWeight={300}
          fontSize={12}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "red",
              textDecoration: "underline",
            },
          }}
          onClick={() => {
            navigate(`${path}`);
          }}
        >
          {action}
        </Typography>
      </Stack>
    </Stack>
  );
};
