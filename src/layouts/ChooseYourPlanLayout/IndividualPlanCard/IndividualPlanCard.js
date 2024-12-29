/* eslint-disable react/no-children-prop */
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Button from '@components/Button/Button';
import styles from '../layout/ChooseYourPlanLayout.styles.default';
import linkStyle from '../cmsStyles';
import PlanHoverCard from '../PlanHoverCard';

const useStyles = makeStyles(styles);

const IndividualPlanCard = ({
    planData,
    selected,
    setSelected,
    handleCheckout,
    isSlugAvailable,
}) => {
    const classes = useStyles();
    const isSelected = selected?.individualPlanCard;
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
                individualPlanCard: isPlanDisable,
                starterPlanCard: false,
                proPlanCard: false,
            }));
        }
    }, [ isPlanDisable ]);

    return (
        <Grid
            onClick={() => !isPlanDisable
                && setSelected((prevState) => ({
                    individualPlanCard: !prevState.individualPlanCard,
                    starterPlanCard: false,
                    proPlanCard: false,
                }))}
            item
            className={`${ classes.cardWrapper } ${ isSelected && 'selected' }  ${ isPlanDisable ? classes.planDisable : '' }`}
            xs={4}
        >
            <Typography type={isSelected ? 'selectedPlanCardTitle' : 'planCardTitle'}>
                {planData?.name}
            </Typography>
            <Typography type={isSelected ? 'selectedPlanCardShortDesc' : 'planCardShortDesc'}>
                <ReactMarkdown
                    children={planData?.shortDescription}
                    rehypePlugins={[ rehypeRaw ]}
                    remarkPlugins={[ remarkGfm ]}
                />
            </Typography>
            <Typography type={isSelected ? 'selectedCardPrice' : 'planCardPrice'}>
                ₹ {planData?.price?.amount}/<span className={classes.monthTag}>month</span>
            </Typography>
            {planData?.description?.data?.map((item) => (
                <Typography type={isSelected ? 'selectedPlanCardBody' : 'planCardBody'} key={item} style={item.copy_style}>
                    <ReactMarkdown
                        children={item?.copy}
                        rehypePlugins={[ rehypeRaw ]}
                        remarkPlugins={{ remarkGfm }}
                    />
                </Typography>
            ))}
            <Button
                onClick={(e) => !isPlanDisable
                && handleCheckout(e, subscriptionDetails)}
                className={`${ isSelected ? classes.selectedBtn : classes.btn }
                ${ classes.planButton }
                ${ isPlanDisable ? 'disable' : '' }`}
                type="dark-btn"
                style={!isSelected ? buttonStyle : {}}
            >
                {planData?.link?.link?.title}
            </Button>
            {isPlanDisable && <PlanHoverCard classes={classes} />}
        </Grid>
    );
};

export default IndividualPlanCard;
