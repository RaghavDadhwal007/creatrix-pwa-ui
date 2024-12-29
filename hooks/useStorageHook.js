const noFunc = () => {};
const useStorageHook = () => {
    if (typeof window === 'undefined') {
        return {
            setItems: noFunc,
            getItems: noFunc,
            removeItem: noFunc,
        };
    }

    const storage = localStorage;

    const setItems = (key, data) => {
        let setItemData = '';
        if (typeof data === 'object') {
            setItemData = JSON.stringify(data);
        } else setItemData = data;

        storage.setItem(key, setItemData);
    };

    const getItems = (key) => storage.getItem(key);

    const removeItem = (key) => {
        storage.removeItem(key);
    };

    return {
        setItems,
        getItems,
        removeItem,
    };
};

export const storageKeys = {
    _user: 'user',
};

export default useStorageHook;
