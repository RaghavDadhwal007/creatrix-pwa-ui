const styles = ((theme) => ({
    textStyle: {
        color: theme.palette.white,
        '&.text-muted': {
            opacity: 0.5,
        },
        '&.link': {
            cursor: 'pointer',
            fontSize: '1rem',
            '&:hover': {
                textDecoration: 'underline',
            },
            [ theme.breakpoints.up('sm') ]: {
                fontSize: '.7rem',
            },
            [ theme.breakpoints.up('md') ]: {
                fontSize: '.8rem',
            },
            [ theme.breakpoints.up('lg') ]: {
                fontSize: '1rem',
            },
        },
        '&.underline': {
            cursor: 'pointer',
            fontSize: '1rem',

            textDecoration: 'underline',

            [ theme.breakpoints.up('sm') ]: {
                fontSize: '1rem',
            },
            [ theme.breakpoints.up('md') ]: {
                fontSize: '.9rem',
            },
            [ theme.breakpoints.up('lg') ]: {
                fontSize: '1rem',
            },
        },
        '&.caption': {
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '19px',
            color: theme.palette.labelColor,
        },
        '&.formheading': {
            color: theme.palette.typographyColors.headingColor,
            fontFamily: theme.typography.heading,
            fontWeight: '600',
            fontSize: '26px',
            lineHeight: '39px',
            [ theme.breakpoints.down('md') ]: {
                fontWeight: '500',
                fontSize: '20px',
            },
            [ theme.breakpoints.only('laptop') ]: {
                fontWeight: '500',
                fontSize: '22px',
            },
            [ theme.breakpoints.only('lg') ]: {
                fontWeight: '600',
                fontSize: '24px',
            },

        },
        '&.heading-1': {
            color: theme.palette.cardColors.bgColor,
            fontWeight: '800',
            fontSize: '36px',
            lineHeight: '44px',
            [ theme.breakpoints.up('sm') ]: {
                fontSize: '30px',
            },
            [ theme.breakpoints.up('md') ]: {
                fontSize: '36px',
            },
        },
        '&.heading-2': {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: '1.33',
            letterSpacing: '0.009em',
            [ theme.breakpoints.down('laptoplg') ]: {
                fontSize: '1.5rem',
            },
            [ theme.breakpoints.down('425') ]: {
                fontSize: '1.3rem',
            },
            [ theme.breakpoints.down('374') ]: {
                fontSize: '1rem',
            },

        },
        '&.heading-3': {
            fontSize: '1.5rem !important',
            color: theme.palette.white,
            [ theme.breakpoints.down('laptoplg') ]: {
                fontSize: '1.2rem !important',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '1rem !important',
            },
        },
        '&.big-title': {
            fontWeight: 400,
            fontSize: '3rem',
            lineHeight: '1.16',
            letterSpacing: '0em',
        },
        '&.heading': {
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: '1.33',
            letterSpacing: '0em',
            color: theme.palette.typographyColors.headingColor,
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '1.2rem',
            },
        },
        '&.sub-title1': {
            fontWeight: 400,
            fontSize: '0.85rem',
            lineHeight: '1.75',
            letterSpacing: '0.009em',
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '0.8rem',
            },
            [ theme.breakpoints.down('md') ]: {
                fontSize: '0.6rem',
            },
        },
        '&.sub-title2': {
            fontWeight: 500,
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '0.70rem',
            },
            [ theme.breakpoints.down('md') ]: {
                fontSize: '0.50rem',
            },
            [ theme.breakpoints.down('sm') ]: {
                fontSize: '0.70rem',
                lineHeight: '1.5',
                letterSpacing: '0.030em',
            },
        },
        '&.body1': {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.5',
            letterSpacing: '0.009em',
        },
        '&.body3': {
            color: theme.palette.cardColors.planCardBodyTwoColor,
            fontWeight: 500,
        },
        '&.body4': {
            color: theme.palette.white,
            fontWeight: 500,
        },
        '&.body5': {
            color: theme.palette.lightGrey,
            fontSize: '0.8rem',
            fontWeight: '300',
            lineHeight: '25px',
        },
        '&.caption-1': {
            cursor: 'pointer',
            fontSize: '14px',
            textDecoration: 'underline',
            textAlign: 'center',
            lineHeight: '1.5',
            letterSpacing: '0.009em',
            color: theme.palette.cardColors.bgColor,
            '&:hover': {
                textDecoration: 'underline',
            },
            [ theme.breakpoints.down('md') ]: {
                fontSize: '12px',
            },
        },
        '&.sub-title3': {
            color: theme.palette.cardColors.rememberTxtColor,
            fontSize: '16px',
            textAlign: 'center',
            [ theme.breakpoints.down('md') ]: {
                fontSize: '14px',
            },
        },
        '&.caption3': {
            fontSize: '14px',
        },
        '&.caption4': {
            fontSize: '16px',
            lineHeight: '32px',
            color: theme.palette.footerColors.footerTxtColor,
            [ theme.breakpoints.down('920') ]: {
                lineHeight: '30px',
                fontSize: '14px',
            },
        },
        '&.title-4': {
            color: theme.palette.white,
            fontWeight: 600,
            fontSize: '2.7rem',
            lineHeight: '66px',
        },
        '&.subtitle-4': {
            color: theme.palette.white,
            fontWeight: 500,
            fontSize: '1.5rem',
            textAlign: 'center',
            padding: '50px 0px 50px 0px',
            position: 'relative',
            [ theme.breakpoints.down('xl') ]: {
                bottom: '40px',
            },
            [ theme.breakpoints.down('laptoplg') ]: {
                bottom: '45px',
                fontSize: '1.3rem',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '1rem',
            },
        },
        '&.sub-title4': {
            fontSize: '18px',
            lineHeight: '34px',
            color: theme.palette.buttonColors.btnTxtColor,
        },
        '&.link1': {
            fontSize: '16px',
            lineHeight: '42px',
            color: theme.palette.footerColors.footerTxtColor,
            cursor: 'pointer',
            '&:hover': {
                textDecoration: 'underline',
            },
            [ theme.breakpoints.down('920') ]: {
                lineHeight: '30px',
                fontSize: '14px',
            },
            [ theme.breakpoints.down('768') ]: {
                lineHeight: '36px',
                fontSize: '16px!important',
            },
        },
        '&.big-title-1': {
            fontSize: '58px',
            lineHeight: '87px',
            fontWeight: '700',
            [ theme.breakpoints.down('990') ]: {
                fontSize: '45px',
                lineHeight: '55px',
            },
            [ theme.breakpoints.down('780') ]: {
                fontSize: '42px',
                lineHeight: '55px',
            },
        },
        '&.sub-title-5': {
            fontSize: '22px',
            lineHeight: '33px',
            color: theme.palette.errorTxtColor,
            [ theme.breakpoints.down('780') ]: {
                fontSize: '22px',
            },
        },
        '&.sub-title-6': {
            fontSize: '30px!important',
            lineHeight: '45px',
            textAlign: 'center',
            fontWeight: '500',
            [ theme.breakpoints.down('780') ]: {
                fontSize: '22px',
            },
        },
        '&.sub-title7': {
            color: theme.palette.black,
            fontWeight: 600,
            fontSize: '1.2rem',
        },
        // planCardStyles
        '&.planCardTitle': {
            fontWeight: 600,
            fontSize: '1.5rem',
            color: theme.palette.blackShade,
            [ theme.breakpoints.down('laptoplg') ]: {
                fontSize: '1.1rem',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '1rem',
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '1.5rem',
            },
        },
        '&.selectedPlanCardTitle': {
            fontWeight: 600,
            fontSize: '1.5rem',
            color: theme.palette.white,
            [ theme.breakpoints.down('laptoplg') ]: {
                fontSize: '1.1rem',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '0.8rem',
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '1.5rem',
            },
        },
        '&.planCardShortDesc': {
            color: theme.palette.blackShade,
            textAlign: 'center',
            fontSize: '1.1rem',
            width: '80%',
            [ theme.breakpoints.down('laptoplg') ]: {
                fontSize: '0.9rem',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '0.8rem',
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '1.1rem',
            },
        },
        '&.selectedPlanCardShortDesc': {
            color: theme.palette.white,
            textAlign: 'center',
            fontSize: '1.1rem',
            width: '80%',
            [ theme.breakpoints.down('laptoplg') ]: {
                fontSize: '0.9rem',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '0.65rem',
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '1.1rem',
            },
        },
        '&.planCardPrice': {
            color: theme.palette.purple,
            fontWeight: 800,
            fontSize: '2.2rem',
            textAlign: 'center',
            [ theme.breakpoints.down('xl') ]: {
                fontSize: '1.7rem',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '1rem',
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '2.2rem',
            },
        },
        '&.selectedCardPrice': {
            color: theme.palette.white,
            fontWeight: 800,
            fontSize: '3rem',
            paddingTop: '10px',
            textAlign: 'center',
            [ theme.breakpoints.down('xl') ]: {
                fontSize: '1.7rem',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '1rem',
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '3rem',
            },
        },
        '&.planCardBody': {
            color: `${ theme.palette.purple } !important`,
            fontWeight: 600,
            fontSize: '1rem',
            textAlign: 'center',
            width: '86%',
            padding: '15px',
            [ theme.breakpoints.down('xl') ]: {
                padding: '15px 30px 10px 30px',
                fontSize: '1rem',
            },
            [ theme.breakpoints.down('laptoplg') ]: {
                padding: '15px 30px 10px 30px',
                fontSize: '0.8rem',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '0.7rem',
                padding: '5px 10px 10px 10px',
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '1rem',
            },
            '& ul': {
                textAlign: 'left',
                fontSize: '16px',
                margin: '0 ',
                listStyle: 'none',
                color: theme.palette.cardColors.cardCheckListColor,
                [ theme.breakpoints.down('laptoplg') ]: {
                    fontSize: '1rem',
                },
                [ theme.breakpoints.down('laptop') ]: {
                    fontSize: '0.8rem',
                },
                '& li': {
                    padding: '10px 0px',
                    position: 'relative',
                    fontWeight: '600',
                    [ theme.breakpoints.down('laptop') ]: {
                        padding: '5px 0px',
                        fontSize: '0.65rem',
                    },
                    [ theme.breakpoints.down('tablet') ]: {
                        fontSize: '1rem',
                    },
                },
                '& li::before': {
                    content: '"\u2713"',
                    position: 'absolute',
                    left: '-30px',
                },
            },
            '& p': {
                margin: '0px',
            },
            '& a': {
                textDecoration: 'underline',
            },
            '& strong': {
                color: theme.palette.cardColors.cardCheckListColor,
                fontSize: '30px',
            },
        },
        '&.selectedPlanCardBody': {
            color: `${ theme.palette.white } !important`,
            fontWeight: 600,
            fontSize: '1rem',
            textAlign: 'center',
            width: '86%',
            padding: '6px 15px',
            [ theme.breakpoints.down('xl') ]: {
                padding: '15px 30px 10px 30px',
                fontSize: '1rem',
            },
            [ theme.breakpoints.down('laptoplg') ]: {
                fontSize: '0.65rem',
                padding: '0px 30px',
                width: '90%',
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '1rem',
            },
            '& ul': {
                textAlign: 'left',
                fontSize: '16px',
                margin: '0 ',
                listStyle: 'none',
                color: theme.palette.white,
                [ theme.breakpoints.down('laptoplg') ]: {
                    fontSize: '0.8rem',
                    paddingTop: '2em',
                },
                [ theme.breakpoints.down('laptop') ]: {
                    fontSize: '0.65rem',
                },

                '& li': {
                    padding: '10px 0px',
                    position: 'relative',
                    fontWeight: '600',
                    [ theme.breakpoints.down('laptop') ]: {
                        padding: '5px 0px',
                        fontSize: '0.65rem',

                    },
                },

                '& li::before': {
                    content: '"\u2713"',
                    position: 'absolute',
                    left: '-30px',
                },
            },
            '& p': {
                margin: '0px',
            },
            '& a': {
                textDecoration: 'underline',
            },
            '& strong': {
                color: theme.palette.white,
                fontSize: '30px',
            },
        },
        '&.unlimitedLabel': {
            color: `${ theme.palette.blackShade } !important`,
            fontSize: '1.5rem',
            fontWeight: 600,
            [ theme.breakpoints.down('laptoplg') ]: {
                fontSize: '1.3rem',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '1rem',
            },
        },
        '&.selectedUnlimitedLabel': {
            fontSize: '1.5rem',
            fontWeight: 600,
            [ theme.breakpoints.down('laptoplg') ]: {
                fontSize: '1.3rem',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '1rem',
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '1.5rem',
            },
        },
        '&.planCardBody-2': {
            textAlign: 'center',
            fontWeight: 600,
            width: '80%',
            [ theme.breakpoints.down('laptoplg') ]: {
                fontSize: '0.9rem',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '0.65rem',
            },
            [ theme.breakpoints.down('tablet') ]: {
                fontSize: '1rem',
            },
            '& a': {
                textDecoration: 'underline',
                position: 'relative',
                bottom: '20px',
            },
        },
        '&.selectedPlanCardBody-2': {
            color: `${ theme.palette.white } !important`,
            textAlign: 'center',
            fontWeight: 600,
            width: '80%',
            [ theme.breakpoints.down('laptoplg') ]: {
                fontSize: '0.8rem',
            },
            [ theme.breakpoints.down('laptop') ]: {
                fontSize: '0.65rem',
            },
            '& a': {
                textDecoration: 'underline',
                position: 'relative',
                bottom: '20px',
            },
            '& p': {
                [ theme.breakpoints.down('laptop') ]: {
                    position: 'relative',
                    bottom: '20px',
                },
            },
        },
        '&.tag-1': {
            color: theme.palette.fadeWhiteColor,
            fontSize: '1rem',
            padding: '0px 20px',
            borderRadius: '24px',
            cursor: 'pointer',
            [ theme.breakpoints.down('laptoplg') ]: {
                fontSize: '0.8rem',
                padding: '0 15px',
            },
            [ theme.breakpoints.down('laptop') ]: {
                padding: '0 8px',
                fontSize: '0.7rem',
            },
        },
        '&.tag-1:hover': {
            color: theme.palette.black,
            backgroundColor: theme.palette.white,
        },
        '&.link2': {
            fontSize: '1.5rem',
            color: theme.palette.black,
            cursor: 'pointer',
            padding: '1.1rem 0',
            fontWeight: 500,
        },
        '&.link2:hover': {
            textDecoration: 'underline',
        },
        '&.sub-title8': {
            color: theme.palette.secondaryColor,
            fontSize: '1.125rem',
            textTransform: 'capitalize',
            [ theme.breakpoints.down('md') ]: {
                fontSize: '1rem',
            },
        },
        '&.caption5': {
            color: theme.palette.white,
            fontSize: '0.9rem',
            textTransform: 'capitalize',
            [ theme.breakpoints.down('850') ]: {
                fontSize: '0.7rem',
            },
        },
    },
}));

export default styles;
