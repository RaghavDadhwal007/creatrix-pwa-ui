const { useState, useMemo } = require('react');

const useUploadFileHook = (handleUploadFile = () => {}) => {
    const initObj = useMemo(() => ({
        fileUrl: null,
        fileBufferUrl: null,
        fileName: '',
        fileExtension: '',
    }), []);

    const [ fileObj, setFileObj ] = useState({
        ...initObj,
    });

    const handleSetFile = (e) => {
        function getFile(filePath) {
            return filePath.substr(filePath.lastIndexOf('\\') + 1).split('.')[ 0 ];
        }

        e.preventDefault();
        const file = e.target.files[ 0 ];

        if (file && file.size < 1024000) {
            const urlObj = URL.createObjectURL(file);
            const reader = new window.FileReader();
            const fileName = getFile(file.name);
            const extension = file.name?.split('.')[ 1 ];
            reader.readAsArrayBuffer(file);

            if (handleUploadFile) handleUploadFile(file);

            reader.onloadend = () => {
                setFileObj({
                    ...fileObj,
                    fileName,
                    extension,
                    fileUrl: urlObj,
                    fileBufferUrl: Buffer.from(reader.result),
                });
            };
        }
    };

    const handleClearFile = () => {
        setFileObj(initObj);
    };

    return {
        handleSetFile,
        handleClearFile,
        fileObj,
    };
};

export default useUploadFileHook;
