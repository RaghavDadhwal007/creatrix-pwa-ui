import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styles from './layout/NupCard.styles.default';

const useStyles = makeStyles(styles);

const NupCard = ({
    title,
    imagUri,
    subheading,
}) => {
    const classes = useStyles();

    return (
        <div>
            <Typography type="heading-3" className={classes.stepHeading}>
                <ReactMarkdown
                    children={title}
                    rehypePlugins={[ rehypeRaw ]}
                    remarkPlugins={[ remarkGfm ]}
                />
            </Typography>
            <div className={classes.imageWrapper}>
                <Image className={classes.image} src={imagUri} layout="fill" alt="card" />
            </div>
            <Typography type="body5">{subheading}</Typography>
        </div>
    );
};

/*
   design as follows(for reference youtube claim support page):

   Heading-here

   ---------------------
   ---------------------
   ------Image here-----
   ---------------------
   ---------------------

   description-here
*/

NupCard.propTypes = {
    title: string.isRequired,
    imagUri: string.isRequired,
    subheading: string.isRequired,
};

export default NupCard;
