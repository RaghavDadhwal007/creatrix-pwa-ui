import { makeStyles } from '@mui/styles';
import React from 'react';
import {
    Accordion, AccordionDetails, AccordionSummary,
} from '@mui/material';
import Typography from '@components/Typography/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhyCreatigo from '@components/WhyCreatigo/WhyCreatigo';
import styles from './layout/CheckoutBlock.styles.defaul';

const useStyles = makeStyles(styles);

const CheckoutBlock = ({ block, SelectedView }) => {
    const classes = useStyles();
    const blockKey = Object.keys(block)[ 0 ];
    const blockObj = block[ blockKey ];

    const whyCreatigoBlock = blockObj.reference?.[ 0 ];
    const faqBlock = blockObj.bottom_subscription_block?.faq_reference?.[ 0 ]?.modular_blocks?.[ 0 ]?.faq_block;

    switch (blockKey) {
        case 'subscription_module':
            return (
                <div className={classes.selectedViewWrapper}>
                    <SelectedView />
                </div>
            );
        case 'why_creatigo_block':
            return (
                <div className={classes.mainWrapper}>
                    <WhyCreatigo whyCreatigoBlock={whyCreatigoBlock} />
                </div>
            );
        case 'bottom_block':
            return (
                <div className={classes.mainWrapper}>
                    <div className={classes.blockWrapper}>
                        <Typography type="heading-2" className={classes.blockHeading}>
                            {faqBlock?.heading}
                        </Typography>
                    </div>
                    <div className={classes.accordionMainWrapper}>
                        {faqBlock?.faq_category?.map((item, index) => (
                            <Accordion
                                square
                                className={classes.accordionContainer}
                                key={item}
                                defaultExpanded={index === 0}
                            >
                                <AccordionSummary
                                    aria-controls="panel-content"
                                    id={`panel-header${ index }`}
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography
                                        className={classes.summaryContainerText}
                                        type="sub-title4"
                                    >
                                        {item?.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.answerContainer}>
                                        {item?.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </div>
            );

        default:
            return null;
    }
};

export default CheckoutBlock;
