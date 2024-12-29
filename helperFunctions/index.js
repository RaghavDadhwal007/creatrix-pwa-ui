function setAttributes(element, attributes) {
    Object?.keys(attributes)?.forEach((attr) => {
        element?.setAttribute(attr, attributes?.[ attr ]);
    });
}

const snakeToCamel = (str = '') => str.toLowerCase()?.replace(/([-_][a-z])/g, (group) => group
    .toUpperCase()
    .replace('-', '')
    .replace('_', ''));

const cmsClasses = (style) => {
    let styling = {};

    style.forEach((item) => {
        Object.entries(item).forEach(([ key, value ]) => {
            const keyOnCamelCase = snakeToCamel(key);
            styling = { ...styling, [ keyOnCamelCase ]: value[ key ] };
        });
    });

    return styling;
};

const passwordValidations = () => [
    {
        id: 1,
        text: 'One lowercase character',
        uid: 'lowercase',
    },
    {
        id: 2,
        text: 'One special character',
        uid: 'special',
    },
    {
        id: 3,
        text: 'One uppercase character',
        uid: 'uppercase',
    },
    {
        id: 4,
        text: '8 characters minimum',
        uid: 'minimum8',
    },
    {
        id: 5,
        text: 'One number',
        uid: 'number',
    },
];

const regExpressions = (str = '', uid) => {
    let flag = false;
    switch (uid) {
        case 'lowercase':
            flag = /(?=.*[a-z])/.test(str);
            break;

        case 'special':
            flag = /[*@!#%&()^~{}]+/.test(str);
            break;

        case 'uppercase':
            flag = /(?=.*[A-Z])/.test(str);
            break;

        case 'minimum8':
            flag = str.length > 7;
            break;

        case 'number':
            flag = /(?=.*\d)/.test(str);
            break;

        default:
            break;
    }
    return flag;
};

const handlePasswordValidation = (pass, setPassState) => {
    setPassState((prevState) => {
        const updatedState = {};
        Object.keys(prevState).forEach((key) => {
            updatedState[ key ] = regExpressions(pass, key);
        });
        return updatedState;
    });
};

const cmsStyles = (data) => {
    const styleObj = {};
    data.forEach((item) => {
        switch (Object.keys(item)[ 0 ]) {
            case 'background_color':
                styleObj.backgroundColor = item?.background_color?.background_color;
                return;
            case 'color':
                styleObj.color = item?.color?.color;
                return;
            case 'font_size':
                styleObj.fontSize = `${ item?.font_size?.font_size }rem`;
                return;
            case 'padding':
                styleObj.padding = `${ item?.padding?.top }px 1rem ${ item?.padding?.bottom }px 1rem`;
                return;
            case 'border_radius':
                styleObj.borderRadius = `${ item?.border_radius?.border_radius }px`;
                break;
            default:
        }
    });

    return styleObj;
};

/// To identify image types of jpg | jpeg | png returns boolean takes url as param  ///
const isImage = (url) => /\.(jpg|jpeg|png)$/.test(url);

// generates random heights //
const randomHeights = () => {
    const heights = [ 250, 300, 400, 500, 450, 550 ];
    const randomHeight =   heights[ Math.floor(Math.random() * heights.length) ];
    return randomHeight;
};

const helperFunctions = {
    setAttributes,
    cmsClasses,
    snakeToCamel,
    passwordValidations,
    regExpressions,
    handlePasswordValidation,
    cmsStyles,
    isImage,
    randomHeights,
};

export default helperFunctions;
