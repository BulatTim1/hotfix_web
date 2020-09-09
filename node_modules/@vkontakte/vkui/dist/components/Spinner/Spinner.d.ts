import React, { FunctionComponent } from 'react';
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size: 'small' | 'regular' | 'large' | 'medium';
}
declare const Spinner: FunctionComponent<SpinnerProps>;
export default Spinner;
