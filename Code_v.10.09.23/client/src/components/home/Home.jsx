import { Grid, Typography } from "@mui/material";
import SideNav from "../common/side_nav";
import JobTemp from "../common/job_template";
import { useEffect, useState } from "react";

import axios from "axios";

function Home() {
  const [jobData, setJobData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8001/jobrecru/jobpost"
        );
        setJobData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Grid item md={3}>
        <SideNav type="home" />
      </Grid>
      <Grid item md={9}>
        <Typography fontWeight={500} mb={1}>
          Top picks for you
        </Typography>
        <Grid container spacing={3}>
          {jobData ? (
            jobData.map((item) => {
              return (
                <Grid item md={6} sm={12} key={item.id}>
                  <JobTemp
                    id={item.id}
                    job_title={item.job_title}
                    comp_name={item.recruiter_profile.comp_name}
                    emp_type={item.emp_type}
                    req_expi={item.req_expi}
                    req_educ={item.req_educ}
                    job_desc={item.job_desc}
                    location={item.recruiter_profile.location}
                    created={item.created}
                  />
                </Grid>
              );
            })
          ) : (
            <p>ludeng ...</p>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
