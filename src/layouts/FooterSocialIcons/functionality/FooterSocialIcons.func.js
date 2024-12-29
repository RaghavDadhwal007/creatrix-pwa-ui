import { useState } from 'react';

const useFooterSocialIconsHook = () => {
    const [ isHovering, setIsHovered ] = useState(false);
    // use for mouse hover on image
    const onMouseEnter = () => setIsHovered(true);
    // use for mouse leave on image
    const onMouseLeave = () => setIsHovered(false);

    return {
        isHovering,
        onMouseEnter,
        onMouseLeave,
    };
};

export default useFooterSocialIconsHook;
