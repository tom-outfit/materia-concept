import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const data = [
    {
        "item": "Projects"
    },
    {
        "item": "Assets"
    },
    {
        "item": "Approvals"
    },
    {
        "item": "Teams"
    }
]

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        margin: '0 16px',
    }
}))

function DrawerModal() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Divider />
            <List>
                {data.map((text, index) => (
                    <ListItem
                        button key={text.item}
                    >
                        <ListItemText primary={text.item} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default DrawerModal;