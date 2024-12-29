import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import FooterLogoBlock from 'src/layouts/FooterLogoBlock/FooterLogoBlock';
import FooterMenuItems from 'src/layouts/FooterMenuItems/FooterMenuItems';
import FooterSubsriber from 'src/layouts/FooterSubscribe/FooterSubscribe';
import FooterBottom from 'src/layouts/FooterBottom/FooterBottom';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import styles from './layout/Footer.styles.default';
import useFooterHook from './functionality/Footer.func';
import MobileViewFooter from './MobileViewFooter';

const useStyles = makeStyles(styles);

const Footer = () => {
    const classes = useStyles();

    const { currentViewport } = useDeviceTypeHook();
    const { footer } = useFooterHook();

    if (currentViewport === 'mobile') {
        return (
            <MobileViewFooter />
        );
    }

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
                                                            <FooterLogoBlock
                                                                data={data}
                                                                key={data.logo_block._metadata.uid}
                                                            />
                                                        );
                                                    case 'menu':
                                                        return (
                                                            <FooterMenuItems
                                                                data={data}
                                                                key={data.menu._metadata.uid}
                                                            />
                                                        );
                                                    case 'subscribe_box':
                                                        if (footer[ innerItem ].filter((icons) => icons?.social_icon)) {
                                                            return (
                                                                <FooterSubsriber
                                                                    data={data}
                                                                    icons={footer[ innerItem ].filter((icons) => icons?.social_icon)}
                                                                    key={data.subscribe_box._metadata.uid}
                                                                />

                                                            );
                                                        }
                                                        return (
                                                            <FooterSubsriber
                                                                data={data}
                                                                key={data.subscribe_box._metadata.uid}
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
                                            <FooterBottom
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

export default Footer;
