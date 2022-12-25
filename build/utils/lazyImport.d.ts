import * as React from 'react';
export declare function lazyImport<T extends React.ComponentType<any>, I extends {
    [K2 in K]: T;
}, K extends keyof I>(factory: () => Promise<I>, name: K): I;
//# sourceMappingURL=lazyImport.d.ts.map