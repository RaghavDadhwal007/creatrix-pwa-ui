import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import linkStyle from '../cmsStyles';
import styles from '../layout/ChooseYourPlanLayout.styles.default';
import PlanHoverCard from '../PlanHoverCard';

const useStyles = makeStyles(styles);

const ProPlanCard = ({
    planData,
    selected,
    setSelected,
    handleCheckout,
    isSlugAvailable,
}) => {
    const isSelected = selected?.proPlanCard;
    const selectedCardBg = planData?.image?.filename;
    const classes = useStyles(selectedCardBg);
    const { style: buttonStyle } = linkStyle(planData);
    const subscriptionDetails = {
        shortName: planData.shortName,
        price: planData.price.amount,
        name: planData.name,
    };
    const isPlanDisable = isSlugAvailable === planData?.shortName;

    useEffect(() => {
        if (isPlanDisable) {
            setSelected(() => ({
                individualPlanCard: false,
                starterPlanCard: false,
                proPlanCard: isPlanDisable,
            }));
        }
    }, [ isPlanDisable ]);

    return (
        <Grid
            onClick={() => !isPlanDisable
                && setSelected((prevState) => ({
                    individualPlanCard: false,
                    starterPlanCard: false,
                    proPlanCard: !prevState.proPlanCard,
                }))}
            item
            className={`${ classes.cardWrapper }
            ${ isSelected && 'selected' }
            ${ isPlanDisable ? classes.planDisable : '' }`}
            xs={4}
        >
            <Typography type={isSelected ? 'selectedPlanCardTitle' : 'planCardTitle'}>
                {planData?.name}
            </Typography>
            <Typography className={!isSelected ? classes.propCardDesc : {}} type={isSelected ? 'selectedPlanCardShortDesc' : 'planCardShortDesc'}>
                <ReactMarkdown
                    // eslint-disable-next-line react/no-children-prop
                    children={planData?.shortDescription}
                    rehypePlugins={[ rehypeRaw ]}
                    remarkPlugins={[ remarkGfm ]}
                />
            </Typography>
            {planData?.description?.data.map((item) => (
                <Typography type={isSelected ? 'selectedPlanCardBody-2' : 'planCardBody-2'} key={item} style={item?.copy_style}>
                    <ReactMarkdown
                    // eslint-disable-next-line react/no-children-prop
                        children={item?.copy}
                        rehypePlugins={[ rehypeRaw ]}
                        remarkPlugins={[ remarkGfm ]}
                    />
                </Typography>
            ))}
            <Button
                onClick={(e) => !isPlanDisable
                && handleCheckout(e, subscriptionDetails)}
                className={`${ classes.planButton }
                ${ isSelected ? classes.proselectedBtn : classes.btn }
                ${ isPlanDisable ? 'disable' : ''  }`}
                type="dark-btn"
                style={!isSelected ? buttonStyle : {}}
            >
                {planData?.link?.link?.title}
            </Button>
            {isPlanDisable && <PlanHoverCard classes={classes} />}
        </Grid>
    );
};

export default ProPlanCard;
