import React from 'react';

import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import { pushNotification } from './utils/notifications';

import { exercises as dataExercises, muscles as categories } from './data/store';

export const UserContext = React.createContext({
    isDark: false,
    themeSwitcher: () => { },

    langSwitcher: () => { },

    pushNotification: () => { },

    data: [],
    exercises: [],
    categories: [],

    editMode: false,
    enableEditMode: () => { },
    disableEditMode: () => { },

    currentCategory: '',
    selectCategory: () => { },

    currentExercise: {},
    selectExercise: () => { },

    createExercise: () => { },
    removeExercise: () => { },
    editExercise: () => { },
});

const ContextContainer = (props) => {
    const [currentExercise, setCurrentExercise] = React.useState({});
    const [currentCategory, setCurrentCategory] = React.useState(null);
    const [editMode, setEditMode] = React.useState(false);
    const [exercises, setExercises] = React.useState(dataExercises);
    const [isDark, setDark] = React.useState(true);

    const themeSwitcher = () => {
        setDark(!isDark);
    };

    const langSwitcher = (value) => {
        i18n.changeLanguage(value);
    }

    const initialCategories = categories.reduce((acc, category) => {
        acc[category] = []
        return acc
    }, {});

    const data = Object.entries(exercises.reduce((acc, exercise) => {
        const { muscles } = exercise;
        acc[muscles] = [...acc[muscles], exercise];
        return acc
    }, initialCategories));

    const enableEditMode = (id) => {
        setCurrentExercise(exercises.find(x => x.id === id));
        setEditMode(true);
    };

    const disableEditMode = () => {
        setEditMode(false);
    };

    const selectCategory = (value) => {
        setCurrentCategory(value);
    };

    const selectExercise = (id) => {
        if (editMode) {
            setEditMode(false)
        }
        setCurrentExercise(exercises.find(x => x.id === id));
    };

    const createExercise = (exercise) => {
        setExercises([
            ...exercises,
            exercise
        ])

        const data = {
            body: 'Exercise has been created.',
            icon: 'https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-notification-icon-png-image_4275787.jpg',
        }
        pushNotification('Successful', data);
    };

    const editExercise = (exercise) => {
        setExercises([
            ...exercises.filter(x => x.id !== exercise.id),
            exercise
        ])
        setEditMode(false);
        setCurrentExercise(exercise);
    };

    const removeExercise = (id) => {
        setExercises(exercises.filter(x => x.id !== id));
        if (editMode) {
            currentExercise.id === id && setEditMode(false)
        }
        setCurrentExercise(
            currentExercise.id === id ? {} : currentExercise
        );
    };

    return (
        <UserContext.Provider
            value={{
                isDark,
                themeSwitcher,

                langSwitcher,

                pushNotification,

                data,
                exercises,
                categories,

                editMode,
                enableEditMode,
                disableEditMode,

                currentCategory,
                selectCategory,

                currentExercise,
                selectExercise,

                createExercise,
                editExercise,
                removeExercise,
            }}>

            <I18nextProvider i18n={i18n} >
                {props.children}
            </I18nextProvider>

        </UserContext.Provider >
    )
}

export default ContextContainer

