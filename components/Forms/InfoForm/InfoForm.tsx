import React from 'react';
import {Grid, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Input} from "../components/Input";
import {useInput} from "../../../hooks/useInput";
import {InputState} from "../../../types/inputState";

interface InfoFormProps {
    inputs: { name: InputState, artist: InputState, text: InputState };
}

const InfoForm: React.FC<InfoFormProps> = ({inputs}) => {


    return (
        <Grid container direction={'column'}>
            <Input
                {...inputs.name}
                label={'Track title'}
            />
            <Input
                {...inputs.artist}
                label={'Author name'}
            />
            <Input
                {...inputs.text}
                label={'Words'}
                multiline
                rows={3}
            />
        </Grid>
    );
};

export default InfoForm;
