import IconButton from '@components/IconButton/IconButton';
import {
    FormControl, OutlinedInput,
} from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import styles from './layout/CustomS‎earchBar‎.styles.default';

const useStyles = makeStyles(styles);

const CustomSearchBar = ({
    parentClasses, searchIconLeft = false, inputSearch, handleInputSearch, handleSearchSubmit,
    cmsData,
}) => {
    const classes = useStyles();

    return (
        <FormControl className={parentClasses?.container}>
            <OutlinedInput
                className={`${ classes.customSearchBarStyles } ${ parentClasses?.child }`}
                fullWidth
                placeholder={cmsData?.input_place_holder || 'Search...'}
                id="search"
                autoComplete="off"
                value={inputSearch}
                onChange={handleInputSearch}
                endAdornment={!searchIconLeft && (
                    <IconButton onClick={handleSearchSubmit} className={classes.iconButtonStyle} size="large">
                        <SearchIcon />
                    </IconButton>
                )}
                startAdornment={searchIconLeft && (
                    <IconButton className={classes.iconButtonStyle} size="large">
                        <SearchIcon />
                    </IconButton>
                )}
                onKeyPress={(ev) => {
                    if (ev?.key === 'Enter') {
                        ev?.preventDefault();
                        handleSearchSubmit();
                    }
                }}
            />
        </FormControl>
    );
};

export default CustomSearchBar;
