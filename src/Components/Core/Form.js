import React from 'react';

import { UserContext } from '../../Context';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyle = makeStyles({
    input: {
        display: 'block',
        paddingBottom: 16,
        textTransform: 'capitalize',
    },
    select: {
        width: '50%',
        paddingBottom: 16,
        textTransform: 'capitalize',
    },
    actions: {
        textAlign: 'right',
    }
});

const Form = ({ onChange, onSubmit, edit = false }) => {
    const classes = useStyle();
    const context = React.useContext(UserContext);
    const [form, setForm] = React.useState({
        id: (edit && context.currentExercise.id) || '',
        title: (edit && context.currentExercise.title) || '',
        description: (edit && context.currentExercise.description) || '',
        muscles: (edit && context.currentExercise.muscles) || '',
    });

    const handleChange = (ev, name) => {
        setForm({
            ...form,
            [name]: ev.target.value
        });

        !!onChange && onSubmit(form);
    };

    const handleSubmit = () => {
        setForm({
            ...form,
            id: form.id || form.title.toLowerCase().replace(/ /g, '-')
        });

        console.log(form);
        !!onSubmit && onSubmit(form);
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <FormControl className={classes.input}>
                <TextField
                    label="Title"
                    onChange={(e) => handleChange(e, 'title')}
                    defaultValue={form.title}
                    fullWidth
                />
            </FormControl>

            <FormControl className={classes.select}>
                <InputLabel>
                    Muscle
                </InputLabel>
                <Select
                    value={form.muscles || ''}
                    onChange={(e) => handleChange(e, 'muscles')}
                >
                    {context.categories.map((option) => (
                        <MenuItem
                            className={classes.options}
                            key={option}
                            value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl className={classes.input}>
                <TextField
                    label="Description"
                    onChange={(e) => handleChange(e, 'description')}
                    defaultValue={form.description}
                    multiline
                    rows="2"
                    fullWidth
                />
            </FormControl>

            <Grid container justify="flex-end" spacing={2}>
                <Grid item>
                    <Button type="reset" variant="outlined">
                        Reset
                    </Button>
                </Grid>

                <Grid item>
                    <Button onClick={handleSubmit} variant="contained" color="secondary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    )

}

export default Form