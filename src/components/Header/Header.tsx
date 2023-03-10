import React, { useState, MouseEvent } from 'react';

import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';

import { navigationLinks } from 'utils/consts';
import { StyledBaseLink } from 'styles/styledComponents';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <CurrencyExchangeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navigationLinks.map((page) => (
                <MenuItem key={page.description} onClick={handleCloseNavMenu}>
                  <StyledBaseLink sx={{ color: 'primary.dark' }} to={page.link}>
                    {page.description}
                  </StyledBaseLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };
