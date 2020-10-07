import React from 'react';

import { UserContext } from '../../Context';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Add from '@material-ui/icons/Add';
import Form from '../Core/Form';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up("xs")]: {
            width: 300,
        },
        [theme.breakpoints.up("sm")]: {
            width: 500,
        },
    },
    userActions: {
        marginRight: 16,
    }
}));


const Create = () => {
    const [open, setOpen] = React.useState(false);
    const context = React.useContext(UserContext);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmitForm = (data) => {
        context.createExercise(data);
        handleClose();
    };

    return (
        <>
            <Fab
                className={classes.userActions}
                color="default"
                onClick={handleClickOpen}
                size="small"
                aria-label="add an exercise"
            >
                <Add />
            </Fab>

            <Dialog
                open={open}
                onClose={handleClose}
            >

                <DialogTitle>
                    Create new exercise
                </DialogTitle>

                <DialogContent className={classes.root}>
                    <DialogContentText>
                        Let's try something new
                    </DialogContentText>

                    <Form onSubmit={handleSubmitForm} />

                </DialogContent>

                <DialogActions>

                </DialogActions>
            </Dialog>
        </>
    )
};

export default Create