import { makeStyles } from '@mui/styles';
import React from 'react';
import CheckoutPageSkeleton from '@views/Skeleton/CheckoutPageSkeleton/CheckoutPageSkeleton';
import useCheckout from './functionality/CheckoutView.func';
import styles from './layout/CheckoutView.styles.defaul';
import CheckoutBlock from './CheckoutBlock';

const useStyles = makeStyles(styles);

const CheckoutView = () => {
    const classes = useStyles();

    const {
        SelectedView, data, loading,
    } = useCheckout();

    if (loading) {
        return <CheckoutPageSkeleton length={5} xs={12} lg={12} />;
    }

    return (
        <div className={classes.commonBlockWrapper}>
            {data?.findSubscriptionPage?.content?.entries?.[ 0 ]?.page_blocks?.map((item) => (
                <CheckoutBlock
                    key="1"
                    block={item}
                    SelectedView={SelectedView}
                />
            ))}
        </div>
    );
};

export default CheckoutView;
