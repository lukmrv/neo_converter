import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
const Footer = () => (React.createElement(Box, { sx: { width: '100%', display: 'flex', justifyContent: 'center' } },
    React.createElement(BottomNavigation, { sx: { width: 500 } },
        React.createElement(BottomNavigationAction, { label: "Recents", value: "recents", icon: React.createElement(RestoreIcon, null) }),
        React.createElement(BottomNavigationAction, { label: "Favorites", value: "favorites", icon: React.createElement(FavoriteIcon, null) }),
        React.createElement(BottomNavigationAction, { label: "Nearby", value: "nearby", icon: React.createElement(LocationOnIcon, null) }),
        React.createElement(BottomNavigationAction, { label: "Folder", value: "folder", icon: React.createElement(FolderIcon, null) }))));
export { Footer };
//# sourceMappingURL=Footer.js.map