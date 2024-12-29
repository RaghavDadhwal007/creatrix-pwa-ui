import IconButton from '@components/IconButton/IconButton';
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { string } from 'prop-types';
import useCardAudio from './functionality/CardAudio.func';
import styles from './layout/CardAudio.default.style';

const Waves = dynamic(
    () => import('./Waves'),
    { ssr: false },
);
const useStyles = makeStyles(styles);

const CardAudio = ({ className = '' }) => {
    const classes = useStyles();
    const {
        images: {
            wavesMusic,
        }, icons: {
            PlayIcon,
            InboxAudio,
            Search,
            Pause,
            HeartAudio,
            DownloadAudio,
        },
    } = assets;
    const {
        togglePlaying,
        playing,
        handleRedirect,
        open,
        toggleOpen,
        handleAction,
    } = useCardAudio();
    return (
        <>
            <div className={classes.container} onClick={() => handleRedirect('/music-details/1')} aria-hidden>
                <Accordion className={classes.accordionStyle} expanded={open}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        expanded
                    >
                        <div className={`${ classes.cardContainer } ${ className }`}>
                            <div className={classes.audioViewWarpper}>
                                {/* icon */}
                                <div>
                                    <IconButton
                                        aria-hidden="true"
                                        onClick={(e) => togglePlaying(e)}
                                        className={classes.iconBtnWrapper}
                                    >
                                        { playing ? (<Pause />) : (<PlayIcon />)}
                                    </IconButton>
                                </div>
                                {/* rest details with wave */}
                                <div className={classes.detailsWrapper}>
                                    {/* details */}
                                    <div className={classes.titleBlockWrapper}>
                                        <Grid container>
                                            <Grid item className={classes.cardWrapper} md={4} xs={10}>
                                                <div className={classes.titleWrapper}>
                                                    <div className={classes.titleInnerWrapper}>
                                                        <Typography>Bones Ft. Imagine Dragon</Typography>
                                                        <Typography type="caption">Imagine Dragon</Typography>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item className={classes.audioDetailsMidWrapper} md={6}>
                                                <div className={classes.titleWrapper}>
                                                    <div className={classes.titleInnerWrapper}>
                                                        <Typography>Bones Ft. Imagine Dragon</Typography>
                                                        <Typography type="caption"> Sprightly, bright Christmas dramedy. Marimbas with happy pizzicato</Typography>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item className={classes.cardWrapper} xs={2}>
                                                <div className={classes.titleWrapper}>
                                                    <div className={classes.titleInnerWrapper}>
                                                        <Typography>Length</Typography>
                                                        <Typography type="caption">10:00</Typography>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    {/* waves with download */}
                                    <div className={classes.wavesWrapper} aria-hidden onClick={(e) => e.stopPropagation()}>
                                        <Waves
                                            src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
                                            isPlaying={playing}
                                            isAtBeginning
                                            className={classes.wavesInnerWrapper}
                                        />

                                    </div>
                                </div>
                                {/* version and download */}
                                <div>
                                    <div aria-hidden="true" onClick={(e) => toggleOpen(e)} className={classes.downloadWrapper}>
                                        <Typography>Version</Typography>
                                    </div>
                                    <Grid container className={classes.actionIconsWrapper}>
                                        <Grid item className={classes.cardWrapper} md={3} xs={6}>
                                            <div className={classes.actionIcons}>
                                                <HeartAudio onClick={(e) => handleAction(e, 'like')} />
                                            </div>
                                        </Grid>
                                        <Grid item className={classes.cardWrapper} md={3} xs={6}>
                                            <div className={classes.actionIcons}>
                                                <InboxAudio onClick={(e) => handleAction(e, 'inbox')}  />
                                            </div>
                                        </Grid>
                                        <Grid item className={classes.cardWrapper} md={3} xs={6}>
                                            <div className={classes.actionIcons}>
                                                <Search onClick={(e) => handleAction(e, 'search')}  />
                                            </div>
                                        </Grid>
                                        <Grid item className={classes.cardWrapper} md={3} xs={6}>
                                            <div className={classes.actionIcons}>
                                                <DownloadAudio onClick={(e) => handleAction(e, 'download')}  />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={classes.versionDetails}>
                            { [ 1, 2, 3, 4 ].map((verion) => (
                                <div key="key-placeholder" className={`${ classes.cardVersionContainer } ${ className }`}>
                                    <div className={classes.audioViewWarpper}>
                                        {/* icon */}
                                        <div>
                                            <IconButton onClick={(e) => e.stopPropagation()} className={classes.iconBtnWrapper}>
                                                <PlayIcon />
                                            </IconButton>
                                        </div>
                                        {/* rest details with wave */}
                                        <div className={classes.detailsWrapper}>
                                            {/* details */}
                                            <div className={classes.titleBlockWrapper}>
                                                <Grid container>
                                                    <Grid item className={classes.cardWrapper} md={4} xs={10}>
                                                        <div className={classes.titleWrapper}>
                                                            <div className={classes.titleInnerWrapper}>
                                                                <Typography>Bones Ft. Imagine Dragon</Typography>
                                                                <Typography type="caption">Imagine Dragon</Typography>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item className={classes.audioDetailsMidWrapper} md={6}>
                                                        <div className={classes.titleWrapper}>
                                                            <div className={classes.titleInnerWrapper}>
                                                                <Typography>Bones Ft. Imagine Dragon</Typography>
                                                                <Typography type="caption"> Sprightly, bright Christmas dramedy. Marimbas with happy pizzicato</Typography>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item className={classes.cardWrapper} xs={2}>
                                                        <div className={classes.titleWrapper}>
                                                            <div className={classes.titleInnerWrapper}>
                                                                <Typography>Length</Typography>
                                                                <Typography type="caption">10:00</Typography>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            {/* waves with download */}
                                            <div className={classes.wavesWrapper}>
                                                <Image
                                                    src={wavesMusic}
                                                    alt="Music Wave"
                                                    layout="fill"
                                                    className={classes.waveStyle}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            </div>
                                        </div>
                                        {/* version and download */}
                                        <div>
                                            <div className={classes.downloadWrapper}>
                                                <Typography>{verion}</Typography>
                                            </div>
                                            <Grid container className={classes.actionIconsWrapper}>
                                                <Grid item className={classes.cardWrapper} md={3} xs={6}>
                                                    <div className={classes.actionIcons}>
                                                        <HeartAudio onClick={(e) => handleAction(e, 'like')} />
                                                    </div>
                                                </Grid>
                                                <Grid item className={classes.cardWrapper} md={3} xs={6}>
                                                    <div className={classes.actionIcons}>
                                                        <InboxAudio onClick={(e) => handleAction(e, 'inbox')}  />
                                                    </div>
                                                </Grid>
                                                <Grid item className={classes.cardWrapper} md={3} xs={6}>
                                                    <div className={classes.actionIcons}>
                                                        <Search onClick={(e) => handleAction(e, 'search')}  />
                                                    </div>
                                                </Grid>
                                                <Grid item className={classes.cardWrapper} md={3} xs={6}>
                                                    <div className={classes.actionIcons}>
                                                        <DownloadAudio onClick={(e) => handleAction(e, 'download')}  />
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
};

CardAudio.propTypes = {
    className: string,
};

CardAudio.defaultProps = {
    className: '',
};

export default CardAudio;
