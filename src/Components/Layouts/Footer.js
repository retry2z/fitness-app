import React from 'react';
import { UserContext } from '../../Context';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

const useStyle = makeStyles(theme => ({
    footer: {
        top: 'auto',
        bottom: 0,
        height: 78,
    },
    tabs: {
        [theme.breakpoints.up("md")]: {
            margin: '0 auto'
        },
    }
}));


const Footer = () => {
    const context = React.useContext(UserContext);
    const classes = useStyle();

    const index =
        context.currentCategory ?
            context.categories.findIndex(x => x === context.currentCategory) + 1 : 0;

    return (
        <AppBar className={classes.footer} color='inherit' position='fixed'>
            <Tabs
                className={classes.tabs}
                variant="scrollable"
                value={index}
                onChange={(ev, index) => context.selectCategory(!!index ? context.categories[index - 1] : null)}
                indicatorColor="primary"
                textColor="secondary"
            >
                <Tab label='All' />

                {
                    context.categories.map(muscle => (
                        <Tab key={muscle} label={muscle} />
                    ))
                }

            </Tabs>
        </AppBar>
    );
}

export default Footer;
