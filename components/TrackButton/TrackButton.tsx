import React from 'react';
import PauseIcon from "@mui/icons-material/Pause";
import styles from "../TrackItem/TrackItem.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";

interface TrackButtonProps {
    active: boolean
}

const TrackButton: React.FC<TrackButtonProps> = ({active}) => {
    return (
        <IconButton>
            {
                active
                    ? <PauseIcon className={styles.Icon}/>
                    :
                    <PlayArrowIcon className={styles.Icon}/>

            }
        </IconButton>
    );
};

export default TrackButton;
