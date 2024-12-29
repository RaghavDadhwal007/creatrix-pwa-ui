import React from 'react';
import { makeStyles } from '@mui/styles';
import Link from '@components/Link/Link';
import Image from 'next/image';
import styles from './layout/FooterSocialIcons.styles.default';
import FooterSocialIconsFunc from './functionality/FooterSocialIcons.func';

const useStyles = makeStyles(styles);

const Iconsimages = ({ items }) => {
    const classes = useStyles();
    const { isHovering, onMouseEnter, onMouseLeave } = FooterSocialIconsFunc();
    // use to render icon src
    const srcIcons = isHovering ? items?.hover_social_icon?.url : items?.social_icon?.url;
    // use to render icon alt
    const altIcons = isHovering ? items?.hover_social_icon?.title : items?.social_icon?.title;

    return (
        <div
            className={isHovering && classes.icons}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Link href={items?.link?.href || '/'}>
                <a>
                    <Image
                        src={srcIcons}
                        alt={altIcons}
                        layout="fill"
                    />
                </a>
            </Link>
        </div>
    );
};

export default Iconsimages;
