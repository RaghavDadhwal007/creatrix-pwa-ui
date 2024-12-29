import TextField from '@components/TextField/TextField';
import Typography from '@components/Typography/Typography';
import { makeStyles } from '@mui/styles';
import InnerModal from '../InnerModal/InnerModal';
import styles from './layout/AddProject.styles.default';

const useStyles = makeStyles(styles);

const AddProject = () => {
    const classes = useStyles();

    return (
        <InnerModal buttonTitle="Add Project">
            <Typography className={classes.textWrapper}>
                Add New Project
            </Typography>
            <TextField label="Project Name" />
        </InnerModal>
    );
};

export default AddProject;
