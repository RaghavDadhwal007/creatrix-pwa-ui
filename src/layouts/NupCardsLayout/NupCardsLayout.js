import NupCard from '@components/Cards/NupCard/NupCard';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import React from 'react';
import styles from './layout/NupCardsLayout.styles.default';

const useStyles = makeStyles(styles);

const NupCardsLayout = ({
    cardData,
}) => {
    const classes = useStyles();
    const { images: { cardImage } } = assets;
    const { isTabletDevice } = useDeviceTypeHook();

    return (
        <Grid
            container
            columnSpacing={isTabletDevice ? 5 : 10}
            className={classes.root}
        >
            {cardData?.items?.map((item) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    key={item}
                    className={classes.cardWrapper}
                >
                    <NupCard
                        title={item?.heading}
                        imagUri={item?.image?.url || cardImage}
                        subheading={item?.subheading}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default NupCardsLayout;
