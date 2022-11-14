import React from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {Box, Card} from "@mui/material";
import styles from '../../styles/tracks/tracks.module.css';
import {ITrack} from "../../types/track";

const Index: React.FC = () => {
    // const tracks: ITrack[] = [
    //     {}
    // ]
    return (
        <MainLayout>
            <h1>
                Best tracks!
            </h1>
            <Card className={styles.Card}>
                    <Box p={3} className={styles.Section}>
                        Tracks
                    </Box>
                </Card>
        </MainLayout>
    );
};

export default Index;
