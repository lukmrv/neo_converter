import React, { PropsWithChildren, ElementType, ComponentPropsWithRef } from 'react';

export type PolymorphicElementProps<T extends ElementType> = {
  tag?: T;
} & ComponentPropsWithRef<T> &
  PropsWithChildren;

const PolymorphicElement = <T extends ElementType>({
  tag,
  children,
  ...rest
}: PolymorphicElementProps<T>) => {
  const Component = tag || 'div';
  return <Component {...rest}>{children}</Component>;
};

export { PolymorphicElement };
