import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import withTokenWrapper from 'hooks/withTokenWrapperHook';
import useSettings from './functionality/Setting.func';
import styles from './layout/settings.default.styles';
import SettingMenu from './SettingMenu';

const useStyles = makeStyles(styles);

const LeftSideBar = () => {
    const classes = useStyles();

    const {
        routes,
        renderSettingItem,
    } = useSettings();
    const {
        isMobile,
    } = useDeviceTypeHook();
    return (
        <>
            {!isMobile ? (
                <Grid className={classes.gridWrapper} container spacing={5}>
                    <Grid className={classes.settingsWrapper} item md={3} sm={4} lg={3}>
                        <SettingMenu routes={routes} />
                    </Grid>
                    <Grid className={classes.gridItemWrapper} item md={9} sm={8} lg={9}>
                        {
                            renderSettingItem()
                        }
                    </Grid>

                </Grid>
            ) : (
                <div className={classes.gridWrapper}>
                    <SettingMenu isMobile={isMobile} routes={routes} />

                    <div className={classes.spaceWrapper}>
                        {
                            renderSettingItem()
                        }
                    </div>

                </div>
            )}
        </>
    );
};

export default withTokenWrapper(LeftSideBar);
