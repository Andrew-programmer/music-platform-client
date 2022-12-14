import {Box} from "@mui/system";

import styles from './Comment.module.scss';
import {Divider, IconButton} from "@mui/material";
import {Rate} from "./components/Rate/Rate";
import React from "react";
import {Input} from "../Forms/components/Input";
import {RateButtonGroup} from "./components/RateButtonGroup/RateButtonGroup";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

interface CommentProps {
    isNew?: boolean;
}

export const Comment: React.FC<CommentProps> = ({isNew = false}) => {

    return (
        <Box className={styles.MainContainer}>
            <Box className={styles.Box}>
                {
                    isNew ?
                        <Input sx={{
                            width: '100%'
                        }} placeholder={'Login'}/>
                        :
                        <span>Andrii</span>
                }
                {
                    isNew ?
                        <RateButtonGroup/>
                        :
                        <Rate isPositive={false}/>
                }
            </Box>
            <Divider className={styles.Divider} flexItem variant={"middle"}>private opinion</Divider>
            <Box className={styles.Box}>
                {
                    isNew ?
                        <Box sx={{
                            width: '100%'
                        }}>
                            <Input sx={{
                                width: '100%'
                            }} multiline maxRows={5} placeholder={'Comment text'}/>
                            <Box className={styles.AskField}>
                                <IconButton color={'error'}>
                                    <ClearIcon/>
                                </IconButton>
                                <IconButton color={'success'}>
                                    <CheckIcon/>
                                </IconButton>
                            </Box>
                        </Box>

                        :
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam facere iusto perspiciatis quis recusandae vitae voluptas! Eaque laboriosam officiis pariatur!</span>
                }
            </Box>
        </Box>
    );
}
