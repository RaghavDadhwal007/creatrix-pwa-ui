import DocumentHeader from '@components/DocumentHeader/DocumentHeader';
import dynamic from 'next/dynamic';
import React from 'react';

const SignUpView = dynamic(
    () => import('@views/SignUpView/SignUpView'),
    { ssr: false },
);
const SignUp = () => (
    <>
        <DocumentHeader
            defaultTitle="Sign Up to Creatigo"
        />
        <SignUpView />
    </>
);

export default SignUp;
