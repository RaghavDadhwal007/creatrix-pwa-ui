import Button from '@components/Button/Button';
import CardTypeIII from '@components/Cards/CardTypeIII/CardTypeIII';
import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import assets from 'assets';
import withTokenWrapper from 'hooks/withTokenWrapperHook';
import styles from './layout/MyProjectsPageView.styles.default';

const useStyles = makeStyles(styles);

const MyProjectsPageView = () => {
    const classes = useStyles();

    const { icons: { AddIcon } } = assets;
    return (
        <div className={classes.mainWrapper}>
            <Grid
                container
                className={classes.headingWrapper}
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item xs={6} className={classes.headingTextWrapper}>
                    <Grid container alignItems="center">
                        <Grid
                            item
                            xs={3}
                        >
                            <Typography className={classes.heading}>My Projects</Typography>
                        </Grid>
                        <Grid item className={classes.verticalLine} />
                    </Grid>
                </Grid>
                <Grid item xs={6} className={classes.addProjectWrapper}>
                    <Button className={classes.addProjectButton} startIcon={<AddIcon />}>New Project</Button>
                </Grid>
            </Grid>
            <Grid container>
                {Array(8).fill({}).map((item) => (
                    <Grid
                        key={item}
                        item
                        md={6}
                        lg={4}
                        xl={3}
                    >
                        <CardTypeIII
                            projectName="Project Name"
                            noOfAssets="3"
                            date="17/08/22"
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default withTokenWrapper(MyProjectsPageView);
