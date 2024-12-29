import React from 'react';

const useDropDownMenuHook = () => {
    const [ anchorEl, setAnchorEl ] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return {
        open, anchorEl, handleClick, handleClose,
    };
};

export default useDropDownMenuHook;
