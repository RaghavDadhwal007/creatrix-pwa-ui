import Typography from '@components/Typography/Typography';
import { Breadcrumbs, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import withTokenWrapper from 'hooks/withTokenWrapperHook';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@components/Link/Link';
import Button from '@components/Button/Button';
import MyProjectSkeleton from '@views/Skeleton/MyProjectsSkeleton/MyProjectSkeleton';
import assets from 'assets';
import CardTypeIV from '@components/Cards/CardTypeIV/CardTypeIV';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import styles from './layout/AllProjects.styles.default';
import useAllProjectsHook from './functionality/AllProjects.func';

const useStyles = makeStyles(styles);

const AllProjects = () => {
    const classes = useStyles();
    const { icons: { AddIcon } } = assets;
    const { isMobile } = useDeviceTypeHook();

    const {
        projectData, loading, handleRedirect, handleOpenProjectDialog, navigationTabs,
    } = useAllProjectsHook();

    return (
        <div className={classes.mainWrapper}>
            <Grid
                container
                className={classes.headingWrapper}
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item xs={10} className={classes.headingTextWrapper}>
                    <Grid container alignItems="center" className={classes.container}>
                        <Grid
                            item
                            xs={12}
                            className={classes.headingBlock}
                        >
                            <Typography type="heading-2">All Projects</Typography>
                            <div className={classes.verticalLine} />
                            <Breadcrumbs separator={<NavigateNextIcon className={classes.breadCrumbIcon} />}>
                                {navigationTabs.map((item, index) => (navigationTabs?.length - 1 === index ? <Typography>All Projects</Typography> : (
                                    <Link underline="none" key={item?.id} href={item?.href}>
                                        <Typography type="link" key={item.id}>
                                            {item.title}
                                        </Typography>
                                    </Link>
                                )))}
                            </Breadcrumbs>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} className={classes.addProjectWrapper}>
                    {isMobile ? <AddIcon onClick={handleOpenProjectDialog} /> : (
                        <Button
                            type="icon-btn"
                            startIcon={<AddIcon />}
                            onClick={handleOpenProjectDialog}
                        >New Project
                        </Button>
                    )}
                </Grid>
            </Grid>
            <Grid container columnSpacing={5} rowSpacing={5}>
                {loading ? <MyProjectSkeleton length={8} xs={3} />
                    : (
                        <>
                            {
                                projectData?.length > 0 ? projectData?.map((project) => (
                                    <CardTypeIV
                                        key={project?.id}
                                        image={project?.imageUri}
                                        noOfAssets={project?.totalAssets}
                                        projectName={project?.name}
                                        projectDate={project?.created_at}
                                        handleRedirect={() => handleRedirect(`/projects/${ project?.id }`, { project_name: project?.name }, `/projects/${ project?.id }`)}
                                    />
                                )) : (
                                    <Grid item xs={12} className={classes.noProjectWrapper}>
                                        <div>
                                            <Typography
                                                type="heading"
                                            >
                                                No Projects Found
                                            </Typography>
                                        </div>
                                    </Grid>
                                )
                            }

                        </>
                    )}
            </Grid>
        </div>
    );
};

export default withTokenWrapper(AllProjects);
