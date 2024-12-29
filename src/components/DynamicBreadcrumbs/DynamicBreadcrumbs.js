import { Breadcrumbs } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@components/Typography/Typography';
import useDynamicBreadcrumbsHook from './functioanality/DynamicBreadcrumbs.func';
import styles from './layout/DynamicBreadcrumbs.styles.default';

const useStyles = makeStyles(styles);

const DynamicBreadcrumbs = () => {
    const classes = useStyles();
    const { pageRoutes, handleRedirect } = useDynamicBreadcrumbsHook();
    return (
        <Breadcrumbs separator={<NavigateNextIcon className={classes.breadCrumbIcon} />}>
            {pageRoutes.map((item, index) => {
                // condition to check to show link or not
                const isLink = pageRoutes?.length - 1 !== index;
                return (
                    <Typography
                        type={isLink && 'link'}
                        key={item?.id}
                        onClick={() => (isLink ? handleRedirect(item?.href) : {})}
                    >
                        {item?.title}
                    </Typography>
                );
            })}
        </Breadcrumbs>
    );
};

export default DynamicBreadcrumbs;
