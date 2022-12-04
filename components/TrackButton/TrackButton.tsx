import React, {useEffect} from 'react';
import PauseIcon from "@mui/icons-material/Pause";
import styles from "../TrackItem/TrackItem.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActions} from "../../hooks/useActions";
import {ITrack} from "../../types/track";

interface TrackButtonProps {
    play?: Function;
    track: ITrack;
}

const TrackButton: React.FC<TrackButtonProps> = ({play, track}) => {
    const {
        active,
        pause
    } = useTypeSelector(state => state.player)

    const funcWrapper = (...args: any[]) => {
        if(play){
            play(...args);
        } else {
            return;
        }
    }

    return (
        <IconButton onClick={() => funcWrapper(pause)}>
            {
                ((active === track) && !pause)
                    ? <PauseIcon className={styles.Icon}/>
                    :
                    <PlayArrowIcon className={styles.Icon}/>

            }
        </IconButton>
    );
};

export default TrackButton;
