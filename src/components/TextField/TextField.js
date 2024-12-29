import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@components/Button/Button';
import assets from 'assets';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormLabel, TextField as MuiTextField, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useDeviceTypeHook from 'hooks/customDeviceTypeHook';
import TextFieldFunc from './functionality/TextField.func';
import styles from './layout/TextField.styles.default';

const useStyles = makeStyles(styles);

const TextField = ({
    textFieldType = 'default', className, isRequired = false, label, onChange, isModal = false, onFocus = () => {}, ...otherProps
}) => {
    const classes = useStyles();
    const { icons: { ArrowIcon } } = assets;
    const { isMobile } = useDeviceTypeHook();

    const { useTextField } = TextFieldFunc;
    const {
        setIsHidden,
        isHidden, typeOfField,
        value,
        setValue,
    } = useTextField({
        otherProps,
    });
    const inputsRender = () => {
        if (otherProps.type === 'password') {
            return (
                <div className={classes.iconWrapper}>
                    <Tooltip title="" onClick={() => { setIsHidden(!isHidden); }}>
                        {isHidden ? <VisibilityOffIcon className={textFieldType === 'darkTextField' ? classes.iconColorWrapper : classes.iconColorDefault} /> : <VisibilityIcon className={textFieldType === 'darkTextField' ? classes.iconColorWrapper : classes.iconColorDefault} />}
                    </Tooltip>
                </div>
            );
        }
        if (className === 'footerTextfield') {
            return (
                <div className={classes.buttonIcon}>
                    <Button type="iconBtn"><ArrowIcon /></Button>
                </div>
            );
        }
        return null;
    };

    const handleChange = (inputValue) => {
        if (otherProps.type === 'password' && (/\s/g.test(inputValue))) return;
        setValue(inputValue);
    };

    return (
        <div>
            <div className={isModal ? classes.spaceWrapper : classes.labelWrapper}>
                <FormLabel className={classes.formLabel}>{label}{(isRequired && label) && ' *'}</FormLabel>
            </div>
            <MuiTextField
                {...otherProps}
                placeholder={isMobile || (className === 'darkTextField2') ? otherProps.placeholder : ''}
                id="mui_textField"
                type={typeOfField}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={onChange}
                className={textFieldType === 'darkTextField' ? `${ classes.textFieldDark } ${ otherProps?.multiline && 'textBox' }`  : `${ classes.textFieldDefault } ${ className } ${ otherProps?.multiline && 'textBox' }`}
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                fullWidth
                InputProps={{
                    endAdornment: inputsRender(),
                    classes: { notchedOutline: classes.noBorder },
                    readOnly: otherProps.readOnly,
                }}
                onFocus={onFocus}
                multiline={otherProps?.multiline}
            />
        </div>
    );
};

export default TextField;
