import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import ResumeStepper from "../components/resume/ResumeStepper";
import { useState } from "react";

function Resume() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      {/* <Stack width="100%" ml={2}>
        <Stack direction="row" justifyContent="end" spacing={2} mt={2}>
          <Button variant="outlined" color="warning">
            Cancel and discard changes
          </Button>
          <Button variant="contained" color="success">
            Save
          </Button>
        </Stack>
        <Stack>
          <Typography variant="h6">Contact Information</Typography>
          <TextField placeholder="Full name" size="small" />
          <TextField placeholder="Phone number" size="small" />
          <TextField placeholder="Email Address" size="small" />
          <TextField placeholder="Resume Objective" size="small" />
        </Stack>

        <Stack>
          <Typography variant="h6">Professional Experience</Typography>
          <TextField placeholder="Job Title" size="small" />
          <TextField placeholder="Company / Organization Name" size="small" />
          <TextField placeholder="Dates of employment" size="small" />
          <TextField placeholder="Location" size="small" />
          <TextField placeholder="Job Description" size="small" />
        </Stack>

        <Stack>
          <Typography variant="h6">Education</Typography>
          <TextField placeholder="Education level" size="small" />
          <TextField placeholder="Name of Institution" size="small" />
          <TextField placeholder="Year graduated" size="small" />
          <TextField placeholder="Achievements" size="small" />
        </Stack>

        <Stack>
          <Typography variant="h6">Skills</Typography>
          <TextField
            placeholder="Enumerate soft and technical skills"
            size="small"
          />
        </Stack>

        <Stack>
          <Typography variant="h6">Achievements and Awards</Typography>
          <TextField
            placeholder="Enumerate achievements and awards"
            size="small"
          />
        </Stack>

        <Stack>
          <Typography variant="h6">Projects</Typography>
          <TextField placeholder="Enumerate projects" size="small" />
        </Stack>

        <Stack>
          <Typography variant="h6">Languages</Typography>
          <TextField placeholder="Enumerate languages" size="small" />
        </Stack>

        <Stack>
          <Typography variant="h6">Hobbies and Interests</Typography>
          <TextField
            placeholder="Enumerate hobbies and interests"
            size="small"
          />
        </Stack>

        <Stack>
          <Typography variant="h6">References</Typography>
          <TextField placeholder="Enumerate references" size="small" />
        </Stack>
      </Stack> */}

      <Grid item md={12}>
        <Stack bgcolor="#fff" pt={2}>
          <ResumeStepper activeStep={activeStep} />
        </Stack>

        <Stack
          pt={4}
          pb={2}
          direction="row"
          bgcolor="#fff"
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            disabled={activeStep === 0}
            disableElevation
            onClick={() => {
              setActiveStep(activeStep - 1);
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
              setActiveStep(activeStep + 1);
            }}
          >
            {activeStep === 2 ? "Finish" : "Next"}
          </Button>
        </Stack>
      </Grid>
    </>
  );
}

export default Resume;
