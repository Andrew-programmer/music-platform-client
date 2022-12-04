import React from 'react';
import {Slider} from "@mui/material";
import {useTheme} from "@mui/material/styles";

import styles from './Volume.module.scss';
import VolumeValue from "./component/VolumeValue";
import {useTypeSelector} from "../../../../hooks/useTypeSelector";

interface VolumeProps {
    setVolume: Function;
}

const Volume: React.FC<VolumeProps> = ({setVolume}) => {
    const theme = useTheme();
    const {volume} = useTypeSelector(state => state.player);


    return (
        <div className={styles.Main}>
            <Slider
                aria-label="Volume"
                value={volume}
                onChange={setVolume}
                valueLabelDisplay="on"
                sx={{
                    height: 4,
                    color: 'coral',
                    '& .MuiSlider-valueLabel': {
                        fontSize: 12,
                        fontWeight: 'normal',
                        top: 0,
                        backgroundColor: 'unset',
                        color: 'white',
                        transition: '0.2s',
                        '& *': {
                            background: 'transparent',
                            color: 'white',
                        },
                    },
                    '& .MuiSlider-thumb': {
                        width: 10,
                        height: 10,
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
            <VolumeValue/>
        </div>

    );
};

export default Volume;
