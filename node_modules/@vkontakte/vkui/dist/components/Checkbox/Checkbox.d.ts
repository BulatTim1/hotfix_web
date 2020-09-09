import React, { HTMLAttributes } from 'react';
import { HasChildren, HasRootRef } from '../../types/props';
export interface CheckboxProps extends HTMLAttributes<HTMLInputElement>, HasRootRef<HTMLLabelElement>, HasChildren {
    /**
     * @ignore
     */
    disabled?: boolean;
}
export declare const Checkbox: React.FunctionComponent<CheckboxProps>;
export default Checkbox;
