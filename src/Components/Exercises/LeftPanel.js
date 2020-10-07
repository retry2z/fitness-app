import React from 'react';
import { UserContext } from '../../Context';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles({
    group: {
        textTransform: 'capitalize',
    }
});

const LeftPanel = () => {
    const context = React.useContext(UserContext);
    const classes = useStyles();

    return (
        <>
            {context.data.map(([muscles, exercises]) => (
                (!context.currentCategory || (context.currentCategory === muscles)) &&
                <div key={muscles}>
                    <Typography className={classes.group}
                        variant='h5'
                        color='primary'
                    >
                        {muscles}
                    </Typography>

                    <List component='ul'>
                        {exercises.map(exercise => (
                            <ListItem
                                key={exercise.title}
                                button
                                onClick={() => context.selectExercise(exercise.id)}
                            >
                                <ListItemText
                                    primary={
                                        <Typography variant='subtitle2'>{exercise.title}</Typography>
                                    }
                                />

                                <ListItemSecondaryAction>
                                    <IconButton
                                        onClick={() => context.enableEditMode(exercise.id)}
                                        color="secondary"
                                    >
                                        <Edit />
                                    </IconButton>

                                    <IconButton
                                        onClick={() => context.removeExercise(exercise.id)}
                                        color="primary"
                                    >
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            ))}
        </>
    );
}

export default LeftPanel;
