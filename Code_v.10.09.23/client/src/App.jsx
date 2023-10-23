import "./App.css";

import { Grid, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

import {
  NewHome,
  NewMessages,
  NewCommunity,
  NewJobs,
  NewSavedJobs,
  NewStatus,
  NewDocuments,
  ManageJobs,
  RecruiterHome,
  ManageApplicants,
  HomeAdmin,
  ManageUsers,
  Reports,
  NewSettings,
} from "./pages";

import SideNavigation from "./modules/common_components/SideNavigation";
import Header from "./modules/common_components/Header";
import { Route, Routes } from "react-router-dom";
import Resume from "./modules/documents_components/Resume";
import TOR from "./modules/documents_components/TOR";
import PSA from "./modules/documents_components/PSA";
import NBI from "./modules/documents_components/NBI";
import AccountSettings from "./modules/settings_components/AccountSettings";
import PersonalDetails from "./modules/settings_components/PersonalDetails";

import Login from "./components/authpage/Login";
import Signup from "./components/authpage/Signup";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
});

function App() {
  const inner_height = window.innerHeight;
  const role = 1;
  const is_authenticated = localStorage.getItem("token");

  const [user_role, setUserRole] = useState("");

  useEffect(() => {
    if (is_authenticated) {
      const decodedToken = jwtDecode(localStorage.getItem("token"));
      setUserRole(decodedToken.user_role);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container height="100%">
          {is_authenticated ? (
            <>
              <Grid
                item
                md={2}
                sx={{
                  height: {
                    sm: "100dvh",
                  },
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                <SideNavigation />
              </Grid>
              <Grid item md={10} sm={12} height="100%" width="100%">
                <Header />
                <Stack
                  sx={{
                    height: `${inner_height - 59}px`,
                    overflowY: "scroll",
                  }}
                >
                  <Routes>
                    {user_role === 1 && (
                      <>
                        <Route path="/" element={<HomeAdmin />} />
                        <Route path="/messages" element={<NewMessages />} />
                        <Route path="/community" element={<NewCommunity />} />
                        <Route path="/users" element={<ManageUsers />} />
                        <Route path="/reports" element={<Reports />} />

                        <Route path="/settings" element={<NewSettings />}>
                          <Route index element={<AccountSettings />} />
                          <Route
                            path="personal"
                            element={<PersonalDetails />}
                          />
                        </Route>
                      </>
                    )}

                    {user_role === 2 && (
                      <>
                        <Route path="/" element={<NewHome />} />
                        <Route path="/messages" element={<NewMessages />} />
                        <Route path="/community" element={<NewCommunity />} />
                        <Route path="/jobs" element={<NewJobs />} />
                        <Route path="/saved-jobs" element={<NewSavedJobs />} />
                        <Route path="/status" element={<NewStatus />} />

                        <Route path="/documents" element={<NewDocuments />}>
                          <Route index element={<Resume />} />
                          <Route path="tor" element={<TOR />} />
                          <Route path="psa" element={<PSA />} />
                          <Route path="nbi" element={<NBI />} />
                        </Route>

                        <Route path="/settings" element={<NewSettings />}>
                          <Route index element={<AccountSettings />} />
                          <Route
                            path="personal"
                            element={<PersonalDetails />}
                          />
                        </Route>
                      </>
                    )}

                    {user_role === 3 && (
                      <>
                        <Route path="/" element={<RecruiterHome />} />
                        <Route path="/messages" element={<NewMessages />} />
                        <Route path="/community" element={<NewCommunity />} />
                        <Route path="/manage-jobs" element={<ManageJobs />} />
                        <Route
                          path="/applicants"
                          element={<ManageApplicants />}
                        />

                        <Route path="/settings" element={<NewSettings />}>
                          <Route index element={<AccountSettings />} />
                          <Route
                            path="personal"
                            element={<PersonalDetails />}
                          />
                        </Route>
                      </>
                    )}
                  </Routes>
                </Stack>
              </Grid>
            </>
          ) : (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Signup />} />
            </Routes>
          )}
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
