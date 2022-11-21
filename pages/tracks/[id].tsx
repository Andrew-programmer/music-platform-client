import React from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {ITrack} from "../../types/track";
import {useRouter} from "next/router";
import {Box, Card, Grid} from "@mui/material";

import styles from '../../styles/tracks/trackPage.module.scss'

const TrackPage = () => {
    const router = useRouter();

    const track: ITrack = {
        _id: '1',
        name: 'Track 1',
        artist: 'Artist 1',
        text: 'Some text',
        listens: 5,
        audio: 'http://localhost:5000/audio/2e725430-e6d2-419b-9fcb-ac8a462e28c7.m4a',
        picture: 'http://localhost:5000/image/873a8c9e-f57f-4f7f-b02c-d950c9acdd1a.jpg',
        comments: []
    };

    const handleBackClick = () => {
        router.push('/tracks');
    }


    return (
        <MainLayout>
            <Grid container className={styles.Body}>
                <Box className={styles.TrackInfoContainer}>
                    <img src={track.picture} width={350} height={350}/>
                    <Box className={styles.TrackInfoBlock}>
                        <Box>
                            <h1 style={{
                                marginTop: '0',
                            }}>{track.name}</h1>
                            <h2 className={styles.Artist}>{track.artist}</h2>
                        </Box>
                        <div>Listens: {track.listens}</div>
                    </Box>
                </Box>
                <Card className={styles.Card + ' ' + styles.Words}>
                    Words
                </Card>
                <Card className={styles.Card + ' ' + styles.Comments}>
                    Comments
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default TrackPage;
