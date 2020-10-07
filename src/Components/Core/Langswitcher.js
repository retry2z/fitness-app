import React from "react";

import { supportedLangs } from '../../Locale/langOptions';

import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Fab from '@material-ui/core/Fab';
import { Language } from '@material-ui/icons';

import { UserContext } from '../../Context'


const LangSwitcher = ({ short = false }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const context = React.useContext(UserContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (langCode) => {
        context.langSwitcher(langCode);
        setAnchorEl(null);
    };

    return (
        <>
            <Fab
                onClick={handleClick}
                color="default"
                size="small"
                aria-label="theme">
                <Language />
            </Fab>

            <Menu
                id="lang-menu"
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={handleClose}
            >
                {
                    Object.keys(supportedLangs).map(langCode => (
                        <MenuItem key={langCode} onClick={() => handleSelect(langCode)}>
                            <Typography variant="body1">
                                {short ? (langCode).toLocaleUpperCase() : supportedLangs[langCode]}
                            </Typography>
                        </MenuItem>
                    ))
                }
            </Menu>
        </>
    );
}

export default LangSwitcher