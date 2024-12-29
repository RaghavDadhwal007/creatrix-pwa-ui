import PasswordValidations from '@components/PasswordValidations/PasswordValidations';
import TextField from '@components/TextField/TextField';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './layout/AuthFormWrapper.styles.default';

const useStyles = makeStyles(styles);

const AuthFormWrapper = ({
    formFields = [],
    formikProps,
    handleInputFocus = () => {},
    passwordValidations,
    passwordValidation,
    showValidation,
    isModal,
    ...otherProps
}) => {
    const classes = useStyles();

    const {
        touched = [],
        errors = [],
        values = [],
        handleBlur,
        handleChange,
    } = formikProps;
    return (
        <Grid container spacing={2}>
            {formFields.map((field) => {
                switch (field.type) {
                    case 'text':
                        return (
                            <Grid className={otherProps.isModal && classes.spaceWrapper} key={field?.id} item md={field?.rowwidth || 12} sm={12} xs={12}>
                                <div
                                    key={field?.id}
                                    className={classes.fieldWrapper}
                                >
                                    <TextField
                                        error={errors[ field?.name ] && touched[ field?.name ]}
                                        helperText={(errors[ field?.name ] && touched[ field?.name ]) && errors[ field?.name ]}
                                        onChange={handleChange}
                                        onInput={handleChange}
                                        onBlur={handleBlur}
                                        label={field?.label}
                                        isRequired={field?.isRequired}
                                        name={field?.name}
                                        value={field?.value || values[ field?.name ]}
                                        type={field?.type}
                                        fullWidth
                                        textFieldType={field?.textFieldType}
                                        autoComplete="off"
                                        className={field.className || ''}
                                        readOnly={field?.readOnly}
                                        disabled={field?.disabled}
                                        onFocus={() => {
                                            handleInputFocus();
                                            if (field?.onFocus) field?.onFocus();
                                        }}
                                        placeholder={field?.placeholderText}
                                        multiline={field?.textBox}
                                        {...otherProps}
                                    />
                                </div>
                            </Grid>
                        );
                    default:
                        return (
                            <>
                                <Grid key={field?.id} item md={field?.rowwidth || 12} sm={12} xs={12}>
                                    <div
                                        key={field?.id}
                                        className={classes.fieldWrapper}
                                    >
                                        <TextField
                                            error={errors[ field?.name ] && touched[ field?.name ]}
                                            helperText={(errors[ field?.name ] && touched[ field?.name ]) && errors[ field?.name ]}
                                            onChange={handleChange}
                                            onInput={handleChange}
                                            textFieldType={field?.textFieldType}
                                            onBlur={handleBlur}
                                            label={field?.label}
                                            isRequired={field?.isRequired}
                                            name={field?.name}
                                            value={field?.value || values[ field?.name ]}
                                            type={field?.type}
                                            fullWidth
                                            autoComplete="off"
                                            onFocus={() => {
                                                handleInputFocus();
                                                if (field?.onFocus) field?.onFocus();
                                            }}
                                            {...otherProps}
                                        />
                                    </div>
                                </Grid>
                                {field?.showValidationsRule && (
                                    <Grid key={field?.id} item md={12} sm={12} xs={12}>
                                        <PasswordValidations
                                            validations={passwordValidations}
                                            passwordValidation={passwordValidation}
                                            showValidation={showValidation}
                                            isModal={isModal}
                                        />
                                    </Grid>
                                )}
                            </>
                        );
                }
            })}
        </Grid>
    );
};

export default AuthFormWrapper;
