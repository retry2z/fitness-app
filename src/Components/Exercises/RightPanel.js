import React from 'react';
import { UserContext } from '../../Context';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import Form from '../Core/Form';
import { Hidden } from '@material-ui/core';

const RightPanel = () => {
    const context = React.useContext(UserContext);

    const { t } = useTranslation('home');

    const {
        title = t('welcome'),
        description = t('select_exercise'),
        id
    } = context.currentExercise;

    const handleSubmitForm = (data) => {
        context.editExercise(data);
        context.disableEditMode();
    };

    return (
        <>
            <Hidden smDown>
                <Typography variant='h4' color='primary'>
                    {title}
                </Typography>
            </Hidden>
            {
                context.editMode ?
                    <Form
                        key={id}
                        edit
                        onSubmit={handleSubmitForm}
                    />
                    :
                    <Typography variant='subtitle1' color='secondary'>
                        {description}
                    </Typography>
            }
        </>
    );
}

export default RightPanel;
