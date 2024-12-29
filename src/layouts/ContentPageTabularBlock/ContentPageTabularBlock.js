import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useRouter } from 'next/router';
import Link from '@components/Link/Link';
import Tabs from './Tabs/Tabs';
import styles from './layout/ContentPageTabularBlock.style.default';

const useStyles = makeStyles(styles);

const ContentPageTabularBlock = ({ data }) => {
    const router  = useRouter();
    const pathName = router?.asPath?.split('/')[ 1 ];
    const initTab = () => {
        if (pathName === 'terms-conditions') {
            return 'Terms & Conditions';
        }
        if (pathName === 'privacy-policy') {
            return 'Privacy policy';
        }
        if (pathName === 'licensing-agreement') {
            return 'Licensing agreement';
        }
        return 'Terms & Conditions';
    };
    const [ selectedTab, setSelectedTab ] = useState(initTab);

    const tabsArray = data?.tabular_block?.tab_blocks?.map((item) => item.title);
    const tabData = data?.tabular_block?.tab_blocks?.filter((item) => item?.title === selectedTab);

    // style object from cms/not working properly
    const styleObj = {
        color: tabData[ 0 ]?.copy_style?.color,
        fontSize: tabData[ 0 ]?.copy_style?.font_size,
        borderColor: tabData[ 0 ]?.copy_style?.border_color,
        borderRadius: tabData[ 0 ]?.copy_style?.border_radius,
        borderWidth: tabData[ 0 ]?.copy_style?.border_width,
    };

    const classes = useStyles(styleObj);
    return (
        <div>
            <Tabs tabs={tabsArray} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <div className={classes.copyBlock}>
                <div className={classes.innerBlock}>
                    <div className={classes.svgIcon}>
                        <Image
                            alt="image"
                            src={tabData[ 0 ].svg_icon?.url}
                            width={400}
                            height={400}
                        />
                    </div>
                    <Typography className={classes.desc}>
                        <ReactMarkdown
                            children={tabData[ 0 ]?.copy}
                            rehypePlugins={[ rehypeRaw ]}
                            remarkPlugins={[ remarkGfm ]}
                        />
                    </Typography>
                </div>
            </div>
            {tabData?.[ 0 ]?.download_license?.file?.url &&  (
                <div className={classes.downloadLink}>
                    <Link href={tabData?.[ 0 ]?.download_license?.file?.url}>
                        {tabData?.[ 0 ]?.download_license?.button_link?.link?.title || 'Download'}
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ContentPageTabularBlock;
