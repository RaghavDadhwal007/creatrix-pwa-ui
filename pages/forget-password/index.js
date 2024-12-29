import React from 'react';
import dynamic from 'next/dynamic';

const ForgetPasswordFormView = dynamic(
    () => import('@views/ForgetPasswordFormView/ForgetPasswordFormView'),
    { ssr: false },
);

const ForgetPassword = () => (
    <ForgetPasswordFormView />
);

export default ForgetPassword;
