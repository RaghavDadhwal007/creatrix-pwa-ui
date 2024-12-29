import { useEffect, useState } from 'react';

const usePositionHook = () => {
    const [ scrollPosition, setPosition ] = useState({ scrollX: 0, scrollY: 0 });

    function updatePosition() {
        setPosition((prev) => ({ ...prev,  scrollX: window.scrollX, scrollY: window.scrollY }));
    }
    useEffect(() => {
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [  window.scrollX, window.scrollY ]);

    return scrollPosition;
};

export default usePositionHook;
