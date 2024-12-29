import Button from '@components/Button/Button';
import CardTypeIV from '@components/Cards/CardTypeIV/CardTypeIV';
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MyProjectSkeleton from '@views/Skeleton/MyProjectsSkeleton/MyProjectSkeleton';
import assets from 'assets';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import MyProjectsFunc from './functionality/MyProjects.func';
import styles from './layout/MyProjectsView.styles.default';

const useStyles = makeStyles(styles);

const MyProjectsView = () => {
    const classes = useStyles();
    const { icons: { AddIcon } } = assets;
    const { useMyProjectsHook } = MyProjectsFunc;
    const {
        loading, myProjectList, handleOpenProjectDialog, handleCardClick, loadMoreProjects, nextProjectsLength,
    } = useMyProjectsHook();

    const {
        isMobile,
    } = useDeviceTypeHook();
    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <Typography
                            type="heading-2"
                        >
                            My Projects
                        </Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.addProjectWrapper}>
                        {isMobile ? (<AddIcon onClick={handleOpenProjectDialog} />)
                            : (
                                <Button
                                    type="icon-btn"
                                    startIcon={<AddIcon />}
                                    onClick={handleOpenProjectDialog}
                                >New Project
                                </Button>
                            )}
                    </Grid>
                </Grid>
                {loading ? <MyProjectSkeleton xs={6} length={6} />
                    : (
                        <>
                            <Grid container marginTop={4} classes={{ root: classes.heightWrapper }} rowSpacing={1} columnSpacing={3}>
                                {
                                    myProjectList && myProjectList?.length > 0 ? myProjectList?.slice(0, nextProjectsLength)?.map((projectList) => (
                                        <CardTypeIV
                                            key={projectList?.id}
                                            projectId={projectList?.id}
                                            image={projectList?.imageUri}
                                            noOfAssets={projectList?.media_data?.totalAssets || 0}
                                            projectName={projectList?.name}
                                            projectDate={projectList?.created_at}
                                            handleRedirect={() => handleCardClick(`/projects/${ projectList?.id }`, {}, `/projects/${ projectList?.id }`, { title: projectList?.name, project_id: projectList?.id })}
                                        />
                                    )) : (
                                        <Grid item xs={12} className={classes.noProjectWrapper}>
                                            <div>
                                                <Typography
                                                    type="heading"
                                                >
                                                    No Project Found
                                                </Typography>
                                            </div>
                                        </Grid>
                                    )
                                }

                            </Grid>
                            <div className={classes.seeAllText}>
                                {myProjectList?.length > nextProjectsLength && (
                                    <Typography type="link" onClick={loadMoreProjects} className={classes.seeAllLink}>See More</Typography>
                                )}
                            </div>
                        </>
                    )}
            </Grid>
        </div>
    );
};

export default MyProjectsView;
