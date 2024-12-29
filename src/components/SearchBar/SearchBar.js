import { Grid, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import { func, string } from 'prop-types';
import React from 'react';
import styles from './layout/SearchBar.style.default';

const useStyles = makeStyles(styles);

const SearchBar = ({
    placeholder,
    type,
    handleSubmit,
    className,
    onChange,
}) => {
    const classes = useStyles();
    const { icons: { SearchIcon } } = assets;
    return (
        <Grid container className={`${ classes.searchBarWrapper } ${ className } ${ type }`} alignItems="center">
            <Grid item xs={11}>
                <TextField
                    id="search_bar"
                    variant="standard"
                    hiddenLabel
                    placeholder={placeholder}
                    fullWidth
                    InputProps={{ classes: { input: classes.textField }, disableUnderline: true }}
                    onChange={onChange}
                />
            </Grid>
            <Grid item xs={1} textAlign={type === 'faq-page' ? 'end' : ''}>
                <SearchIcon onClick={handleSubmit} className={classes.searchIcon} />
            </Grid>
        </Grid>
    );
};

/*
    search bar in faq and download history page
    type: download-page || faq-page
*/
SearchBar.propTypes = {
    placeholder: string.isRequired,
    type: string.isRequired,
    handleSubmit: func,
    onChange: func,
};

SearchBar.defaultProps = {
    handleSubmit: () => {},
    onChange: () => {},
};

export default SearchBar;
