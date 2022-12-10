import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {ITrack} from "../../types/track";
import {useRouter} from "next/router";
import {Box, Card, Grid, IconButton} from "@mui/material";

import styles from '../../styles/tracks/trackPage.module.scss'
import {GetServerSideProps} from "next";
import {API, TRACK} from "../../serverInfo";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import {Comment} from "../../components/Comment/Comment";

interface TrackPageProps {
    serverTrack: ITrack;
}

const TrackPage: React.FC<TrackPageProps> = ({serverTrack}) => {
    const [track, setTrack] = useState();
    const router = useRouter();

    const handleBackClick = () => {
        router.push('/tracks');
    }


    return (
        <MainLayout>
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
                        <IconButton>
                            <AddIcon className={styles.Icon}/>
                        </IconButton>
                    </Box>
                    <Box>
                        <Comment/>
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
