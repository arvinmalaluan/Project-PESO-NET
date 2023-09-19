import { Stack, Step, StepLabel, Stepper } from "@mui/material";

function StepTemp({ step }) {
  return (
    <>
      <Stack mt={2}>
        <Stepper alternativeLabel activeStep={step}>
          <Step>
            <StepLabel>Personal</StepLabel>
          </Step>
          <Step>
            <StepLabel>Work Related</StepLabel>
          </Step>
          <Step>
            <StepLabel>Reference</StepLabel>
          </Step>
        </Stepper>
      </Stack>
    </>
  );
}

export default StepTemp;
