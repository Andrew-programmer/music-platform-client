import React, {useEffect} from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {Alert, Box, Card, Collapse} from "@mui/material";
import styles from '../../styles/tracks/tracks.module.css';
import TrackList from "../../components/TrackList/TrackList";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTracks} from "../../store/actions-creators/track";
import {useActions} from "../../hooks/useActions";
import {useDispatch} from "react-redux";

const Index: React.FC = () => {
    const [open] = React.useState(true);
    const {tracks, error} = useTypeSelector(state => state.track);
    const oldDispatch = useDispatch();

    useEffect(() => {
        const dispatch = oldDispatch as NextThunkDispatch;
        fetch(dispatch);
    }, [])

    const fetch = async (disp: any) => {
        await disp(await fetchTracks())
    }

    if (error) {
        return (
            <Collapse in={open}>
                <Alert severity="error">
                    {error}
                </Alert>
            </Collapse>
        );
    }

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
