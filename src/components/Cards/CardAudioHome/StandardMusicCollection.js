import MusicSubCollection from '@components/MusicSubCollection/MusicSubCollection';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import Link from '../../Link/Link';
import styles from './layout/StandardMusicCollection.styles.default';

const useStyles = makeStyles(styles);

const renderBlock = (presentationType, music_block, classes, isMobile) => {
    switch (presentationType) {
        case 'grid':
            return (
                isMobile ? (
                    <MusicSubCollection blockItem={music_block}  />
                )
                    : (
                        <Grid className={classes.mainSliderContainer}>
                            <MusicSubCollection blockItem={music_block}  />
                        </Grid>
                    )
            );
        default:
            return null;
    }
};

const StandardMusicCollection = ({ data }) => {
    const { isMobile } = useDeviceTypeHook();
    const classes = useStyles();

    const viewAllLink = data?.reference[ 0 ]?.more_link;
    return (
        <Grid container className={classes.collectionContainer}>
            <div className={classes.mainHeadingCont}>
                <div className={classes.blockHeading}>
                    {data?.title}
                </div>
                <div className={classes.viewAll}>
                    <Link href={viewAllLink.href}>
                        {viewAllLink?.title}
                    </Link>
                </div>
            </div>
            {
                renderBlock(data?.reference[ 0 ]?.presentation_type, data?.reference[ 0 ]?.music_block, classes, isMobile)
            }

        </Grid>
    );
};

export default StandardMusicCollection;
