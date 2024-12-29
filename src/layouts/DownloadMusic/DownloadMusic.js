import Typography from '@components/Typography/Typography';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import InnerModal from '../InnerModal/InnerModal';
import styles from './layout/DownloadMusic.styles.default';

const useStyles = makeStyles(styles);

const DownloadMusic = () => {
    const classes = useStyles();

    return (
        <InnerModal buttonTitle="Upgrade now">
            <Typography className={classes.textWrappper}>Choose format:</Typography>
            <RadioGroup
                className={classes.optionsWrapper}
            >
                {[ 1, 2 ].map((data) => (
                    <>
                        <FormControlLabel
                            key={data}
                            control={(
                                <Radio
                                    checkedIcon={<CircleIcon className={classes.optionWrapper} />}
                                    icon={<CircleOutlinedIcon className={classes.optionWrapper} />}
                                    size="small"
                                />
                            )}
                            label="MP3/4KMOV(mjpeg) - 263 MB"
                        />
                    </>
                ))}
            </RadioGroup>
            <Typography className={classes.textWrappper}>You have 3 downloads remaining</Typography>
        </InnerModal>
    );
};

export default DownloadMusic;
