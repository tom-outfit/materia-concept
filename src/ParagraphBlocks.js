import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '16px',
        padding: '32px',
        backgroundColor: theme.palette.background.default,
        borderRadius: '4px',
    }
}))

function ParagraphBlock(props) {
    const classes = useStyles();
    return (
        <Typography
            className={classes.root}
            paragraph
            gutterBottom
        >
            {props.text}
        </Typography>
    )
};

export default ParagraphBlock;