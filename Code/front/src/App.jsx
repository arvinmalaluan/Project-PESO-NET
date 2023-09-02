import "./assets/index.css";
import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { Home, Jobs, Community } from "./pages";
import Navigation from "./layout/Navigation";
import JobDetails from "./components/common/JobDetails";
import Profile from "./pages/Profile";
import Resume from "./pages/Resume";
import Saved from "./pages/Saved";

function App() {
  return (
    <>
      <Navigation />
      <Grid container sx={{ padding: "0 50px" }} spacing={2}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="jobs" element={<Jobs />}>
            <Route path=":jobId" element={<JobDetails />} />
          </Route>
          <Route path="community" element={<Community />} />
          <Route path="profile" element={<Profile />} />
          <Route path="resume" element={<Resume />} />
          <Route path="saved" element={<Saved />} />
        </Routes>
      </Grid>
    </>
  );
}

export default App;
