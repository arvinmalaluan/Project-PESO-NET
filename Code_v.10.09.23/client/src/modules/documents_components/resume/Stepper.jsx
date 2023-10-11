import { Stack, Step, StepLabel, Stepper } from "@mui/material";

const NewStepper = ({ step }) => {
  return (
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
  );
};

export default NewStepper;
