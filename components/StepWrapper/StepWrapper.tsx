import React from 'react';
import {Box, Card, Container, Grid, Step, StepLabel, Stepper} from "@mui/material";
import styles from './StepWrapper.module.scss';

interface StepWrapperProps {
    activeStep: number;
    setStep: (a: any) => void;
    children: React.ReactNode;
}

const steps = ['Info', 'Picture', 'Audio'];

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children, setStep}) => {
    return (
        <Container className={styles.MainBody}>
            <Stepper activeStep={activeStep} sx={{
                '&': {
                    '.MuiSvgIcon-root.MuiStepIcon-root.Mui-active, .MuiSvgIcon-root.MuiStepIcon-root.Mui-completed': {
                        color: 'coral'
                    },
                    '.MuiStepLabel-label.Mui-active, .MuiStepLabel-label.Mui-completed': {
                        color: 'white'
                    },
                    '.MuiStepLabel-label': {
                        color: '#ffffff33'
                    }
                }
            }}>
                {
                    steps.map((step, index) =>
                        <Step
                            key={index}
                            completed={activeStep > index}
                            onClick={() => setStep(index)}
                        >
                            <StepLabel className={styles.Step}>
                                {step}
                            </StepLabel>
                        </Step>
                    )
                }
            </Stepper>
            <Card className={styles.Wrapper}>
                {children}
            </Card>
        </Container>
    );
};

export default StepWrapper;
