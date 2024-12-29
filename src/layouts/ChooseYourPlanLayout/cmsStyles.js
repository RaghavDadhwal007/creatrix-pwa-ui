const linkStyle = (planData) => {
    const linkBg = planData?.link?.link_style?.background_color;
    const linkBorderColor = planData?.link?.link_style?.border_color;
    const linkBorderRadius = planData?.link?.link_style?.border_radius;
    const linkBorderWidth = planData?.link?.link_style?.border_width;
    const linkColor = planData?.link?.link_style?.color;
    const linkFontSize = planData?.link?.link_style?.font_size;
    const linkPaddingTop = planData?.link?.link_style?.padding?.top;
    const linkPaddintBottom = planData?.link?.link_style?.padding?.bottom;
    const linkPaddingRight = planData?.link?.link_style?.padding.right;
    const linkPaddingLeft = planData?.link?.link_style?.padding.left;
    const style = {
        backgroundColor: linkBg,
        borderColor: linkBorderColor,
        borderRadius: linkBorderRadius,
        borderWidth: linkBorderWidth,
        color: linkColor,
        fontSize: linkFontSize,
        paddingTop: linkPaddingTop,
        paddingBottom: linkPaddintBottom,
        paddingRight: linkPaddingRight,
        paddingLeft: linkPaddingLeft,
    };
    return {
        style,
    };
};

export default linkStyle;
