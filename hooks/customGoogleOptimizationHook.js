const { useEffect, useState } = require('react');

const useOptimizeExperiment = (experimentId) => {
    const [ variant, setVariant ] = useState();
    const initWindowDataLayer = () => {
        if (typeof window !== 'undefined') {
            if (window.dataLayer) {
                window.dataLayer.push({ event: 'optimize.activate' });
            }
            const intervalId = setInterval(() => {
                if (window.google_optimize !== undefined) {
                    const variantLoaded = window.google_optimize.get(experimentId);
                    setVariant(variantLoaded);
                    clearInterval(intervalId);
                }
            }, 100);
        }
    };
    useEffect(() => {
        initWindowDataLayer();
    }, []);
    return variant;
};
export default useOptimizeExperiment;
