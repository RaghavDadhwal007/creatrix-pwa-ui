import Button from '@components/Button/Button';
import SearchBar from '@components/SearchBar/SearchBar';
import Typography from '@components/Typography/Typography';
import {
    Accordion, AccordionDetails, AccordionSummary,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AuthFormWrapper from 'src/layouts/AuthFormWrapper/AuthFormWrapper';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import CardTypeIII from '@components/Cards/CardTypeIII/CardTypeIII';
import styles from './layout/FaqPageView.styles.default';
import useFaqPageViewHook from './functionality/FaqPageView.func';

const useStyles = makeStyles(styles);
const FaqPageView = ({
    data,
}) => {
    const classes = useStyles();
    const { isMobile } = useDeviceTypeHook();

    const {
        filteredQuestions, hanldeSearch, fieldTypes, formikProps, handleSubmit,
    } = useFaqPageViewHook(data?.faq?.reference[ 0 ]?.modular_blocks?.[ 0 ]?.faq_block?.faq_category);
    return (
        <div className={classes.mainWrapper}>
            <div className={classes.searchMainWrapper}>
                <SearchBar
                    placeholder="Search Question"
                    type="faq-page"
                    onChange={hanldeSearch}
                />
            </div>
            <div className={classes.accordionMainWrapper}>
                {filteredQuestions?.map((item, index) => (
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
                        <AccordionDetails className={classes.detailsContainer}>
                            <Typography className={classes.answerContainer}>
                                {item?.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
            {isMobile ?  (
                <CardTypeIII title="For more information, please fill the below form">
                    <form onSubmit={handleSubmit} className={classes.formWrapper}>
                        <AuthFormWrapper formikProps={formikProps} formFields={fieldTypes} />
                    </form>
                    <div className={classes.submitbtn}>
                        <Button>Sumit to Support</Button>
                    </div>
                </CardTypeIII>
            ) : (
                <form
                    onSubmit={handleSubmit}
                >
                    <Typography type="heading-2">
                        For more information, please fill the below form
                    </Typography>
                    <div
                        className={classes.formWrapper}
                    >
                        <AuthFormWrapper
                            formFields={fieldTypes}
                            formikProps={formikProps}
                        />
                    </div>
                    <div className={classes.submitbtn}>
                        <Button>Submit to report</Button>
                    </div>
                </form>
            ) }

        </div>
    );
};

export default FaqPageView;
