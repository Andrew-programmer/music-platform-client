import React from 'react';
import {useTheme} from "@mui/material/styles";
import {Slider, Typography} from "@mui/material";
import {Box, styled} from "@mui/system";

import styles from './TrackProgress.module.scss';
import TrackTime from "./components/TrackTime";

interface TrackProgressProps {
    left?: number;
    right?: number;
    onChange?: Function;
}


const TrackProgress: React.FC<TrackProgressProps> = ({left, right, onChange}) => {
    const theme = useTheme();
    const duration = 200; // seconds
    const [position, setPosition] = React.useState(32);
    const [paused, setPaused] = React.useState(false);



    return (
        <div>
            <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                className={styles.Slider}
                onChange={(_, value) => setPosition(value as number)}
                sx={{
                    color: 'coral',
                    height: 4,
                    '& .MuiSlider-thumb': {
                        width: 8,
                        height: 8,
                        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                        '&:before': {
                            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                        },
                        '&:hover, &.Mui-focusVisible': {
                            boxShadow: `0px 0px 0px 8px ${
                                theme.palette.mode === 'dark'
                                    ? 'rgb(255 255 255 / 16%)'
                                    : 'rgb(0 0 0 / 16%)'
                            }`,
                        },
                        '&.Mui-active': {
                            width: 20,
                            height: 20,
                        },
                    },
                    '& .MuiSlider-rail': {
                        opacity: 0.28,
                    },
                }}
            />
            <TrackTime duration={duration} position={position}/>
        </div>
    );
};

export default TrackProgress;
