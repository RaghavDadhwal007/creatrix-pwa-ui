/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Button from '@components/Button/Button';
import CustomSearchBar from '@components/CustomS‎earchBar‎/CustomS‎earchBar‎';
import { makeStyles } from '@mui/styles';
import ImageWidget from 'src/layouts/Widgets/ImageWidget/ImageWidget';
import TextWidget from 'src/layouts/Widgets/TextWidget/TextWidget';
import Link from '../Link/Link';
import styles from './layout/LeftHeader.styles.default';

const useStyles = makeStyles(styles);

const LeftHeader = ({
    data, isSearchEnabled = true, inputSearch, handleInputSearch, handleSearchSubmit,
}) => {
    const classes = useStyles();
    return (
        <div className={classes.flexWrapper}>
            {data?.map((blocks) => {
                switch (Object.keys(blocks)?.[ 0 ]) {
                    case 'logo':
                        return (
                            <Link key={blocks.logo.image.uid} href="/" as={blocks?.logo?.link?.href || '/'}>
                                <a className={classes.logoDivWrapper}>
                                    <ImageWidget blocks={blocks} />
                                </a>
                            </Link>
                        );
                    case 'menu':
                        return (
                            <div key={blocks?.menu?._metadata.uid} className={classes.linkWrapper}>
                                {blocks?.menu?.reference?.[ 0 ]?.menu_blocks?.map((menus) => {
                                    switch (Object.keys(menus)?.[ 0 ]) {
                                        case 'menu_groups':
                                            if (menus?.menu_groups?.main_menu_presentation === 'link') {
                                                return (
                                                    <Link key={menus?.menu_groups?._metadata?.uid} href="/[dynamicUrl]" as={menus?.menu_groups?.heading_link?.href || '/'}>
                                                        <a>
                                                            <div>
                                                                <TextWidget blocks={menus} />
                                                            </div>
                                                        </a>
                                                    </Link>
                                                );
                                            } if (menus?.menu_groups?.main_menu_presentation === 'button') {
                                                return (
                                                    <Link key={menus?.menu_groups?._metadata?.uid} href={menus?.menu_groups?.heading_link?.href || '/'}>
                                                        <Button className={classes.btnWrapper} type="primary-btn">
                                                            {menus?.menu_groups?.heading_link?.title}
                                                        </Button>
                                                    </Link>
                                                );
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                    return <></>;
                                })}
                            </div>
                        );
                    case 'widget':
                        if (blocks?.widget?.type === '[SEARCH]' && !isSearchEnabled) {
                            return (
                                <CustomSearchBar
                                    inputSearch={inputSearch}
                                    handleInputSearch={handleInputSearch}
                                    handleSearchSubmit={handleSearchSubmit}
                                    key={blocks.widget._metadata.uid}
                                />
                            );
                        }
                        break;
                    default:
                        return <></>;
                }
                return <></>;
            })}
        </div>
    );
};

export default LeftHeader;
