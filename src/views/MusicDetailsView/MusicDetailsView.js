import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import assets from 'assets';
import Image from 'next/image';
import {
    Grid,
} from '@mui/material';
import Typography from '@components/Typography/Typography';
import Button from '@components/Button/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ImagesSlider, { SliderItem } from '@components/ImagesSlider/ImagesSlider';
import RecomendedFootageCardI from '@components/RecomendedFootageCardI/RecomendedFootageCardI';
import AddToProjects from 'src/layouts/AddToProject/AddToProject';
import DownloadDropdown from 'src/layouts/DownloadDropdown/DownloadDropdown';
import styles from './layout/MusicDetailsView.styles.default';
import useMusicDetails from './functionality/MusicDetailsView.func';
import Wave from '../../components/Cards/CardAudio/Waves';

const useStyles = makeStyles(styles);

const MusicDetailsView = () => {
    const classes = useStyles();
    const {
        images: { musicDetailsPage, musicDetailsPageArr }, icons: {
            Inbox, ArrowDownCircle, Heart,
        },
    } = assets;
    const {
        handleClick,
        projectMenuAnchor,
        isProjectMenuOpen,
        handleOpenProjectMenu,
        hanldeCloseProjectMenu,
        myProjectList,
        handleAddProjectDialogOpen,
        downloadMenuAnchor,
        isDownloadDropdownOpen,
        handleCloseDownloadMenu,
        handleOpenDownloadMenu,
    } = useMusicDetails();
    const [ playing, setPlaying ] = useState(false);

    const togglePlaying = () => {
        setPlaying(!playing);
    };
    const {
        icons: {
            PlayIcon,
            Pause,
        },
    } = assets;

    return (
        <div className={classes.root}>
            <div
                className={classes.coverImage}
            >
                <Image
                    src={musicDetailsPage}
                    alt="cover image"
                    layout="fill"
                />
                <div className={classes.playWrapper}>
                    <div
                        aria-hidden="true"
                        className={classes.playInnerWrapper}
                        onClick={() => togglePlaying()}
                    >
                        {playing ? (<Pause  />) : (<PlayIcon />)}
                    </div>

                    <Wave
                        src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
                        isPlaying={playing}
                        isAtBeginning
                        style={{ width: '100%' }}
                    />

                </div>
            </div>
            <Grid className={classes.headingWrapper} container justifyContent="space-between">
                <Typography type="heading-2">Happy Song</Typography>
                <Button endIcon={<ArrowDropDownIcon />} type="icon-btn">Technical Details</Button>
            </Grid>
            <Typography type="body2">Happy song sprightly, bright christmas dramedy. Marimbas with happy pizzicato</Typography>
            {/* <Grid className={classes.tagsWrapper} container>
                {tagsArray.map((tag) => (
                    <Grid item key={tag}>
                        <Typography type="tag-1">{tag}</Typography>
                    </Grid>
                ))}
            </Grid> */}
            <Grid className={classes.btnsWrapper} container>
                <Button type="primary-btn" startIcon={<ArrowDownCircle />} onClick={handleOpenDownloadMenu}>Download</Button>
                <Button type="border-btn" startIcon={<Inbox />} onClick={handleOpenProjectMenu}>Add to projects</Button>
                <Button type="border-btn" startIcon={<Heart />} onClick={() => handleClick('add_to_favourites')}>Add to favouries</Button>
            </Grid>
            <div className={classes.recomendationWrapper}>
                <Typography type="heading-2">Recomended footage</Typography>
                <ImagesSlider noOfImages={musicDetailsPageArr.length}>
                    <Grid container flexWrap="nowrap">
                        {musicDetailsPageArr.map((item) => (
                            <Grid className={classes.recomendationSubWrapper} item xs={4} key={item}>
                                <SliderItem>
                                    <RecomendedFootageCardI imageUri={item} />
                                </SliderItem>
                            </Grid>
                        ))}
                    </Grid>
                </ImagesSlider>
            </div>
            <AddToProjects
                projectMenuAnchor={projectMenuAnchor}
                isProjectMenuOpen={isProjectMenuOpen}
                hanldeCloseProjectMenu={hanldeCloseProjectMenu}
                myProjectList={myProjectList}
                handleAddProjectDialogOpen={handleAddProjectDialogOpen}
            />
            <DownloadDropdown
                downloadMenuAnchor={downloadMenuAnchor}
                isDownloadDropdownOpen={isDownloadDropdownOpen}
                handleDownloadDropdownClose={handleCloseDownloadMenu}
            />
        </div>
    );
};

export default MusicDetailsView;
