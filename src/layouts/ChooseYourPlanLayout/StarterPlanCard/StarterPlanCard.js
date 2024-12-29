/* eslint-disable react/no-children-prop */
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

const StarterPlanCard = ({
    planData,
    setSelected,
    selected,
    handleCheckout,
    isSlugAvailable,
}) => {
    const classes = useStyles();
    const isSelected = selected?.starterPlanCard;
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
                starterPlanCard: isPlanDisable,
                proPlanCard: false,
            }));
        }
    }, [ isPlanDisable ]);
    return (
        <Grid
            onClick={() => !isPlanDisable
                && setSelected((prevState) => ({
                    individualPlanCard: false,
                    starterPlanCard: !prevState.starterPlanCard,
                    proPlanCard: false,
                }))}
            item
            className={`${ classes.cardWrapper }
            ${ isSelected && 'selected' }
            ${ isPlanDisable ? classes.planDisable : '' }`}
            xs={4}
        >
            <Typography type={isSelected ? 'selectedPlanCardTitle' : 'planCardTitle'}>{planData?.name}</Typography>
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
            {planData?.description?.data.map((item, index) => {
                switch (index) {
                    case 0:
                        return (
                            <Typography type={isSelected ? 'selectedPlanCardBody' : 'planCardBody'} style={item?.copy_style} key={item}>
                                <ReactMarkdown
                                    children={item?.copy}
                                    rehypePlugins={[ rehypeRaw ]}
                                    remarkPlugins={[ remarkGfm ]}
                                />
                            </Typography>
                        );
                    case 1:
                        return (
                            <Typography type={isSelected ? 'selectedUnlimitedLabel' : 'unlimitedLabel'} style={item?.copy_style} key={item}>
                                <ReactMarkdown
                                    children={item?.copy}
                                    rehypePlugins={[ rehypeRaw ]}
                                    remarkPlugins={[ remarkGfm ]}
                                />
                            </Typography>
                        );
                    default:
                        return null;
                }
            })}
            <Button
                onClick={(e) => !isPlanDisable
                && handleCheckout(e, subscriptionDetails)}
                className={`${ classes.planButton }
                ${ isSelected ? classes.selectedBtn : classes.btn }
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

export default StarterPlanCard;
