import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { StyledButton, StyledButtonLink } from 'styles/styledComponents';
import { Input } from 'components/Input/Input';
import { excgangeSchema } from 'utils/validations';
import { appRoutes } from 'utils/consts';
import { useGetCurrenciesList } from 'api/rates';
const defaultValues = {
    amount: '',
};
const Converter = () => {
    const { control, handleSubmit, } = useForm({
        defaultValues: defaultValues,
        mode: 'onSubmit',
        resolver: zodResolver(excgangeSchema),
    });
    const onSubmit = (data) => {
        console.log('data', data);
    };
    const { data, isLoading } = useGetCurrenciesList();
    console.log('isLoading', isLoading);
    console.log('data', data);
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
        React.createElement(Typography, { variant: "h2" }, "Konwertuj"),
        React.createElement(Input, { control: control, name: "amount", label: "Wpisz warto\u015B\u0107" }),
        React.createElement(StyledButton, { variant: "contained", onClick: handleSubmit(onSubmit) }, "Konwertuj"),
        React.createElement(StyledButtonLink, { variant: "contained", to: appRoutes.history }, "Historia")));
};
export { Converter };
//# sourceMappingURL=Converter.js.map