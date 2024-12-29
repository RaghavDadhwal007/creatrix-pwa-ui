import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { useTheme } from '@mui/styles';

const RadioboxCheck = ({ index, checkedIndex, handleCheck }) => {
    const theme = useTheme();

    return (
        <CircleIcon
            onClick={() => handleCheck(index)}
            fontSize="small"
            style={{ color: checkedIndex === index ? theme.palette.green : theme.palette.disableColor }}
        />
    );
};

export default RadioboxCheck;
