import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NoteIcon from '@material-ui/icons/Note';
import React from 'react';

const Header = ({ title, headerIcon }) => {

    return (

        <AppBar position="relative">
            <Toolbar>
                <NoteIcon className={headerIcon} />
                <Typography variant="h6" color="inherit" noWrap>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>

    )
}

Header.defaultProps = {
    title: 'Default tracker'
}

export default Header
