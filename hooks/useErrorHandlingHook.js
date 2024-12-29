import { useState } from 'react';

const useErrorHandlingHook = () => {
    const [ error, setError ] = useState('');

    const handleInputFocus = () => {
        if (error) {
            setError('');
        }
    };

    return {
        error,
        setError,
        handleInputFocus,
    };
};

const CustomErrorHandlingHook =  { useErrorHandlingHook };

export default CustomErrorHandlingHook;
