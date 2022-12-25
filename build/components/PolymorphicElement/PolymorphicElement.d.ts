import React, { PropsWithChildren, ElementType, ComponentPropsWithRef } from 'react';
export type PolymorphicElementProps<T extends ElementType> = {
    tag?: T;
} & ComponentPropsWithRef<T> & PropsWithChildren;
declare const PolymorphicElement: <T extends React.ElementType<any>>({ tag, children, ...rest }: PolymorphicElementProps<T>) => JSX.Element;
export { PolymorphicElement };
//# sourceMappingURL=PolymorphicElement.d.ts.map