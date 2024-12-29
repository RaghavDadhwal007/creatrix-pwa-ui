import NavSlider from '@components/NavSlider/NavSlider';
import SearchBar from '@components/SearchBar/SearchBar';
import Typography from '@components/Typography/Typography';
import {
    Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import assets from 'assets';
import React, { useState } from 'react';
import styles from './layout/DownloadHistory.style.default';
import downloadedData from './mock.json';

const useStyles  = makeStyles(styles);

const DownloadHistoryView = () => {
    const classes = useStyles();
    const theme = useTheme();
    const { icons: { DownloadIcon, FilterIcon } } = assets;
    const [ selectedOption, setSelectedOption ] = useState('option-1');

    const navOptions = [
        {
            id: 1,
            name: 'All',
        },
        {
            id: 2,
            name: 'Footage',
        },
        {
            id: 3,
            name: 'Music',
        },
    ];

    const keyName = () => {
        if (selectedOption === 'option-1') {
            return 'All';
        }
        if (selectedOption === 'option-2') {
            return 'Footage';
        }
        if (selectedOption === 'option-3') {
            return 'Music';
        }
        return 'All';
    };
    const downloadsArray = downloadedData[ `${ keyName() }` ];

    return (
        <Grid container className={classes.root} columnSpacing={7}>
            <Grid item xs={12} className={classes.spaceWrapper}>
                <Grid container className={classes.spaceBlock}>
                    <Grid item sm={5} lg={8}>
                        <Typography type="heading-2">Download History</Typography>
                    </Grid>
                    <Grid className={classes.searchWrapper} item sm={7} lg={4}>
                        <SearchBar
                            placeholder="Search History"
                            type="download-page"
                            className={classes.SearchBar}
                        />
                    </Grid>
                </Grid>
                <div className={classes.navContainer}>
                    <NavSlider
                        options={navOptions}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                </div>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={`${ classes.tableHead } heading`}>Media</TableCell>
                                <TableCell align="center" className={classes.tableHead}>
                                    <div className={classes.tableHeadIcon}>
                                        Date
                                        <span className={classes.filterIcon}>
                                            <FilterIcon />
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell align="center" className={classes.tableHead}>Type</TableCell>
                                <TableCell align="center" className={classes.tableHead}>Download</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {downloadsArray?.map((item) => (
                                <TableRow
                                    key={item?.id}
                                    sx={{ 'td, th': { borderBottomColor: theme.palette.darkGrey } }}
                                >
                                    <TableCell className={`${ classes.tableCell } heading`}>{item?.media}</TableCell>
                                    <TableCell align="center" className={classes.tableCell}>{item?.date}</TableCell>
                                    <TableCell align="center" className={classes.tableCell}>{item?.type}</TableCell>
                                    <TableCell align="center" className={classes.tableCell}> <DownloadIcon /> </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};

export default DownloadHistoryView;
