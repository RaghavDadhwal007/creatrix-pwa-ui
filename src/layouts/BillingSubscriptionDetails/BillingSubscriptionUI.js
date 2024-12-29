import Button from '@components/Button/Button';
import Typography from '@components/Typography/Typography';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import {
    Card,
    CardContent,
    Grid,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';

const BillingSubscriptionUI = ({
    classes,
    billingDetails,
    belowLargeDevice,
}) => {
    // for now its hardcoded, Will make dynamic soon
    const tableHeaderData = [
        {
            id: 1,
            value: 'Invoice ID',
        },
        {
            id: 2,
            value: 'Plans',
        },
        {
            id: 3,
            value: 'Date / Time',
        },
        {
            id: 4,
            value: 'Price',
        },
    ];

    const tableRowData = [
        {
            id: 1,
            value: '498956',
        },
        {
            id: 2,
            value: 'lorem ipsum',
        },
        {
            id: 3,
            value: '15 Aug, 2020 | 18:45',
        },
        {
            id: 4,
            value: '$40',
        },
    ];

    return (
        <>
            <Typography
                type="heading-2"
            >
                My subscription
            </Typography>
            <div className={classes.accountDetails}>
                <div>Plan : {billingDetails?.description}</div>
                <div>Price : {billingDetails?.amount} per month</div>
                <div>Next renews on : {billingDetails?.duration_days}</div>
                <div>Downloads remaining for this month : {billingDetails?.download_limit}</div>
                <div>Account Status : {billingDetails?.recurring_eligible ? 'Active' : 'InActive'}</div>
            </div>
            {belowLargeDevice ? (
                <Grid container spacing={0.5}>
                    {[ 1, 2, 3 ].map((ky) => (
                        <Grid item key={ky} sm={6} xs={12}>
                            <Card className={classes.backgroundWrapper}>
                                <CardContent>
                                    {tableHeaderData.map((data, index) => (
                                        <>
                                            <Typography type="cardLabel">
                                                {data.value} :
                                            </Typography>
                                            <Typography className={classes.spaceWrapper} type="cardValue">
                                                {tableRowData[ index ].value}
                                            </Typography>
                                        </>
                                    ))}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <TableContainer className={classes.tableContainerWrapper}>
                    <Table size="small">
                        <TableHead className={classes.tableHeadWrapper}>
                            <TableRow>
                                {tableHeaderData.map((data) => (
                                    <TableCell
                                        className={classes.tableCellWrapper}
                                        key={data.id}
                                    >
                                        {data.value}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[ 1, 2, 3, 4, 5, 6, 7 ].map((row) => (
                                <TableRow key={row.name}>
                                    {tableRowData.map((data) => (
                                        <TableCell
                                            key={data.id}
                                            className={classes.tableBodyCellWrapper}
                                        >
                                            {data.value}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            <div className={classes.buttonsWrappper}>
                <div className={classes.buttonWrappper}>
                    <Button type="primary-btn">
                        Upgrade Your Plan
                    </Button>
                    <Button type="border-btns">
                        <ArrowCircleDownIcon className={classes.optionWrapper} />
                        Download PDF
                    </Button>
                </div>

                <Typography
                    type="underline"
                    className={classes.textWrappper}
                >
                    Cancel your plan
                </Typography>
            </div>
        </>
    );
};

export default BillingSubscriptionUI;
