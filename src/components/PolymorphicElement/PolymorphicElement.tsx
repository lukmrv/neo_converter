import React, { PropsWithChildren, ElementType, ComponentPropsWithRef } from 'react';

export type PolymorphicElementProps<T extends ElementType> = PropsWithChildren<{
  tag?: T;
}> &
  ComponentPropsWithRef<T>;

const PolymorphicElement = <T extends ElementType>({
  tag,
  children,
  ...rest
}: PolymorphicElementProps<T>) => {
  const Component = tag || 'div';
  return <Component {...rest}>{children}</Component>;
};

export { PolymorphicElement };
