import useFormikFormHook from 'hooks/customFormikFormHook';
import * as Yup from 'yup';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import { useSelector } from 'react-redux';
import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import SubscriptionSelector from 'redux/selectors/checkout.selector';
import { useEffect, useState } from 'react';
import config from '../../../../config';

const useCheckoutForm = () => {
    const { isMobile } = useDeviceTypeHook();
    const userDetails = useSelector(({ userState }) => userState?.user);
    const [ subscriptionPlanData, setsubscriptionPlanData ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ isPurchase, setIsPurchase ] = useState(false);
    const { callApi } = useCustomAxiosCallHook();
    const subscriptionCardDeatils = useSelector(SubscriptionSelector?.getSubscriptionDetails);
    const handleCheckout = async (values) => {
        setLoading(true);
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/checkout/process-purchase`,
                method: 'POST',
            },
            body: {
                selectedPlan: subscriptionCardDeatils?.shortName,
                phone: userDetails?.ph_number ? userDetails?.ph_number : values.phone_number,
            },
        });
        setLoading(false);
        if (response?.status === 200) {
            if (response?.data) {
                setsubscriptionPlanData(response?.data?.data);
                setIsPurchase(true);
            }
        }
    };
    const fieldTypes = [
        {
            name: 'Name',
            label: 'Name',
            placeholdertext: 'Name',
            type: 'text',
            id: 0,
            rowwidth: 6,
            disabled: true,
            initialvalue: '',
            value: `${ userDetails?.firstName } ${ userDetails?.lastName }`,
            textFieldType: 'darkTextField',
        },
        {
            name: 'email',
            label: 'Email',
            placeholdertext: 'Email',
            type: 'text',
            id: 1,
            rowwidth: 6,
            disabled: true,
            initialvalue: '',
            textFieldType: 'darkTextField',
            value: userDetails?.email,
        },
        {
            name: 'phone_number',
            label: 'Phone',
            placeholdertext: 'Phone',
            type: 'number',
            id: 2,
            rowwidth: 12,
            disabled: false,
            initialvalue: '',
            isRequired: !isMobile,
            textFieldType: 'darkTextField',
            value: '',
        },
    ];
    // phone number validation regex
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validation = Yup.object().shape({
        phone_number: Yup.string()
            .required('Phone number is required')
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, 'Phone number too short')
            .max(10, 'Phone number too long'),
    });

    const { handleSubmit, ...formikProps } = useFormikFormHook(handleCheckout, fieldTypes, {
        validationSchema: validation,
    });
    useEffect(() => {
        if (userDetails?.ph_number) {
            formikProps.setFieldValue('phone_number', userDetails?.ph_number);
        }
    }, [ userDetails ]);

    const handlePayment = () => {
        if (typeof document !== 'undefined' && isPurchase) {
            document.getElementById('payUPayment').submit();
        }
    };

    useEffect(() => {
        handlePayment();
    }, [ isPurchase ]);

    return {
        formikProps,
        handleCheckout: handleSubmit,
        fieldTypes,
        subscriptionPlanData,
        loading,
        isPurchase,
        handlePayment,
    };
};
export default useCheckoutForm;
