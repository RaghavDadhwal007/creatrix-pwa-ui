import React from 'react';
import NextLink from 'next/link';

const Link = ({
    children,
    ...otherProps
}) => (
    <>
        <NextLink {...otherProps}>
            {children}
        </NextLink>
    </>
);

export default Link;
