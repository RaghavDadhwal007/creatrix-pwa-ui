import {
    Accordion, AccordionDetails, AccordionSummary, Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Typography from '@components/Typography/Typography';
import Link from '@components/Link/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './layout/MobileViewMenuItems.styles.default';
import FooterMenuItemHook from './functionality/FooterMenuItems.fun';

const useStyles = makeStyles(styles);

const MobileFooterMenuItems = ({ data }) => {
    const classes = useStyles();
    const { handleChange, expanded } = FooterMenuItemHook();

    return (
        <>
            {data?.menu?.reference?.[ 0 ]?.menu_blocks?.map((menu, index) => (
                <Grid item xs={12} key={menu.menu_groups._metadata.uid} className={classes.menuItemsBlock}>
                    <div className={classes.accordionContainerMain}>
                        <Accordion
                            square
                            className={classes.accordionContainer}
                            defaultExpanded={`panel_${ index }` === 'panel_0'}
                            expanded={expanded === `panel_${ index }`}
                            onChange={handleChange(`panel_${ index }`)}
                        >
                            <AccordionSummary
                                className={classes.summaryContainer}
                                aria-controls="panel-content"
                                id={`panel-header${ index }`}
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <div className={classes.faqTitleContainer}>
                                    <Typography type="sub-title4">{menu.menu_groups.heading_link.title}</Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className={classes.detailsContainer}>
                                <div className={classes.footerCompanyText}>
                                    {menu?.menu_groups?.menu_item?.map((item) => (
                                        <Link prefetch={false} href="/[dynamicUrl]" as={item?.sub_menu_link?.href || '/'} key={item?._metadata.uid}>
                                            <Typography type="link1" isLink>{item?.sub_menu_link?.title}</Typography>
                                        </Link>
                                    ))}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                </Grid>

            ))}

        </>
    );
};

export default MobileFooterMenuItems;
