import CustomSearchBar from '@components/CustomS‎earchBar‎/CustomS‎earchBar‎';
import Typography from '@components/Typography/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItem, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomSearchHook from 'hooks/customSearchHook';
import { useEffect, useState } from 'react';
import ReactHTMLParser from 'react-html-parser';
import styles from './layout/CenterHeader.styles.default';

const useStyles = makeStyles(styles);

const HeroBanner = ({ data }) => {
    const classes = useStyles({ styles: data?.search_widget.reference[ 0 ].widget_block });
    const { useSearchHook } = CustomSearchHook;
    const {
        inputSearch, handleInputSearch, handleSearchSubmit, handleSearchType,
    } = useSearchHook();
    const [ animate, setAnimate ] = useState(0);
    const [ headingBlock, setHeadingBlock ] = useState([]);
    const [ subHeading, setSubHeading ] = useState('');

    useEffect(() => {
        const time = setInterval(() => {
            setAnimate((prevState) => (prevState + 1) % data?.search_widget.reference[ 0 ].widget_block.heading_block.length);
        }, 3000);
        return () => {
            clearInterval(time);
        };
    }, []);

    useEffect(() => {
        if (data) {
            setHeadingBlock(data?.search_widget?.reference?.[ 0 ]?.widget_block?.heading_block);
            setSubHeading(data?.search_widget?.reference?.[ 0 ]?.widget_block?.sub_heading);
        }
    }, [ data ]);

    return (
        <>
            <div className={classes.animatedItem}>
                {headingBlock && headingBlock.map((heading, ind) => (
                    ind === animate && (heading?.heading && <Typography key={heading} color={data?.search_widget.reference[ 0 ].widget_block.color || 'white'}>{ReactHTMLParser(heading.heading)}</Typography>)
                ))}
            </div>
            {subHeading && (<Typography className={classes.caption} color={data?.search_widget?.reference?.[ 0 ]?.widget_block?.color || 'white'}>{ReactHTMLParser(subHeading)}</Typography>)}
            {data.is_search_widget && (
                <div className={classes.searchWrapper}>
                    <Select
                        label=""
                        onChange={handleSearchType}
                        className={classes.searchTypeWrapper}
                        defaultValue={'footage' || data?.search_widget?.reference?.[ 0 ]?.widget_block?.search_type?.[ 0 ]}
                        IconComponent={KeyboardArrowDownIcon}
                    >
                        {data?.search_widget?.reference?.[ 0 ]?.widget_block?.search_type?.map((val) => (
                            <MenuItem key={val} className={classes.menuItems} value={val?.toLowerCase()}>{val}</MenuItem>
                        ))}
                    </Select>
                    <CustomSearchBar
                        cmsData={data?.search_widget?.reference?.[ 0 ]?.widget_block}
                        inputSearch={inputSearch}
                        handleInputSearch={handleInputSearch}
                        handleSearchSubmit={handleSearchSubmit}
                        parentClasses={{ container: classes.containerWrapper, child: classes.searchBarWrapper }}
                    />
                </div>
            )}
        </>
    );
};

export default HeroBanner;
