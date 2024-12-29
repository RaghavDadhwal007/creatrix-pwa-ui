import { makeStyles } from '@mui/styles';
import useDeviceHook from 'hooks/customDeviceTypeHook';
import BillingDetailSkelton from '@views/Skeleton/BillingDetailSkelton/BillingDetailSkelton';
import assets from 'assets';
import Image from 'next/image';
import Button from '@components/Button/Button';
import styles from './layout/BillingSubscriptionDetails.styles.default';
import BillingSubscriptionDetailsFunc from './functionality/BillingSubscriptionDetails.func';
import BillingSubscriptionUI from './BillingSubscriptionUI';

const useStyles = makeStyles(styles);

const BillingSubscriptionDetails = () => {
    const classes = useStyles();
    const { useBillingSubscriptionDetailsHook } = BillingSubscriptionDetailsFunc;
    const {
        billingDetails, loading, isPlanPurchased, checkoutRedirect,
    } = useBillingSubscriptionDetailsHook();
    const { belowLargeDevice } = useDeviceHook();
    const { images: { noPlanImage } } = assets;

    if (loading && Object.entries(billingDetails).length <= 0) {
        return (
            <BillingDetailSkelton />
        );
    }

    const noPlanUIRender = () => (
        <div className={classes.noPlansLayout}>
            <Image
                src={noPlanImage || ''}
                alt="No Plan Image"
                height={200}
                width={200}
            />
            <div className={classes.description}>
                <div className={classes.shortDescription}>No current plan</div>
                <div className={classes.longDescription}>Firstly, you need to purchase our subscription plan. For more information please contact us</div>
            </div>
            <div className={classes.buttonWrappper}>
                <Button onClick={checkoutRedirect} type="primary-btn">
                    Upgrade Your Plan
                </Button>
            </div>
        </div>
    );

    return (
        <>
            {isPlanPurchased ? (
                <BillingSubscriptionUI
                    billingDetails={billingDetails}
                    belowLargeDevice={belowLargeDevice}
                    classes={classes}
                />
            ) : (
                noPlanUIRender()
            )}
        </>
    );
};

export default BillingSubscriptionDetails;
