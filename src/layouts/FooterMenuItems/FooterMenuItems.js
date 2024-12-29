import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Typography from '@components/Typography/Typography';
import Link from '@components/Link/Link';
import styles from './layout/FooterMenuItems.styles.default';

const useStyles = makeStyles(styles);

const FooterMenuItems = ({ data }) => {
    const classes = useStyles();
    return (
        <>
            {data?.menu?.reference?.[ 0 ]?.menu_blocks?.map((menu) => (
                <Grid item xs={2} key={menu.menu_groups._metadata.uid}>
                    <Link prefetch={false} href="/[dynamicUrl]" as={menu.menu_groups.heading_link.href || '/'}>
                        <Typography type="sub-title4">{menu.menu_groups.heading_link.title}</Typography>
                    </Link>
                    <div className={classes.footerCompanyText}>
                        {menu?.menu_groups?.menu_item?.map((item) => (
                            <Link prefetch={false} href="/[dynamicUrl]" as={item?.sub_menu_link?.href || '/'} key={item?._metadata.uid}>
                                <a>
                                    <Typography type="link1" isLink>{item?.sub_menu_link?.title}</Typography>
                                </a>
                            </Link>
                        ))}
                    </div>
                </Grid>
            ))}

        </>
    );
};

export default FooterMenuItems;
