import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { func, string } from 'prop-types';
import assets from 'assets';
import IconButton from '@components/IconButton/IconButton';
import Image from 'next/image';
import moment from 'moment';
import styles from './layout/CardTypeII.style.default';
import useCardTypeIIHook from './functionality/CardTypeII.func';

const useStyles = makeStyles(styles);

const CardTypeII = ({
    projectName,
    noOfAssets,
    date,
    imageUrl = '',
    handleCardClick,
    projectId,
}) => {
    const classes = useStyles();
    const { icons: { DeleteIcon }, images: { homePageAudioPlaceHolders, videoDefaultThumbnail } } = assets;

    const formatDate = 'DD/MM/YY';
    const createdDate = moment(date).format(formatDate);

    const { handleDelete } = useCardTypeIIHook();

    return (
        <Grid
            item
            sm={6}
            md={6}
            lg={4}
            xl={3}
            className={classes.mainCardWrapper}
            padding={2}
            onClick={handleCardClick}
        >
            <Grid
                container
                className={classes.cardBannerWrapper}
            >
                <Image
                    src={noOfAssets === 0 ? videoDefaultThumbnail :  (imageUrl || homePageAudioPlaceHolders[ 3 ])}
                    alt="Project Image"
                    layout="fill"
                    objectFit="cover"
                    height={263}
                    style={{ borderRadius: '8px' }}
                />
                <div className={classes.opacityBackground}>
                    <Typography type="heading" className={classes.projectNameText}>{projectName}</Typography>
                </div>
            </Grid>
            <Grid
                container
                className={classes.labelWrapper}
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Typography className={classes.label}>{`Number of Assets: ${ noOfAssets }`}</Typography>
                    <Typography className={classes.label}>{`Date: ${ createdDate }`}</Typography>
                </Grid>
                <Grid item>
                    <IconButton onClick={(e) => handleDelete(e, projectId)} className={classes.deleteIconButton}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
};

CardTypeII.propTypes = {
    projectName: string.isRequired,
    noOfAssets: string.isRequired,
    date: string.isRequired,
    imageUrl: string,
    handleCardClick: func,
};

CardTypeII.defaultProps = {
    imageUrl: '',
    handleCardClick: () => {},
};

export default CardTypeII;
