import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    Box, FormControl, MenuItem, Select,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './layout/SelectDropdown.style.default';

const useStyles = makeStyles(styles);

const SelectDropdown = ({ items, type = 'default' }) => {
    const classes = useStyles();

    return (
        <Box>
            <FormControl fullWidth>
                <Select
                    value={items}
                    className={`${ classes.searchTypeWrapper } ${ type }`}
                    IconComponent={KeyboardArrowDownIcon}
                >
                    <MenuItem value="Footage">Footage</MenuItem>
                    <MenuItem value="Music">Music</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectDropdown;
