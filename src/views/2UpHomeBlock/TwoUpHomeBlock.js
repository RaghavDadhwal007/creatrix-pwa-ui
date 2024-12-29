import FAQBlock from '@components/FAQBlock/FAQBlock';
import UnlimitedCreativeBlock from '@components/UnlimitedCreativeBlock/UnlimitedCreativeBlock';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './layout/TwoUpHomeBlock.style.default';

const useStyles = makeStyles(styles);

const TwoUpHomeBlock = ({
    data,
}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainContainer}>
            <Grid container className={classes.mainTwoUpBlocks}>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <UnlimitedCreativeBlock data={data?.creative_block} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <FAQBlock faqData={data?.faq_block} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TwoUpHomeBlock;
