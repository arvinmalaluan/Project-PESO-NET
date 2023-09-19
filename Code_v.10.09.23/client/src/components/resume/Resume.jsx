import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import StepTemp from "./stepper";
import { useState } from "react";
import Personal from "./personal";
import WorkRelated from "./work_related";
import Reference from "./reference";

function Resume() {
  const [step, setStep] = useState(0);

  return (
    <>
      <Grid item md={5}>
        <Stack
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            height: "83vh",
            padding: 2,
          }}
        >
          <Typography fontSize={18} fontWeight={500}>
            Resume Preview
          </Typography>
        </Stack>
      </Grid>
      <Grid item md={7}>
        <Stack
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            height: "83vh",
            padding: 2,
          }}
        >
          <StepTemp step={step} />

          <Stack
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.12)",
              padding: "0 16px 32px",
              margin: "24px 16px",
              height: "70%",
              overflowY: "scroll",
            }}
          >
            {step === 0 && <Personal />}
            {step === 1 && <WorkRelated />}
            {step === 2 && <Reference />}
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

          <Stack direction="row" p="0px 16px" justifyContent="end" spacing={2}>
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
      </Grid>
    </>
  );
}

export default Resume;
