import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StyledButtonLink } from 'styles/styledComponents';
import { appRoutes } from 'utils/consts';
const History = () => {
    return (React.createElement(Box, { sx: {
            width: '600px',
            margin: '0 auto',
            border: '1px solid',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'primary.light',
            borderColor: 'primary.dark',
            gap: 2,
            padding: 2,
        } },
        React.createElement(Typography, { variant: "h2" }, "Historia"),
        React.createElement(StyledButtonLink, { variant: "contained", to: appRoutes.converter }, "Wroc do konwertora")));
};
export { History };
//# sourceMappingURL=History.js.map