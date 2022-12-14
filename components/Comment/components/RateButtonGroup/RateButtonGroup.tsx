import {ButtonGroup, IconButton} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {useState} from "react";

export const RateButtonGroup = () => {
    const [isPositive, setIsPositive] = useState(null);

    const handleClick = (isPositive: boolean) => {
        setIsPositive(isPositive);
    }

    return (
        <ButtonGroup variant={"text"}>
            <IconButton onClick={() => setIsPositive(true)}>
                <ThumbUpIcon sx={{
                    color: isPositive && true ? '#00cb00' : 'whitesmoke',
                    '&:hover': {
                        color: '#00cb00',
                        transition: '0.1s ease'
                    }
                }}/>
            </IconButton>
            <IconButton onClick={() => setIsPositive(false)}>
                <ThumbDownIcon sx={{
                    color: !isPositive && isPositive !== null ? '#ff2424' : 'whitesmoke',
                    '&:hover': {
                        color: '#ff2424',
                        transition: '0.1s ease'
                    }
                }}/>
            </IconButton>
        </ButtonGroup>
    );
}
