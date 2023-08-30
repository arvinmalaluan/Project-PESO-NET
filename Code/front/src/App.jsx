import "./assets/index.css";
import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { Home, Jobs, Community } from "./pages";
import Navigation from "./layout/Navigation";
import JobDetails from "./components/common/JobDetails";

function App() {
  return (
    <>
      <Navigation />
      <Grid container sx={{ padding: "0 50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="jobs" element={<Jobs />}>
            <Route path=":jobId" element={<JobDetails />} />
          </Route>
          <Route path="community" element={<Community />} />
        </Routes>
      </Grid>
    </>
  );
}

export default App;
