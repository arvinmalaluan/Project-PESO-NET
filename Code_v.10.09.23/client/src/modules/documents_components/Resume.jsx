import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import NewStepper from "./resume/Stepper";
import Personal from "./resume/personal";
// import WorkRelated from "./work_related";
// import Reference from "./reference";

import jwtDecode from "jwt-decode";
import WorkRelated from "./resume/WorkRelated";
import Reference from "./resume/Reference";
// import { get_resume, upd_crt_resume } from "../../context/GetUserData";

function Resume() {
  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const [step, setStep] = useState(0);
  const [resumeDetails, setResumeDetails] = useState({
    fullname: "",
    phone_number: "",
    email_address: "",
    resume_objective: "",
    education_level: "",
    name_of_institution: "",
    year_graduated: "",
    achievements: "",
    languages: "",
    hobbies_interest: "",
    skill: "",
    proficiency: "",
    reward_name: "",
    year_received: "",
    issuer: "",
    reward_description: "",
    project_name: "",
    published_year: "",
    project_description: "",
    reference_full_name: "",
    relationship_to_you: "",
    institution: "",
    contact_information: "",
    account: user_id,
  });

  // useEffect(() => {
  //   step === 3 &&
  //     upd_crt_resume(resumeDetails)
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //   step === 3 && console.log(resumeDetails);
  // }, [step]);

  // useEffect(() => {
  //   resumeDetails.account &&
  //     get_resume(user_id)
  //       .then((data) => {
  //         setResumeDetails(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  // }, []);

  return (
    <>
      <Stack sx={{ height: "100%" }}>
        <Stack
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            height: "100%",
          }}
        >
          <NewStepper step={step} />

          <Stack
            sx={{
              padding: "16px 16px 32px",
              margin: "24px 16px",
              height: "65%",
              overflowY: "scroll",
            }}
          >
            {step === 0 && (
              <Personal details={resumeDetails} set={setResumeDetails} />
            )}
            {step === 1 && (
              <WorkRelated details={resumeDetails} set={setResumeDetails} />
            )}
            {step === 2 && (
              <Reference details={resumeDetails} set={setResumeDetails} />
            )}
            {step === 3 && (
              <Stack
                width="100%"
                alignItems="center"
                justifyContent="center"
                sx={{ height: "100%" }}
              >
                <Typography fontSize={18} fontWeight={500}>
                  "Thank you for your submission"
                </Typography>
                <Typography fontSize={14} mt={1} fontWeight={500}>
                  Your resume is now being processed. This may take a few
                  moments.
                </Typography>
                <Typography
                  fontSize={12}
                  mt={0.5}
                  color="#333333"
                  textAlign="center"
                >
                  We will notify you via email once your resume is analyzed and{" "}
                  <br />
                  ready for compatibility tests.
                </Typography>
                <Typography fontSize={12} mt={2}>
                  <Link>Go back to your profile</Link>
                </Typography>
              </Stack>
            )}
          </Stack>

          <Stack
            direction="row"
            p="0px 16px"
            justifyContent="end"
            alignItems="center"
            spacing={2}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{ textTransform: "none" }}
              disabled={step === 0}
              onClick={() => {
                setStep(step - 1);
              }}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{ textTransform: "none" }}
              onClick={() => {
                setStep(step + 1);
              }}
              disabled={step === 3}
            >
              {step < 2 ? "Next" : "Finish"}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Resume;
