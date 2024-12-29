import Button from '@components/Button/Button';
import CardAudio from '@components/Cards/CardAudio/CardAudio';
import SelectDropdown from '@components/SelectDropdown/SelectDropdown';
import Typography from '@components/Typography/Typography';
import {
    Accordion, AccordionDetails, AccordionSummary, Grid, Radio,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import { useRouter } from 'next/router';
import styles from './layout/MusicSearchResultView.styles.default';
import MusicSearchResultViewData from './MusicSearchResultData';
import MobileViewMusicSearchResult from './MobileViewMusicSearchResult';

const useStyles = makeStyles(styles);

const SearchResultView = () => {
    const classes = useStyles();
    const { icons: { FilterBtn } } = assets;
    const { isMobile }  = useDeviceTypeHook();
    const router = useRouter();
    const { musicSearch = '' } = router?.query;

    const titles = Object.keys(MusicSearchResultViewData?.filter);
    return (
        <div className={classes.mainWrapper}>
            <Typography type="heading">{` ${ MusicSearchResultViewData?.heading } '${ musicSearch }'`}</Typography>
            <div className={classes.buttonWrapper}>
                <div className={classes.buttonBlock}>
                    <Typography type="heading">{MusicSearchResultViewData?.subHeading}</Typography>
                    {MusicSearchResultViewData?.button?.map((item) => (
                        <Button key={item?.id} type="icon-btn">
                            {item?.name}
                        </Button>
                    ))}
                </div>
                <div>
                    <SelectDropdown type="default" className={classes.sortingDropdown} items="Sort by" />
                </div>
            </div>
            <Grid container className={classes.container}>
                <div className={classes.wrapper}>
                    {!isMobile ? (
                        <Grid item xs={3} className={classes.innerContainer}>
                            <div className={classes.filterBlock}>
                                <div className={classes.filterBtn}>
                                    <Button type="clearFilterBtn">Clear filters</Button>
                                    <FilterBtn />
                                </div>
                                <div className={classes.round} />
                                <div className={classes.borderLine} />
                                <div className={classes.secondRound} />
                            </div>
                            {titles?.map((item, index) => (
                                <div key={item} className={classes.accordionContainerMain}>
                                    <Accordion
                                        square
                                        className={classes.accordionContainer}
                                        defaultExpanded={index === 0}
                                    >
                                        <AccordionSummary
                                            className={classes.summaryContainer}
                                            aria-controls="panel-content"
                                            id={`panel-header${ index }`}
                                            expandIcon={<ExpandMoreIcon />}
                                        >
                                            <div className={classes.titleContainer}>
                                                <Typography type="sub-title8">{item}</Typography>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails className={classes.detailsContainer}>
                                            { MusicSearchResultViewData?.filter[ item ].map((iteminner) => (
                                                <div key={iteminner?.id} className={classes.title}>
                                                    <Radio
                                                        className={classes.radioBtn}
                                                    />
                                                    <Typography type="caption5">{iteminner?.title}</Typography>
                                                </div>
                                            ))}
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            ))}
                        </Grid>
                    ) : <MobileViewMusicSearchResult data={titles} MusicSearchResultViewData={MusicSearchResultViewData} />}
                    <Grid item xs={9} className={classes.musicContainer}>
                        <div>
                            {[  1, 2, 3, 4, 5, 6, 7, 8 ].map((item) => (
                                <div key="1" className={classes.audioCardWrapper}>
                                    <CardAudio
                                        item={item}
                                    />
                                </div>
                            ))}
                        </div>
                    </Grid>
                </div>
            </Grid>
        </div>
    );
};

export default SearchResultView;
