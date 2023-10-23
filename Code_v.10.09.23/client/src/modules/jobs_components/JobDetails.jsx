import { Button, Divider, Stack, Typography } from "@mui/material";
import { format_date } from "../../utils/format_date";
import { createDeleteApplication } from "../../context/CRUD_Operations";

import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

const JobDetails = ({ details }) => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));
  const [isApplied, setIsApplied] = useState(false);

  const CommonSetup = ({ title, content }) => {
    return (
      <Stack mb={1}>
        <Typography fontSize={14} fontWeight={700} color="#64748b">
          {title}
        </Typography>
        <Typography fontSize={16} fontWeight={500}>
          {content ? content : "( not set )"}
        </Typography>
      </Stack>
    );
  };

  const handleApplication = () => {
    const data = {
      job: details.id,
      applicant: user_id,
      key: details.id.toString() + "-" + user_id.toString(),
    };

    createDeleteApplication(data)
      .then((data) => {
        if (data.status == 201) {
          setIsApplied(true);
        } else {
          setIsApplied(false);
        }
      })
      .catch((error) => console.log(error));
  };

  const check_if_applied = () => {
    const if_applied = details.applicants;

    for (const items of if_applied) {
      const custom_key = items.custom_key.split("-");

      if (custom_key[1] == user_id) {
        setIsApplied(true);
      }
    }
  };

  useEffect(() => {
    setIsApplied(false);
    check_if_applied();
  }, []);

  useEffect(() => {
    setIsApplied(false);
    check_if_applied();
  }, [details]);

  return (
    <Stack
      mb={5}
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "5px",
      }}
    >
      <Typography
        sx={{ paddingInline: 2, paddingBlock: 2, bgcolor: "whitesmoke" }}
        fontWeight={600}
      >
        Job Information
      </Typography>

      <Stack p={2}>
        <CommonSetup title={"Job Title"} content={details.job_title} />
        <CommonSetup title={"Employment Type"} content={details.emp_type} />
        <CommonSetup title={"Status"} content={details.status} />
        <CommonSetup title={"Created"} content={format_date(details.created)} />

        <CommonSetup title={"Job Description"} content={details.job_desc} />
        <CommonSetup title={"Job Location"} content={details.location} />
        <CommonSetup title={"Salary"} content={details.salary} />

        <Typography mt={2}>Application Details</Typography>
        <CommonSetup title={"Due date"} content={details.app_duedate} />
        <CommonSetup title={"Contact us at"} content={details.contact_info} />
        <CommonSetup title={"Required Experience"} content={details.req_expi} />
        <CommonSetup title={"Required Education"} content={details.req_educ} />

        <Typography mt={2}>Candidate Requirements</Typography>
        <CommonSetup title={"Skills"} content={details.skills} />
        <CommonSetup
          title={"Qualifications"}
          content={details.qualifications}
        />
        <CommonSetup
          title={"Responsibilities"}
          content={details.responsibilities}
        />
        <CommonSetup title={"Benefits"} content={details.benefits} />
      </Stack>

      <Stack
        direction="row"
        mt={5}
        spacing={1}
        sx={{ paddingInline: 2, paddingBottom: 2 }}
      >
        <Button
          disableElevation
          variant="outlined"
          sx={{ textTransform: "none", borderRadius: "5px" }}
        >
          Close
        </Button>
        <Button
          onClick={handleApplication}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: "5px",
            bgcolor: "#4f46e5",
          }}
        >
          {isApplied ? "Cancel Application" : "Apply"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default JobDetails;
