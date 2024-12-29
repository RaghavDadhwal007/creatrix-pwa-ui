const { useState } = require('react');

const useDownloadDropdown = () => {
    const [ checkedIndex, setCheckedIndex ] = useState();

    const downloadOptions = [
        {
            id: '1',
            name: '4KMOV(mjpeg) - 263 MB ',
        },
        {
            id: '2',
            name: '4KMOV(mjpeg) - 263 MB ',
        },  {
            id: '3',
            name: '4KMOV(mjpeg) - 263 MB ',
        },
        {
            id: '4',
            name: '4KMOV(mjpeg) - 263 MB ',
        },
    ];

    const handleCheck = (index) => {
        if (index === checkedIndex) {
            setCheckedIndex();
        }
        setCheckedIndex(index);
    };

    return {
        checkedIndex,
        handleCheck,
        downloadOptions,
    };
};

export default useDownloadDropdown;
