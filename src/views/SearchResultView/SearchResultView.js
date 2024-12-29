import Button from '@components/Button/Button';
import VideoHoverCard from '@components/Cards/VideoHoverCard/VideoHoverCard';
import SelectDropdown from '@components/SelectDropdown/SelectDropdown';
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import { useRouter } from 'next/router';
import styles from './layout/SearchResultView.styles.default';
import searchResultViewData from './SearchResultViewData';

const useStyles = makeStyles(styles);

const SearchResultView = () => {
    const classes = useStyles();
    const router = useRouter();
    const { search = '' } = router?.query;
    const { isMobile }  = useDeviceTypeHook();

    return (
        <div className={classes.mainWrapper}>
            <Typography type="heading">{` ${ searchResultViewData?.heading } '${ search }'`}</Typography>
            <div className={classes.buttonWrapper}>
                <div className={classes.buttonBlock}>
                    <Typography type="heading">{searchResultViewData?.subHeading}</Typography>
                    {searchResultViewData?.button?.map((item) => (
                        <Button key={item?.id} type="icon-btn">
                            {item?.name}
                        </Button>
                    ))}
                </div>
                <div>
                    <SelectDropdown type="default" className={classes.sortingDropdown} items="Sort by" />
                </div>
            </div>
            <div className={classes.selectWrapper}>
                {searchResultViewData?.selectDropdown?.map((items) => (
                    <>
                        {
                            items?.name === 'Clear Filters'
                                ? <Button type="primary-btn"> {items?.name}</Button>
                                : <SelectDropdown type="outlined" key={items?.id} items={items?.name} />
                        }
                    </>
                ))}
            </div>

            {isMobile ? (
                <Grid container className={classes.gallery}>
                    {searchResultViewData?.photos?.map((item) => (
                        <VideoHoverCard
                            key={item?.id}
                            imageUri={item?.src}
                            height={item?.height}
                            width={item?.width}
                        />
                    ))}
                </Grid>
            ) : (
                <div className={classes.gallery}>
                    {searchResultViewData?.photos?.map((item) => (
                        <VideoHoverCard
                            key={item?.id}
                            imageUri={item?.src}
                            height={item?.height}
                            width={item?.width}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResultView;
