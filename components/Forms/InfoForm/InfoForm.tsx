import React from 'react';
import {Grid, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Input} from "../components/Input";



const InfoForm = () => {
    return (
        <Grid container direction={'column'}>
            <Input
                       label={'Track title'}
            />
            <Input
                label={'Author name'}
            />
            <Input
                label={'Words'}
                multiline
                rows={3}
            />
        </Grid>
    );
};

export default InfoForm;
