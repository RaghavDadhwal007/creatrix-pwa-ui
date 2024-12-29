import Typography from '@components/Typography/Typography';
import React from 'react';
import InnerModal from '../InnerModal/InnerModal';

const SubscribeInfo = ({ onButtonClick }) => (
    <InnerModal buttonTitle="Subscribe" onButtonClick={onButtonClick}>
        <Typography
            type="sub-title-6"
        >
            You need to be a subscriber to add to projects and download footage and music . Why join Creatigo ?
        </Typography>
    </InnerModal>
);

export default SubscribeInfo;
