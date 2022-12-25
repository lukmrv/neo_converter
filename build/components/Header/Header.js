import React, { useState } from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { navigationLinks } from 'utils/consts';
const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (React.createElement(AppBar, { position: "static" },
        React.createElement(Container, { maxWidth: "lg" },
            React.createElement(Toolbar, { disableGutters: true },
                React.createElement(CurrencyExchangeIcon, { sx: { display: { xs: 'none', md: 'flex' }, mr: 1 } }),
                React.createElement(Box, { sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } } },
                    React.createElement(IconButton, { size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, color: "inherit" },
                        React.createElement(MenuIcon, null)),
                    React.createElement(Menu, { id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                        }, transformOrigin: {
                            vertical: 'top',
                            horizontal: 'left',
                        }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: {
                            display: { xs: 'block', md: 'none' },
                        } }, navigationLinks.map((page) => (React.createElement(MenuItem, { key: page.description, onClick: handleCloseNavMenu },
                        React.createElement(Link, { style: { textDecoration: 'none', color: 'blue' }, to: page.link }, page.description)))))),
                React.createElement(Box, { sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }, navigationLinks.map((page) => (React.createElement(Typography, { component: "div", key: page.description, onClick: handleCloseNavMenu, sx: { my: 2, color: 'white', display: 'block' } },
                    React.createElement(Link, { style: { textDecoration: 'none', color: 'blue' }, to: page.link }, page.description)))))))));
};
export { Header };
//# sourceMappingURL=Header.js.map