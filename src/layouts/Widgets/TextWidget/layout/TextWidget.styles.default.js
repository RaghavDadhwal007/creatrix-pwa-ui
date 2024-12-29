const styles = (() => ({
    linkWrapper: ({ fontSize, fontColor }) => ({
        '&.link': {
            fontSize: `${ fontSize || 11 }px`,
            color: `${ fontColor } `,
        },
    }),
    // linkWrapper: {
    //     fontColor: (props) => props.fontColor,
    //     fontSize: (props) => props.fontSize,
    //     color: (props) => props.fontColor,
    //     backgroundColor: 'red',
    // },
    // linkWrapper: (props) => ({
    //     fontColor: props.fontColor,
    //     fontSize: props.fontSize,
    //     backgroundColor: 'red',
    //     color: props.fontColor,
    // }),
}));

export default styles;
