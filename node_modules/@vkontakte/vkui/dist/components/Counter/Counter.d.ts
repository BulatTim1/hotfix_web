import React from 'react';
import { HasChildren } from '../../types/props';
export interface CounterProps extends HasChildren {
    /**
     * Тип счетчика. При использовании компонента в качестве значения свойства `after` у `Button` эти значения игнорируются
     */
    type?: 'secondary' | 'primary' | 'prominent';
}
declare const _default: React.NamedExoticComponent<CounterProps>;
export default _default;
