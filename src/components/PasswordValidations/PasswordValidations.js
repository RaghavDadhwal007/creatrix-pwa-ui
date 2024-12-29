import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import {
    Grid,
    List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { themeColor } from 'styles/theme/theme';
import styles from './layout/PasswordValidations.styles.default';

const useStyles = makeStyles(styles);
const PasswordValidations = ({
    validations, passwordValidation, showValidation, isModal = true,
}) => {
    const classes = useStyles();

    return (
        <div>
            <List classes={{ root: classes.spaceRemoveWrapper }}>
                <Grid container columnSpacing={2}>
                    {validations.map((value) => (
                        <Grid key={value.id} item xs={12} sm={6} lg={6} md={6} className={(!showValidation || passwordValidation[ value.uid ]) && classes.fadeWrapper}>
                            <ListItem classes={{ root: classes.spaceWrapper }}>
                                <ListItemIcon classes={{ root: classes.iconWidth }}>
                                    <CircleIcon fontSize="small" htmlColor={(!showValidation || passwordValidation[ value.uid ]) ? themeColor.disableColor : themeColor.primaryColor} />
                                </ListItemIcon>
                                <ListItemText primary={value.text} primaryTypographyProps={{ color: isModal ? themeColor.white : themeColor.black }} />
                            </ListItem>
                        </Grid>
                    ))}
                </Grid>
            </List>
        </div>
    );
};

export default PasswordValidations;
