import React from 'react';
import { useController } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const ErrorMessage = ({ children, ...rest }) => (React.createElement(Typography, { color: "error", ...rest }, children));
const Input = (props) => {
    const { field, fieldState } = useController(props);
    return (React.createElement(Box, { sx: { position: 'relative' } },
        fieldState.error && (React.createElement(ErrorMessage, { sx: { position: 'absolute', right: '0', top: '0px' } }, fieldState.error.message)),
        React.createElement(TextField, { label: props.label, error: Boolean(fieldState.error), inputProps: { inputMode: 'numeric', pattern: '[0-9]*' }, sx: { margin: '30px 0', width: '100%' }, ...field })));
};
export { Input };
//# sourceMappingURL=Input.js.map