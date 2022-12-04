import React, {useState} from 'react';
import {Grid, IconButton} from "@mui/material";
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import styles from './StepperNav.module.scss'
import {InputState} from "../../types/inputState";
import axios from "axios";
import {API, TRACK} from "../../serverInfo";
import {useRouter} from "next/router";

interface StepperNavProps {
    setStep: (a: any) => void;
    checkStep: (higher?: boolean) => boolean;
    inputs: {
        name: InputState,
        artist: InputState,
        text: InputState,
        audio: any,
        picture: any
    };
}

const StepperNav: React.FC<StepperNavProps> = ({setStep, checkStep, inputs}) => {
    const router = useRouter();

    const next = () => {
        debugger
        if(checkStep()){
            setStep((prevState: number) => prevState + 1);
        } else {
            const formData = new FormData();
            formData.append('name', inputs.name.value);
            formData.append('artist', inputs.artist.value);
            formData.append('text', inputs.text.value);
            formData.append('audio', inputs.audio);
            formData.append('picture', inputs.picture);

            axios.post(API + TRACK, formData)
                .then(res => router.push('/tracks'))
                .catch(e => console.log(e));
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
