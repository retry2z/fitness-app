import React from 'react';
import LeftPanel from '../Exercises/LeftPanel';
import RightPanel from '../Exercises/RightPanel';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    '@global': {
        'html, body, #root': {
            height: '100%'
        }
    },
    container: {
        height: 'calc(100% - 64px - 78px)'
    },
    item: {
        [theme.breakpoints.down('xs')]: {
            height: '50%'
        }
    },
    paper: {
        padding: theme.spacing(3),
        overflowY: 'auto',
        [theme.breakpoints.up('sm')]: {
            height: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            height: '100%'
        }
    },
}));

const Main = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item xs={false} sm={1} />

            <Grid item className={classes.item} xs={12} sm={5}>
                <Paper className={classes.paper} square>
                    <LeftPanel />
                </Paper>
            </Grid>

            <Grid item className={classes.item} xs={12} sm={5}>
                <Paper className={classes.paper} square>
                    <RightPanel />
                </Paper>
            </Grid>

            <Grid item xs={false} sm={1} />
        </Grid >
    );
}

export default Main;
