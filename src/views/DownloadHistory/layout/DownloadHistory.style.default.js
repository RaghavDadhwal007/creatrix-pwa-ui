const styles = ((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        [ theme.breakpoints.down('laptop') ]: {
            margin: '0 auto',
        },
    },
    tableContainer: {
        '& thead tr th': {
            width: '15%',
        },
        '& thead tr th.heading': {
            width: '50%',
        },
        '& tbody tr td': {
            width: '15%',
        },
        '& tbody tr td.heading': {
            width: '50%',
        },
        '&.MuiTableContainer-root': {
            backgroundColor: 'transparent',
        },
        '& .MuiTableRow-root': {
            verticalAlign: 'top',
        },
        '& .MuiTableHead-root': {
            [ theme.breakpoints.down('mobilelg') ]: {
                display: 'table-caption',
            },
        },
    },
    tableHead: {
        '&.MuiTableCell-head': {
            color: theme.palette.white,
            fontWeight: 500,
            fontSize: '1rem',
            padding: '16px 16px 16px 0',
            [ theme.breakpoints.down('mobilelg') ]: {
                padding: '16px 8px 16px 0',
            },
        },
    },
    tableHeadIcon: {
        [ theme.breakpoints.down('mobilelg') ]: {
            display: 'flex',
            alignItems: 'center',
        },
    },
    tableCell: {
        '&.MuiTableCell-root': {
            color: theme.palette.white,
            padding: '16px 16px 16px 0',
            fontSize: '0.9rem',
        },
    },
    navContainer: {
        marginTop: '15px',
    },
    filterIcon: {
        position: 'relative',
        top: '4px',
    },
    spaceWrapper: {
        paddingRight: '3rem',
        [ theme.breakpoints.down('laptop') ]: {
            padding: '0px !important',
        },
        [ theme.breakpoints.down('tablet') ]: {
            maxWidth: '93%',
            width: '100%',
            margin: '0 auto',
        },
    },
    searchWrapper: {
        [ theme.breakpoints.down('tablet') ]: {
            width: '100%',
            maxWidth: '100%',
        },
    },
    spaceBlock: {
        justifyContent: 'space-between',
        alignItems: 'center',
        [ theme.breakpoints.down('tablet') ]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    SearchBar: {
        [ theme.breakpoints.down('tablet') ]: {
            maxWidth: '100%',
            padding: '7px 0 7px 20px',
            marginTop: '20px',
        },
        [ theme.breakpoints.down('mobilelg') ]: {
            marginTop: '10px',
        },
    },
}));

export default styles;
