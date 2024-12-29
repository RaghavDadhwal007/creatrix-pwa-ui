import Button from '@components/Button/Button';
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    Box, FormControl, MenuItem, Select,
} from '@mui/material';
import styles from './layout/MusicSearchResultView.styles.default';

const useStyles = makeStyles(styles);

const MobileViewMusicSearchResult = ({ data, MusicSearchResultViewData }) => {
    const classes = useStyles();

    return (
        <div className={classes.selectWrapper}>
            <Button type="primary-btn">Clear filters</Button>
            {data?.map((item) => (
                <>
                    <Box>
                        <FormControl fullWidth>
                            <Select
                                type="outlined"
                                key={item}
                                value={item}
                                className={classes.searchTypeWrapper}
                                IconComponent={KeyboardArrowDownIcon}
                            >
                                { MusicSearchResultViewData?.filter[ item ].map((iteminner) => (
                                    <MenuItem key={iteminner?.id}>{iteminner?.title}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </Box>
                </>
            ))}
        </div>

    );
};

export default MobileViewMusicSearchResult;
