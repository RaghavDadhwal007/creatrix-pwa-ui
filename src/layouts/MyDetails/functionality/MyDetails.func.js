/* eslint-disable no-use-before-define */
import removeWhiteSpace from '@components/Common/helper';
import assets from 'assets';
import useCustomAxiosCallHook from 'hooks/customAxiosCallHook';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import useFormikFormHook from 'hooks/customFormikFormHook';
import CustomNavigationHook from 'hooks/customNavigationHook';
import CustomErrorHandlingHook from 'hooks/useErrorHandlingHook';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userActions from 'redux/actions/user.actions';
import * as Yup from 'yup';
import config from '../../../../config';

const useMyDetailsHook = () => {
    const { useNavigationHook } = CustomNavigationHook;
    const { handleRedirect } = useNavigationHook();
    const [ loading, setLoading ] = useState(false);
    const [ imageLoading, setImageLoading ] = useState(false);
    const { images: { userAvatar } } = assets;
    const { callApi } = useCustomAxiosCallHook();
    const reduxDispatch = useDispatch();
    const { useErrorHandlingHook } = CustomErrorHandlingHook;
    const { error, setError, handleInputFocus } = useErrorHandlingHook();
    const {
        isMobile,
    } = useDeviceTypeHook();
    const userData = useSelector(({ userState }) => userState?.user);
    const [ profileImage, setProfileImage ] = useState(userData?.profile_image || userAvatar || '');
    const [ fieldTypes, setFieldTypes ] = useState([
        {
            name: 'first_name',
            type: 'text',
            label: 'First Name',
            placeholdertext: 'First Name',
            id: 0,
            rowwidth: isMobile ? 12 : 6,
            disabled: false,
            initialvalue: userData?.firstName || '',
            isRequired: true,
            textFieldType: 'darkTextField',
        },
        {
            name: 'last_name',
            type: 'text',
            label: 'Last Name',
            placeholdertext: 'Last Name',
            id: 1,
            rowwidth: isMobile ? 12 : 6,
            disabled: false,
            initialvalue: userData?.lastName || '',
            isRequired: true,
            textFieldType: 'darkTextField',
        },
        {
            name: 'email',
            type: 'text',
            label: 'Email',
            placeholdertext: 'Email',
            id: 2,
            rowwidth: 12,
            disabled: true,
            readOnly: true,
            initialvalue: userData?.email || '',
            isRequired: true,
            textFieldType: 'darkTextField',
        },
        {
            name: 'ph_number',
            type: 'number',
            placeholderText: '1234567890',
            id: 3,
            rowWidth: 12,
            disabled: false,
            readOnly: false,
            initialvalue: userData?.ph_number || '',
            isRequired: false,
            textFieldType: 'darkTextField',
        },
    ]);

    const fetchUserDetails = async () => {
        setLoading(true);
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/profile`,
            },
        });

        if (response.status === 200) {
            setFieldTypes((prevState) => prevState.map((prev) => ({
                ...prev,
                value: response?.data?.data?.[ 0 ]?.[ prev.name ],
                initialvalue: response?.data?.data?.[ 0 ]?.[ prev.name ],
            })));
            if (response?.data?.data?.[ 0 ]?.profile_image) {
                setProfileImage(response?.data?.data?.[ 0 ]?.profile_image);
            }

            const {
                first_name: firstName,
                last_name: lastName,
                pid,
                ...otherKeys
            } = response?.data?.data?.[ 0 ];

            const saveToReduxObj = {
                firstName,
                lastName,
                userId: pid,
                ...otherKeys,
            };

            reduxDispatch(userActions.updateUserObj(saveToReduxObj));
        }
        setLoading(false);
    };

    useEffect(() => {
        if (!Object.keys(userData).length) {
            fetchUserDetails();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ userData ]);

    const validation = Yup.object().shape({
        first_name: Yup.string()
            .required('This field is required'),
        last_name: Yup.string()
            .required('This field is required'),
    });

    const validated = (values) => {
        const emptyRegex = /^\s*$/;
        const errors = {};
        let isVal = true;
        if (emptyRegex.test(values.first_name)) {
            errors.first_name = 'Invalid first name';
            isVal = false;
        }
        if (emptyRegex.test(values.last_name)) {
            errors.last_name = 'Invalid last name';
            isVal = false;
        }
        return isVal;
    };

    const handleEditProfileHandler = async (values) => {
        const isValidate = validated(values);
        if (!isValidate) {
            return;
        }
        setLoading(true);
        const bodyData = {
            first_name: removeWhiteSpace(values.first_name),
            last_name: removeWhiteSpace(values.last_name),
            email: removeWhiteSpace(values.email),
            ph_number: removeWhiteSpace(values.ph_number),
            profile_image: removeWhiteSpace(values.profile_image),
        };
        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/profile`,
                method: 'PUT',
            },
            body: bodyData,
        });
        await fetchUserDetails();

        if (response.status !== 200) {
            setError(response?.data?.message);
        }
        setLoading(false);
    };

    const {
        handleSubmit, setFieldValue, ...formikProps
    } = useFormikFormHook(handleEditProfileHandler, fieldTypes, {
        validationSchema: validation,
    });

    const handleEditProfileImageHandler = async (file) => {
        const sendData = new FormData();
        sendData.append('image', file);
        setImageLoading(true);

        const response = await callApi({
            uriEndPoint: {
                uri: `${ config.API_BASE_URL }/upload-image`,
                method: 'POST',
                headerProps: {
                    'content-type': 'form-data',
                },
            },
            body: sendData,
            flag: {
                sendToken: false,
            },
        });
        setImageLoading(false);

        if (response.status === 200 && response?.data?.file_url) {
            setFieldValue('profile_image', response?.data?.file_url);
        }
    };
    return {
        fieldTypes,
        handleRedirect,
        loading,
        formikProps,
        handleUpdate: handleSubmit,
        handleEditProfileImageHandler,
        profileImage,
        imageLoading,
        error,
        handleInputFocus,
    };
};

const MyDetailsFunc = { useMyDetailsHook };

export default MyDetailsFunc;
