import React, {useState} from 'react';
import {Grid, IconButton} from "@mui/material";
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import styles from './StepperNav.module.scss'

interface StepperNavProps {
    setStep: (a: any) => void;
    checkStep: (higher?: boolean) => boolean;
}

const StepperNav: React.FC<StepperNavProps> = ({setStep, checkStep}) => {

    const next = () => {
        if(checkStep()){
            setStep((prevState: number) => prevState + 1);
        }
    }

    const prev = () => {
        if(checkStep(true)){
            setStep((prevState: number) => prevState - 1);
        }
    }

    return (
        <Grid className={styles.Main}>
            <IconButton onClick={prev}>
                <UndoIcon className={styles.Icon}/>
            </IconButton>
            <IconButton onClick={next}>
                <RedoIcon className={styles.Icon}/>
            </IconButton>
        </Grid>
    );
};

export default StepperNav;
