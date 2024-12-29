import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';
import {
    Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import CardTypeIII from 'src/components/Cards/CardTypeIII/CardTypeIII';
import CircularLoading from '@components/CircularLoading/CircularLoading';
import AuthFormWrapper from '../AuthFormWrapper/AuthFormWrapper';
import useCheckoutForm from './functionality/CheckoutForm.func';
import styles from './layout/Checkout.styles.default';
import SubscriptionSelector from '../../../redux/selectors/checkout.selector';
import PayUForm from './PayUForm/PayUForm';

const useStyles = makeStyles(styles);
const Checkout = () => {
    const classes = useStyles();
    const subscriptionCardDeatils = useSelector(SubscriptionSelector?.getSubscriptionDetails);

    const {
        formikProps, handleCheckout, fieldTypes, subscriptionPlanData, loading, isPurchase, handlePayment,
    } = useCheckoutForm();

    return (
        <Grid className={classes.gridWrapper} container spacing={5}>
            <Grid item md={3} xs={4} className={classes.formWrapper}>
                <div className={classes.leftBlockWrapper}>
                    <div>
                        <div>
                            <Typography type="formheading">Order summary :</Typography>
                            <Typography className={`${ classes.itemWrapper } itemInside`} type="body1">{subscriptionCardDeatils?.name} subscription</Typography>
                        </div>
                        <div className={`${ classes.itemWrapper } innerItem`}>
                            <Typography type="formheading">Monthly price :</Typography>
                            <Typography className={`${ classes.itemMargin } x1`} type="body1">Price/currency based on location</Typography>

                        </div>
                        <div className={`${ classes.itemWrapper } innerItem`}>
                            <Typography type="formheading">Taxes and other charges :</Typography>
                            <Typography className={`${ classes.itemWrapper } itemInside`} type="body1">Price/currency based on location</Typography>

                        </div>
                        <div className={`${ classes.itemWrapper } itemOutside`}>
                            <Typography type="formheading"> Total :</Typography>
                            <Typography className={`${ classes.itemWrapper } itemInside`} type="body1">${subscriptionCardDeatils?.price} each month</Typography>

                        </div>
                    </div>
                    <div>
                        <div className={`${ classes.itemWrapper } innerItem`}>
                            <Typography className={classes.learnMoreHeaing} type="body1" isUnderline>Renews monthly, cancel anytime</Typography>
                            <Typography className={classes.learnMoreWrapper} type="heading" isLink>Learn more</Typography>

                        </div>
                    </div>
                </div>
            </Grid>
            <Grid className={classes.gridItemWrapper} item md={7} xs={7}>
                <CardTypeIII>
                    <div className={`${ classes.itemWrapper } itemBlock`}>
                        <form
                            className={classes.formWrapper}
                            onSubmit={handleCheckout}
                        >
                            <AuthFormWrapper
                                formikProps={formikProps}
                                formFields={fieldTypes}
                            />
                            <PayUForm
                                subscriptionPlanData={subscriptionPlanData}
                                classes={classes}
                                loading={loading}
                                isPurchase={isPurchase}
                                formikProps={formikProps}
                                handlePayment={handlePayment}
                            />
                            <div className={classes.actionButtonWrapper}>
                                <Button
                                    className={classes.paymentButton}
                                    type="primary-btn"
                                    disabled={loading}
                                >
                                    {loading ? <CircularLoading type="small" /> : 'Pay Now'}
                                </Button>
                            </div>
                        </form>

                    </div>
                </CardTypeIII>
            </Grid>

        </Grid>

    );
};
export default Checkout;
