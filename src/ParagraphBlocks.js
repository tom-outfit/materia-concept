import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import loadData from './data.js';

const url = "https://jsonplaceholder.typicode.com/todos/";
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
        <div>
            <Typography
                className={classes.root}
                paragraph
                gutterBottom
            >
                {props.id}: {props.text}
            </Typography>
        </div>
    )
};

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { externalData: null }
    }
    componentDidMount() {
        this._asyncRequest = loadData(url).then(
            externalData => {
                this._asyncRequest = null;
                this.setState({ externalData });
            })
    }
    render() {
        return (
            this.state.externalData === null
                ? <ParagraphBlock text={<p>Loading...</p>} />
                : Object.entries(this.state.externalData.data).map(item => {
                    return <ParagraphBlock key={item[0]} text={item[1].title} id={item[1].id} />
                })
        )
    }
}

export default TodoList;