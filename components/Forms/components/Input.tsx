import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";

export const Input = styled(TextField)(({theme}) => ({
    margin: '0.5rem',
    '& label.Mui-focused': {
        color: 'coral',
        opacity: '1'
    },
    '& label': {
        color: 'coral',
        opacity: '0.5'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'coral',
    },
    '& .MuiOutlinedInput-root': {
        color: 'white',
        '& fieldset': {
            borderColor: 'coral',
            color: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'coral',
            opacity: '0.7',
            transition: '0.1s'
        },
        '&.Mui-focused fieldset': {
            borderColor: 'coral',
        },
    },
}));
