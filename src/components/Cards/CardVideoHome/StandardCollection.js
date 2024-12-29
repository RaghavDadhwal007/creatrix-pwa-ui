import StandardCarousel from '@components/StandardCarousel/StandardCarousel';
import SubCollection from '@components/SubCollection/SubCollection';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import Link from '../../Link/Link';
import styles from './layout/StandardCollection.style.default';

const useStyles = makeStyles(styles);

const renderBlock = (presentationType, collectionData, classes, isMobile) => {
    switch (presentationType) {
        case 'standard':
            return (
                isMobile ? <StandardCarousel data={collectionData} />
                    : (
                        <Grid container spacing={5} className={classes.mainSliderContainer}>
                            {collectionData?.map((item) => (
                                <Grid item key="1" xs={6} sm={4} md={3} lg={3} className={classes.slider}>
                                    <SubCollection blockItem={item}  />
                                </Grid>
                            ))}
                        </Grid>
                    )
            );
        case 'carousel':
            return (
                <StandardCarousel data={collectionData} />
            );
        default:
            return null;
    }
};

const StandardCollection = ({ data }) => {
    const { isMobile } = useDeviceTypeHook();
    const classes = useStyles();
    return (
        <Grid container className={classes.collectionContainer}>
            <div className={classes.mainHeadingCont}>
                <div className={classes.blockHeading}>
                    {data.title}
                </div>
                <div className={classes.viewAll}>
                    <Link href={data?.link?.href}>
                        {data?.link?.title}
                    </Link>
                </div>
            </div>
            {
                renderBlock(data?.presentation_type, data?.collection_block, classes, isMobile)
            }

        </Grid>
    );
};

export default StandardCollection;
