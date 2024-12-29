import CustomMenu from '@components/CustomMenu/CustomMenu';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Button from '@components/Button/Button';
import RadioboxCheck from '@components/RadioboxCheck/RadioboxCheck';
import styles from './layout/DownloadDropdown.styles.default';
import useDownloadDropdown from './functionality/DownloadDropdown.func';

const useStyles = makeStyles(styles);

const DownloadDropdown = ({
    downloadMenuAnchor,
    isDownloadDropdownOpen,
    handleDownloadDropdownClose,
}) => {
    const classes = useStyles();

    const { checkedIndex, handleCheck, downloadOptions } = useDownloadDropdown();

    return (
        <CustomMenu anchorEl={downloadMenuAnchor} open={isDownloadDropdownOpen} handleClose={handleDownloadDropdownClose}>
            <Typography type="sub-title7">Choose format:</Typography>
            <div className={classes.subWrapper}>
                {downloadOptions.map((item, index) => (
                    <div key={item?.id} className={classes.checkItem}>
                        <RadioboxCheck
                            index={index}
                            checkedIndex={checkedIndex}
                            handleCheck={handleCheck}
                        />
                        <Typography className={classes.downloadItemText}>{item?.name} </Typography>
                    </div>
                ))}
            </div>
            <div className={classes.menuBtnWrapper}>
                <Button className={classes.menuBtn}>Download</Button>
            </div>
        </CustomMenu>
    );
};

export default DownloadDropdown;
