import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';
import FAQBlock from '@components/FAQBlock/FAQBlock';
import GeneralSupportSkeleton from '@views/Skeleton/GeneralSupportSkeleton/GeneralSupportSkeleton';
import styles from './layout/GeneralSupportView.styles.default';
import GeneralSupportFunc from './functionality/GeneralSupportView.func';

const useStyles = makeStyles(styles);

const GeneralSupportView = ({ contentType }) => {
    const { useGeneralSupportHook } = GeneralSupportFunc;
    const {
        content, loading,
    } = useGeneralSupportHook({
        contentType,
    });
    const classes = useStyles();

    if (loading) {
        return <GeneralSupportSkeleton length={3} xs={12} lg={12} />;
    }
    if (!content) {
        return null;
    }
    return (
        <div className={classes.mainContainer}>
            {  content?.copy_block?.map((items) => (
                <div key={items?._metadata?.uid}>
                    <Typography className={classes.heading} type="heading-1">{items?.heading}</Typography>
                    <div className={classes.generalSupportContent}>
                        <Typography className={classes.content} type="caption">{items?.subheading}</Typography>
                    </div>
                </div>
            ))}
            <FAQBlock faqData={content?.faq_block?.reference} />
        </div>
    );
};

export default GeneralSupportView;
