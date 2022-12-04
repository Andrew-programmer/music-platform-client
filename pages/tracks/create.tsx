import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import StepWrapper from "../../components/StepWrapper/StepWrapper";
import StepperNav from "../../components/StepperNav/StepperNav";
import styles from '../../styles/create/create.module.scss';
import InfoForm from "../../components/Forms/InfoForm/InfoForm";
import FileUpload from "../../components/Forms/FileUpload/FileUpload";
import {Button} from "@mui/material";
import LoadField from "../../components/Forms/FileUpload/components/LoadField";
import {useInput} from "../../hooks/useInput";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null)
    const limit = 2;

    const name = useInput('');
    const artist = useInput('');
    const text = useInput('');


    const checkStep = (higher?: boolean) => {
        if (higher) {
            return activeStep >= 1;
        } else {
            console.log(activeStep);
            return activeStep < limit;
        }
    }

    const renderForm = (step: number) => {
        if (step === 0) {
            return <InfoForm inputs={{name, artist, text}}/>
        } else if (step === 1) {
            return <FileUpload setFile={setPicture} accept={'image/*'}>
                <LoadField>
                    Choose image
                </LoadField>
            </FileUpload>
        } else if(step === 2){
            return <FileUpload setFile={setAudio} accept={'audio/*'}>
                <LoadField>
                    Choose audio
                </LoadField>
            </FileUpload>
        }
    }

    return (
        <MainLayout externalClasses={styles.MainContainer}>
            <StepWrapper activeStep={activeStep} setStep={setActiveStep}>
                {renderForm(activeStep)}
            </StepWrapper>
            <StepperNav setStep={setActiveStep} checkStep={checkStep} inputs={{name, artist, text, audio, picture}}/>
        </MainLayout>
    );
};

export default Create;
