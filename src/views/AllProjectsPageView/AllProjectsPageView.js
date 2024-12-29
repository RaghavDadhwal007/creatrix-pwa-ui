import CardTypeII from '@components/Cards/CardTypeII.js/CardTypeII';
import DynamicBreadcrumbs from '@components/DynamicBreadcrumbs/DynamicBreadcrumbs';
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MyProjectSkeleton from '@views/Skeleton/MyProjectsSkeleton/MyProjectSkeleton';
import withTokenWrapper from 'hooks/withTokenWrapperHook';
import AllProjectsViewFunc from './functionality/AllProjectView.func';
import styles from './layout/AllProjectsPageView.styles.default';

const useStyles = makeStyles(styles);

const AllProjectsPageView = () => {
    const classes = useStyles();
    const { useAllProjectsViewHook } = AllProjectsViewFunc;
    const {
        projectData, loading, projectName,
    } = useAllProjectsViewHook();

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
                            <Typography type="heading-2">{projectName}</Typography>
                            <div className={classes.verticalLine} />
                            <DynamicBreadcrumbs />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            <Grid container>
                {loading ? <MyProjectSkeleton length={8} xs={3} />
                    : (
                        <>
                            {
                                projectData?.data?.length > 0 ? projectData?.data?.map((project) => (
                                    <CardTypeII
                                        key={project?.id}
                                        projectName={project?.name}
                                        noOfAssets={project?.media_data?.totalAssets || 0}
                                        date={project?.created_at}
                                        projectId={project?.id}
                                    />
                                )) : (
                                    <Grid item xs={12} className={classes.noProjectWrapper}>
                                        <div>
                                            <Typography
                                                type="heading"
                                            >
                                                No Assets Found
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

export default withTokenWrapper(AllProjectsPageView);
