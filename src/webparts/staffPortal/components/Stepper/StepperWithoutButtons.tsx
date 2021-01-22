import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    customLabelStyle: {
        fontSize: "12px"
      }
  }),
);

function getSteps() {
  return ['Unsatisfactory', 'Conditional', 'Fully Acceptable', 'Superior', 'Outstanding'];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return 'Unsatisfactory';
    case 1:
      return 'Conditional';
    case 2:
      return 'Fully Acceptable';
    case 3:
       return 'Superior';
    case 4:
      return 'Outstanding';
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel classes={{label: classes.customLabelStyle}}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
     </div>
  );
}