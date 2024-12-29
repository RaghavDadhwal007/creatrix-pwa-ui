import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Link from '../Link/Link';
import styles from './layout/SubCollection.styles.default';

const useStyles = makeStyles(styles);

const SubCollection = ({ blockItem }) => {
    const classes = useStyles();

    return (
        <div className={classes.mainWrapper}>

            <Link href={blockItem?.link?.href}>
                <a>
                    <Image
                        src={blockItem?.image?.url}
                        alt="Video Card Image"
                        layout="responsive"
                        height={320}
                        width={350}
                    />
                    <div className={classes.titleWrapper}>
                        <ReactMarkdown
                            children={blockItem?.heading}
                            rehypePlugins={[ rehypeRaw ]}
                            remarkPlugins={[ remarkGfm ]}
                        />
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default SubCollection;
