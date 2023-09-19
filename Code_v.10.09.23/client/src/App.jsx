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

function App() {
  return (
    <>
      <TopNav />
      <Grid container spacing={5} sx={{ padding: "0 100px" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route path="home" element={<Home />} />
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
        </Routes>
      </Grid>
    </>
  );
}

export default App;
