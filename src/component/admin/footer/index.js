
import React from 'react';

import
{
    Button,
    Typography,
    Grid,
    TextField,
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({

    root: {
        background: `${theme.palette.primary.main} ! important`,
    }
}));
export default function Footer()
{
    const classes = useStyles();
    return (
        <>
            <Divider light variant="fullWidth" classes={{ root: classes.root }} />
            <div className="mt-4"></div>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </>
    );
}