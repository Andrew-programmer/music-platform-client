import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {ITrack} from "../../types/track";
import {Alert, Box, Card, Grid, IconButton, Slide} from "@mui/material";

import styles from '../../styles/tracks/trackPage.module.scss'
import {GetServerSideProps} from "next";
import {API, TRACK} from "../../serverInfo";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import {Comment} from "../../components/Comment/Comment";
import ClearIcon from "@mui/icons-material/Clear";

interface TrackPageProps {
    serverTrack: ITrack;
}

function CloseIcon(props: { fontSize: string }) {
    return null;
}

const TrackPage: React.FC<TrackPageProps> = ({serverTrack}) => {
    const [track, setTrack] = useState();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState([]);

    const [open, setOpen] = useState(false);


    const handleAddCommentsClick = () => {
        if(newComment.length === 0){
            setNewComment(prevState => [...prevState, <Comment isNew={true}/>])
        } else {
            setOpen(true);
        }
    }


    return (
        <MainLayout>
            <Slide direction='down' in={open} className={styles.Alert}>
                <Alert severity="warning"
                       action={
                           <IconButton
                               aria-label="close"
                               sx={{
                                   color: 'coral'
                               }}
                               size={'small'}
                               onClick={() => {
                                   setOpen(false);
                               }}
                           >
                               <ClearIcon fontSize={'1rem'}/>
                           </IconButton>
                       }>
                    You can't add more than 1 comment in one time. End this first.
                </Alert>
            </Slide>
            <Grid container className={styles.Body}>
                <Box className={styles.TrackInfoContainer}>
                    <img src={API + '/' + serverTrack.picture} width={350} height={350}/>
                    <Box className={styles.TrackInfoBlock}>
                        <Box>
                            <h1 style={{
                                marginTop: '0',
                            }}>{serverTrack.name}</h1>
                            <h2 className={styles.Artist}>{serverTrack.artist}</h2>
                        </Box>
                        <div>Listens: {serverTrack.listens}</div>
                    </Box>
                </Box>
                <Card className={styles.Card + ' ' + styles.Words}>
                    {serverTrack.text}
                </Card>
                <Card className={styles.Card + ' ' + styles.Comments}>
                    <Box className={styles.AddIconContainer}>
                        {
                            comments.length > 0 ?
                                <span>Total comments: {comments.length}</span>
                                :
                                null
                        }
                        <IconButton onClick={() => handleAddCommentsClick()}>
                            <AddIcon className={styles.Icon}/>
                        </IconButton>
                    </Box>
                    <Box className={(comments.length === 0 && newComment.length === 0) ? styles.NoCommentsText: ''}>
                        {
                            (comments.length === 0 && newComment.length === 0) ?
                                <span>No comments yet</span>
                                :
                                newComment
                        }
                    </Box>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get(API + TRACK + '/' + params?.id);
    return {
        props: {
            serverTrack: response.data
        }
    }
}
