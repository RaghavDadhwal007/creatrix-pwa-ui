import IconButton from '@components/IconButton/IconButton';
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import moment from 'moment/moment';
import Image from 'next/image';
import {
    array, func, number, string,
} from 'prop-types';
import useCardTypeIVHook from './functionality/CardTypeIV.func';
import styles from './layout/CardTypeIV.style.default';

const useStyles = makeStyles(styles);

const CardTypeIV = ({
    image, noOfAssets, projectName, projectDate, handleRedirect, projectId,
}) => {
    const classes = useStyles();
    const formatDate = 'DD/MM/YY';
    const createdDate = moment(projectDate).format(formatDate);
    const {
        projectThumbnails, DeleteIcon, handleDelete, videoDefaultThumbnail,
    } = useCardTypeIVHook();

    return (
        <Grid item sm={6} lg={4} xs={12}>
            <Grid className={classes.mainCardWrapper} onClick={handleRedirect} container columnSpacing={1} rowSpacing={1}>
                {projectThumbnails?.map((item) => {
                    const imgLen = projectThumbnails?.length >= 4 ? 6 : 12;
                    return (
                        <Grid key={item} item className={classes.cardWrapper} xs={imgLen} md={imgLen}>
                            <Image
                                alt="image"
                                src={noOfAssets === 0 ? videoDefaultThumbnail : (item || image)}
                                style={{ borderRadius: '12px' }}
                                layout="responsive"
                                width={150}
                                height={125}
                            />
                        </Grid>
                    );
                })}
                <Grid className={classes.bottomWrapper} container alignItems="center" justifyContent="space-between">
                    <Grid>
                        <Typography className={classes.titleWrapper} type="sub-title1">Project Name: {projectName}</Typography>
                        <Typography type="sub-title1">Number of assets: {noOfAssets === 0 ? 0 : noOfAssets}</Typography>
                        <Typography type="sub-title1">Date: {createdDate}</Typography>
                    </Grid>
                    <Grid>
                        <IconButton onClick={(e) => handleDelete(e, projectId)} className={classes.deleteIconButton}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

CardTypeIV.propTypes = {
    image: array.isRequired,
    noOfAssets: number,
    projectName: string,
    projectDate: string,
    handleRedirect: func,
};

CardTypeIV.defaultProps = {
    noOfAssets: 4,
    projectName: 'My Project',
    projectDate: '18/09/2002',
    handleRedirect: () => {},
};

export default CardTypeIV;
