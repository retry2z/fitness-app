import React from 'react';
import { UserContext } from '../../Context';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Create from '../Dialogs/DialogCreate';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Brightness5 from '@material-ui/icons/Brightness5';

const useStyle = makeStyles({
    root: {
        height: '64px',
    },
    userActions: {
        marginRight: 16,
    }
});

const Header = () => {
    const context = React.useContext(UserContext);
    const classes = useStyle();

    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography variant="h4">
                            Fitness
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Fab
                            className={classes.userActions}
                            onClick={context.themeSwitcher}
                            color="default"
                            size="small"
                            aria-label="theme">
                            <Brightness5 />
                        </Fab>

                        <Create />
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
