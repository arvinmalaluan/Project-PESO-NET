import "./assets/index.css";
import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { Home, Jobs, Community } from "./pages";
import Navigation from "./layout/Navigation";
import JobDetails from "./components/common/JobDetails";
import Profile from "./pages/Profile";
import Resume from "./pages/Resume";
import Saved from "./pages/Saved";
import ApplicationStatus from "./pages/ApplicationStatus";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return !isLoggedIn ? (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  ) : (
    <>
      <Navigation />
      <Grid container sx={{ padding: "0 100px" }} spacing={3}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="jobs" element={<Jobs />}>
            <Route path=":jobId" element={<JobDetails />} />
          </Route>
          <Route path="community" element={<Community />} />
          <Route path="profile" element={<Profile />} />
          <Route path="resume" element={<Resume />} />
          <Route path="saved" element={<Saved />} />
          <Route path="status" element={<ApplicationStatus />} />
          <Route path="settings" element={<Settings />} />
          <Route path="messages" element={<Messages />}>
            <Route path=":uid" />
          </Route>
          <Route path="notifications" element={<Notifications />}>
            <Route path=":uid" />
          </Route>
        </Routes>
      </Grid>{" "}
    </>
  );
}

export default App;
