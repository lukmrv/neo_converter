// import React, { ComponentPropsWithRef, ElementType, PropsWithChildren } from 'react';

// import { useController, UseControllerProps } from 'react-hook-form';

// import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';
// // import Typography, { TypographyProps } from '@mui/material/Typography';
// // import Autocomplete from '@mui/material/Autocomplete';

// import { ExcgangeSchema } from 'utils/validations';

// type InputProps<T extends ElementType> = ComponentPropsWithRef<T> &
//   PropsWithChildren &
//   UseControllerProps<ExcgangeSchema>;

// // const ErrorMessage = ({ children, ...rest }: PropsWithChildren<TypographyProps>) => (
// //   <Typography color="error" {...rest}>
// //     {children}
// //   </Typography>
// // );

// const Select = <T extends ElementType>() => {
//   // const Select = <T extends ElementType>(props: InputProps<T>) => {
//   //   const { field, fieldState } = useController(props);

//   return (
//     <Box sx={{ position: 'relative' }}>
//       {/* <Autocomplete
//         id="country-select-demo"
//         sx={{ width: 300 }}
//         options={countries}
//         autoHighlight
//         getOptionLabel={(option) => option.label}
//         renderOption={(props, option) => (
//           <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
//             <img
//               loading="lazy"
//               width="20"
//               src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
//               srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
//               alt=""
//             />
//             {option.label} ({option.code}) +{option.phone}
//           </Box>
//         )}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="Choose a country"
//             inputProps={{
//               ...params.inputProps,
//               autoComplete: 'new-password', // disable autocomplete and autofill
//             }}
//           />
//         )}
//       /> */}
//     </Box>
//   );
// };

// export { Select };
