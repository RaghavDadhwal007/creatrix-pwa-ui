import Image from 'next/image';
import React from 'react';
import { string, func } from 'prop-types';
import { makeStyles } from '@mui/styles';
import styles from './layout/Image.styles.default';

const useStyles = makeStyles(styles);

const GenericImage = ({
    src = '',
    alt = '',
    onClickImage,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.image_container}>
            <Image onClick={onClickImage} src={src} alt={alt} layout="fill" className="image" />
        </div>
    );
};

GenericImage.propTypes = {
    src: string.isRequired,
    alt: string,
    onClickImage: func,
};

GenericImage.defaultProps = {
    alt: '',
    onClickImage: () => { },
};

export default GenericImage;
