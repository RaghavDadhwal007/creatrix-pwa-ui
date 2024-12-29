import { useEffect, useState } from 'react';

const useTextField = ({
    otherProps,
}) => {
    const [ value, setValue ] = useState('');
    const [ isHidden, setIsHidden ] = useState(true);
    const [ typeOfField, setTypeOfField ] = useState(otherProps?.type);

    /*
        intialize first value of the text field
    */
    useEffect(() => {
        const propValue = otherProps.value;
        if (propValue) {
            if (otherProps.type === 'password' && (/\s/g.test(propValue))) return;
            setValue(propValue);
        }
    }, [ otherProps.value, otherProps.type ]);

    /*
        this function check if user toggled the eye icon in the UI
        to make it password field or text field
    */
    useEffect(() => {
        setTypeOfField(otherProps.type === 'password' && isHidden ? 'password' : 'text');
    }, [ isHidden, otherProps.type ]);

    return {
        value,
        setValue,
        isHidden,
        setIsHidden,
        typeOfField,
    };
};

const TextFieldFunc = {
    useTextField,
};

export default TextFieldFunc;
