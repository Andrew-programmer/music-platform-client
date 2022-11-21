import React from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {Box, Card} from "@mui/material";
import styles from '../../styles/tracks/tracks.module.css';
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList/TrackList";

const Index: React.FC = () => {
    const tracks: ITrack[] = [
        {_id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/2e725430-e6d2-419b-9fcb-ac8a462e28c7.m4a', picture: 'http://localhost:5000/image/873a8c9e-f57f-4f7f-b02c-d950c9acdd1a.jpg', comments: []},
        {_id: '2', name: 'Track 2', artist: 'Artist 2', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/2e725430-e6d2-419b-9fcb-ac8a462e28c7.m4a', picture: 'http://localhost:5000/image/873a8c9e-f57f-4f7f-b02c-d950c9acdd1a.jpg', comments: []},
        {_id: '3', name: 'Track 3', artist: 'Artist 3', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/2e725430-e6d2-419b-9fcb-ac8a462e28c7.m4a', picture: 'http://localhost:5000/image/873a8c9e-f57f-4f7f-b02c-d950c9acdd1a.jpg', comments: []},
    ]
    return (
        <MainLayout>
            <h1>
                Best tracks!
            </h1>
            <Card className={styles.Card}>
                <Box p={3} className={styles.Section}>
                    <TrackList tracks={tracks}/>
                </Box>
            </Card>
        </MainLayout>
    );
};

export default Index;
