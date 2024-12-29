import Typography from '@components/Typography/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion, AccordionDetails, AccordionSummary,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import styles from './layout/FAQBlock.style.default';

const useStyles = makeStyles(styles);

const FAQBlock = ({
    faqData,
}) => {
    const classes = useStyles();
    const faqBlockData = faqData?.[ 0 ].modular_blocks?.[ 0 ]?.faq_block;
    const [ expanded, setExpanded ] = useState('panel_0');

    const faqCategoryData = faqBlockData?.faq_category;

    // use for open the accordion on click
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className={classes.faqBlock}>
            {faqBlockData?.heading !== '' ?  (
                <div className={classes.blockWrapper}>
                    <span className={classes.blockHeading}>
                        {faqBlockData?.heading}
                    </span>
                </div>
            ) : '' }
            {
                faqCategoryData?.map((itemFaq, index) => (
                    <div className={classes.accordionContainerMain} key={itemFaq?._metadata?.uid}>
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
                                    <div className={classes.questionContainer}>
                                        {itemFaq?.question}
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className={classes.detailsContainer}>
                                <Typography className={classes.answerContainer}>
                                    {itemFaq?.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                ))
            }
        </div>

    );
};

export default FAQBlock;
