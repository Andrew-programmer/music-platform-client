import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import React from "react";


interface RateProps {
    isPositive?: boolean;
}

export const Rate: React.FC<RateProps> = ({isPositive = true}) => {
    return (
        isPositive ?
            <ThumbUpIcon sx={{ color: '#00cb00' }}/>
            :
            <ThumbDownIcon sx={{ color: '#ff2424' }}/>
    );
}
