import { Step, StepLabel, Stepper } from "@mui/material";

function ResumeStepper({ activeStep }) {
  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep}>
        <Step>
          <StepLabel>Personal Information and Background</StepLabel>
        </Step>
        <Step>
          <StepLabel>Career-related Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>References</StepLabel>
        </Step>
      </Stepper>
    </>
  );
}

export default ResumeStepper;
