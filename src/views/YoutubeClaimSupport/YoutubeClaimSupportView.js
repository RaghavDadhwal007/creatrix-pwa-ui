import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import YoutubeClaimSupportSkeleton from '@views/Skeleton/YoutubeClaimSupportSkeleton/YoutubeClaimSupportSkeleton';
import React from 'react';
import NupCardsLayout from 'src/layouts/NupCardsLayout/NupCardsLayout';
import useYoutubeClaimSupportHook from './functionality/YoutubeClaimSupportView.func';
import styles from './layout/YoutubeClaimSupportView.styles.default';
import SupportForm from './SupportForm/SupportForm';

const useStyles = makeStyles(styles);

const YoutubeClaimSupportView = () => {
    const classes = useStyles();
    const {
        handleSubmit, formikProps, fieldTypes, claimSupportData, loading,
    } = useYoutubeClaimSupportHook();

    if (loading) {
        return <YoutubeClaimSupportSkeleton length={2} xs={6} lg={6} />;
    }

    return (
        <div className={classes.root}>
            <Typography type="heading-2">YouTube</Typography>
            <div className={classes.subDummyBtnWrapper}>
                <Button type="dark-btn2">WdvcsvsdvSEDcdscc</Button>
            </div>
            {claimSupportData?.modular_blocks?.map((block) => {
                switch (Object.keys(block)[ 0 ]) {
                    case 'copy':
                        return (
                            <div className={classes.noteWrapper}>
                                <Typography>{block?.copy?.heading}</Typography>
                                <Typography type="body5" className={classes.desc}>{block?.copy?.sub_heading}</Typography>
                            </div>
                        );

                    case 'n_up':
                        return (
                            <NupCardsLayout cardData={block?.n_up?.reference[ 0 ]} />
                        );
                    case 'form_block':
                        return (
                            <SupportForm
                                title={block?.form_block?.heading}
                                handleSubmit={handleSubmit}
                                formikProps={formikProps}
                                fieldTypes={fieldTypes}
                            />
                        );
                    default:
                        return null;
                }
            })}

        </div>
    );
};

export default YoutubeClaimSupportView;
