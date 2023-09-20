import "./App.css";
import Login from "./components/authpage/Login";
import { Grid } from "@mui/material";

import { Routes, Route } from "react-router-dom";
import Signup from "./components/authpage/Signup";
import Home from "./components/home/Home";
import TopNav from "./components/common/top_nav";
import Jobs from "./components/jobs/Jobs";
import DetailsTemp from "./components/jobs/job_details";
import Community from "./components/community/Community";
import Message from "./components/messenger/Message";
import Notifications from "./components/notifications/Notifications";
import Profile from "./components/profile/Profile";
import Resume from "./components/resume/Resume";
import Saved from "./components/saved/Saved";
import Status from "./components/status/Status";
import PrivateRoutes from "./utils/route_guard";

function App() {
  return (
    <>
      {Boolean(localStorage.getItem("authTokens")) && <TopNav />}
      <Grid container spacing={5} sx={{ padding: "0 100px" }}>
        <Routes>
          {Boolean(localStorage.getItem("authTokens")) ? (
            <Route path="" element={<Home />} />
          ) : (
            <Route path="" element={<Login />} />
          )}
          <Route path="register" element={<Signup />} />
          <Route path="*" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="jobs" element={<Jobs />}>
              <Route path=":job_id" element={<DetailsTemp />} />
            </Route>
            <Route path="community" element={<Community />} />
            <Route path="messages" element={<Message />}>
              <Route path=":message_id" element={null} />
            </Route>
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<Profile />} />
            <Route path="resume" element={<Resume />} />
            <Route path="saved" element={<Saved />} />
            <Route path="status" element={<Status />} />
          </Route>
        </Routes>
      </Grid>
    </>
  );
}

export default App;
