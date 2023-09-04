import { Card, Grid, CardHeader, Typography, Link } from "@mui/material";

import CompLogin from "./../components/authpage/Login";
import Register from "./../components/authpage/Register";
import { useState } from "react";

function Login() {
  const [activePage, setActivePage] = useState(true);
  return (
    <Grid container height="100vh">
      <Grid
        item
        md={6}
        sx={{
          background: "rgb(201,228,248))",
          background:
            "linear-gradient(0deg, rgba(201,228,248,1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        Hello
      </Grid>
      <Grid item md={6} bgcolor="#fff">
        <Card sx={{ height: "100%", padding: "48px" }}>
          <CardHeader
            sx={{ padding: 0 }}
            title={
              <Typography fontSize={20} fontWeight={500}>
                PESO-Lipa
              </Typography>
            }
            action={
              <Typography
                fontSize={13}
                mt={1}
                color="#333333"
                sx={{ userSelect: "none" }}
              >
                {activePage
                  ? "Not yet a member? "
                  : "Already have an account? "}
                <Link
                  onClick={() => setActivePage(!activePage)}
                  style={{
                    color: "#1877f2",
                    opacity: 1,
                    fontWeight: "500",
                    marginLeft: "4px",
                    cursor: "pointer",
                  }}
                >
                  {activePage ? "Join" : "Log in"}
                </Link>
              </Typography>
            }
          />
          {activePage ? <CompLogin /> : <Register />}
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login;
