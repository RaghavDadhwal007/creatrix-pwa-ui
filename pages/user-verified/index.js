// import UserVerifiedView from '@views/UserVerifiedView/UserVerifiedView';
import React from 'react';
import dynamic from 'next/dynamic';

const UserVerifiedView = dynamic(
    () => import('@views/UserVerifiedView/UserVerifiedView'),
    { ssr: false },
);

const UserVerified = () => (
    <UserVerifiedView />
);

export default UserVerified;
