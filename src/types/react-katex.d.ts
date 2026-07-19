declare module 'react-katex' {
  import * as React from 'react';

  export interface MathProps {
    math: string;
    block?: boolean;
    errorColor?: string;
    renderError?: (error: Error | TypeError) => React.ReactNode;
  }

  export const InlineMath: React.ComponentType<MathProps>;
  export const BlockMath: React.ComponentType<MathProps>;
}
