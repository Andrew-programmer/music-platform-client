import React from 'react';
import {Box} from "@mui/system";
import {VolumeDownRounded, VolumeUpRounded} from "@mui/icons-material";
import styles from "./VolumeValue.module.scss";

const VolumeValue = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: -2,
            }}
        >
            <VolumeDownRounded htmlColor={'white'}  className={styles.VolumeIcon}/>
            <VolumeUpRounded htmlColor={'white'} className={styles.VolumeIcon}/>
        </Box>
    );
};

export default VolumeValue;
