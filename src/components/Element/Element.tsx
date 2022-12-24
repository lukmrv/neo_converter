import React, { PropsWithChildren, ElementType, ComponentPropsWithRef } from 'react';

export type ElementProps<T extends ElementType> = PropsWithChildren<{
  tag?: T;
}> &
  ComponentPropsWithRef<T>;

const Element = <T extends ElementType>({ tag, children, ...rest }: ElementProps<T>) => {
  const Component = tag || 'div';
  return <Component {...rest}>{children}</Component>;
};

export { Element };
