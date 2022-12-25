import React from 'react';
const PolymorphicElement = ({ tag, children, ...rest }) => {
    const Component = tag || 'div';
    return React.createElement(Component, { ...rest }, children);
};
export { PolymorphicElement };
//# sourceMappingURL=PolymorphicElement.js.map