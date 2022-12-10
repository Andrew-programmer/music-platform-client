import {ButtonGroup, IconButton} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export const RateButtonGroup = () => {
    return (
        <ButtonGroup variant={"text"}>
            <IconButton>
                <ThumbUpIcon/>
            </IconButton>
            <IconButton>
                <ThumbDownIcon/>
            </IconButton>
        </ButtonGroup>
    );
}
