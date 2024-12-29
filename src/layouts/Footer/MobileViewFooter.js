import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import MobileViewLogoBlock from 'src/layouts/FooterLogoBlock/MobileViewLogoBlock';
import MobileViewMenuItems from 'src/layouts/FooterMenuItems/MobileViewMenuItems';
import MobileViewSubsriber from 'src/layouts/FooterSubscribe/MobileViewSubscriber';
import MobileViewSocialIcons from 'src/layouts/FooterSocialIcons/MobileViewSocialIcons';
import MobileViewFooterBottom from 'src/layouts/FooterBottom/MobileViewFooterBottom';
import styles from './layout/MobileViewFooter.styles.default';
import useFooterHook from './functionality/Footer.func';

const useStyles = makeStyles(styles);

const MobileViewFooter = () => {
    const classes = useStyles();

    const { footer } = useFooterHook();

    return (
        <div className={classes.container}>
            {
                footer?.footer_top && Object?.keys(footer)?.map((innerItem) => {
                    switch (innerItem) {
                        case 'footer_top':
                            return (
                                <div key={footer[ innerItem ]?.uid} className={classes.footerContainer}>
                                    <Grid container className={classes.footerInnerContainer}>
                                        {
                                            footer[ innerItem ]?.map((data) => {
                                                switch (Object.keys(data)[ 0 ]) {
                                                    case 'logo_block':
                                                        return (
                                                            <MobileViewLogoBlock
                                                                data={data}
                                                                key={data.logo_block._metadata.uid}
                                                            />
                                                        );
                                                    case 'menu':
                                                        return (
                                                            <MobileViewMenuItems
                                                                data={data}
                                                                key={data.menu._metadata.uid}
                                                            />
                                                        );
                                                    case 'subscribe_box':
                                                        return (
                                                            <MobileViewSubsriber
                                                                data={data}
                                                                key={data.subscribe_box._metadata.uid}
                                                            />

                                                        );
                                                    case 'social_icon':
                                                        return (
                                                            <MobileViewSocialIcons
                                                                data={data}
                                                                key={data.social_icon._metadata.uid}
                                                            />
                                                        );
                                                    default: return null;
                                                }
                                            })
                                        }
                                    </Grid>
                                </div>
                            );
                        case 'footer_bottom':
                            return footer[ innerItem ]?.map((data) => {
                                switch (Object.keys(data)[ 0 ]) {
                                    case 'copy':
                                        return (
                                            <MobileViewFooterBottom
                                                data={data}
                                                key={data.copy._metadata.uid}
                                            />
                                        );
                                    default:
                                        return null;
                                }
                            });
                        default:
                            return null;
                    }
                })
            }
        </div>
    );
};

export default MobileViewFooter;
