import Button from '@components/Button/Button';
import CircularLoading from '@components/CircularLoading/CircularLoading';
import TextField from '@components/TextField/TextField';
import Typography from '@components/Typography/Typography';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { makeStyles } from '@mui/styles';
import useUploadFileHook from 'hooks/useUploadFileHook';
import Image from 'next/image';
import CardTypeIII from 'src/components/Cards/CardTypeIII/CardTypeIII';
import AuthFormWrapper from '../AuthFormWrapper/AuthFormWrapper';
import MyDetailsFunc from './functionality/MyDetails.func';
import styles from './layout/MyDetails.styles';
import { FormSkeleton, ImageSkeleton, PhoneSkeleton } from './MyDetails.skeleton';

const useStyles = makeStyles(styles);
const MyDetails = () => {
    const classes = useStyles();
    const { useMyDetailsHook } = MyDetailsFunc;

    const {
        formikProps, fieldTypes, handleUpdate, handleEditProfileImageHandler, profileImage,
        loading, imageLoading,
    } = useMyDetailsHook();

    const {
        handleSetFile,
        fileObj,
    } = useUploadFileHook(handleEditProfileImageHandler);
    const {
        touched = [],
        errors = [],
        values = [],
        handleBlur,
        handleChange,
    } = formikProps;
    const phone = fieldTypes.find((item) => item.name === 'ph_number');
    return (
        <CardTypeIII className={classes.root} title="My details">
            <div className={classes.mydetails_Profile}>
                {loading || imageLoading ? (
                    <ImageSkeleton />
                ) : (
                    <>
                        <Image
                            src={fileObj?.fileUrl || profileImage}
                            alt="User Avatar"
                            width={150}
                            height={150}
                            className={classes.userAvatar}
                        />
                        <div className={classes.uploadImageWrapper}>
                            <input
                                type="file"
                                accept="image/*"
                                className={classes.fileInputStyle}
                                onChange={handleSetFile}
                            />
                        </div>
                        <div className={classes.cameraImageWrapper}>
                            <CameraAltIcon className={classes.iconWrapper} fontSize="large" />
                        </div>
                    </>
                )}
            </div>
            <form onSubmit={handleUpdate}>
                {loading ? (
                    <FormSkeleton />
                ) : (
                    <AuthFormWrapper
                        formikProps={formikProps}
                        formFields={fieldTypes.filter((item) => item.name !== 'ph_number')}
                    />

                )}
                <Typography type="heading" className={classes.phoneHeadingWrapper}>Phone Number</Typography>
                <Typography type="sub-title1" className={classes.phoneContentWrapper}>Your number can be used to deliver important notifications, help you sign in, and more</Typography>
                {loading ? (
                    <PhoneSkeleton />
                ) : (
                    <div>
                        <TextField
                            error={errors[ phone?.name ] && touched[ phone?.name ]}
                            helperText={(errors[ phone?.name ] && touched[ phone?.name ]) && errors[ phone?.name ]}
                            onChange={handleChange}
                            onInput={handleChange}
                            onBlur={handleBlur}
                            label={phone?.label}
                            isRequired={phone?.isRequired}
                            placeholder={phone?.placeholdertext}
                            name={phone?.name}
                            value={phone?.value || values[ phone?.name ]}
                            type={phone?.type}
                            fullWidth
                            textFieldType={phone?.textFieldType}
                            autoComplete="off"
                            className={phone.className || ''}
                            readOnly={phone?.readOnly}
                            disabled={phone?.disabled}
                        />
                    </div>

                )}
                <div className={classes.signinview_formsubmitbtnwrapper}>
                    <Button type="primary-btn" disabled={loading || imageLoading}>
                        {loading ? <CircularLoading size="2rem" color="white" /> : 'Edit Profile / Save Changes'}
                    </Button>
                </div>
            </form>

        </CardTypeIII>
    );
};
export default MyDetails;
