import { useState } from 'react';

const useFooterMenuItemHook = () => {
    const [ expanded, setExpanded ] = useState('panel_0');

    // use for open the accordion on click
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return {
        handleChange,
        expanded,
    };
};
export default useFooterMenuItemHook;
