import React, { ComponentPropsWithRef, ElementType, PropsWithChildren } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { ExcgangeSchema } from 'utils/validations';
type InputProps<T extends ElementType> = ComponentPropsWithRef<T> & PropsWithChildren & UseControllerProps<ExcgangeSchema>;
declare const Input: <T extends React.ElementType<any>>(props: InputProps<T>) => JSX.Element;
export { Input };
//# sourceMappingURL=Input.d.ts.map