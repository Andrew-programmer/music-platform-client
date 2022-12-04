import React from 'react';
import {Box, styled} from "@mui/system";
import {Typography} from "@mui/material";

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

interface TinyTextProps {
    duration: number;
    position: number;
    slash?: boolean;
}

const TrackTime: React.FC<TinyTextProps> = ({duration, position, slash}) => {

    function formatDuration(value: number) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: -2,
            }}
        >
            <TinyText>{formatDuration(position)}</TinyText>
            {
                slash ? <TinyText> / </TinyText>: null
            }
            {
                slash ?
                    <TinyText>{formatDuration(duration)}</TinyText>
                    :
                    <TinyText>-{formatDuration(duration - position)}</TinyText>
            }
        </Box>
    );
};

export default TrackTime;
