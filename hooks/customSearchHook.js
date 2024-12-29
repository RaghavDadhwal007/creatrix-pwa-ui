import { useState } from 'react';
import routes from '@views/routes';
import CustomNavigationHook from './customNavigationHook';

const useSearchHook = () => {
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const [ inputSearch, setInputSearch ] = useState('');
    const [ searchType, setSearchType ] = useState('footage');

    const handleInputSearch = (e) => {
        setInputSearch(e.target.value);
    };

    const handleSearchType = (e) => {
        setSearchType(e.target.value);
    };

    const handleSearchSubmit = () => {
        if (searchType === 'footage') {
            if (inputSearch) {
                setInputSearch('');
                handleRedirect(routes?.searchResult?.path, { search: inputSearch }, routes?.searchResult?.path);
            }
        }
        if (searchType === 'music') {
            setInputSearch('');
            handleRedirect(routes?.musicSearchResult?.path, { musicSearch: inputSearch }, routes?.musicSearchResult?.path);
        }
    };

    return {
        searchType,
        handleSearchType,
        inputSearch,
        setInputSearch,
        handleInputSearch,
        handleSearchSubmit,
    };
};

const CustomSearchHook =  { useSearchHook };

export default CustomSearchHook;
