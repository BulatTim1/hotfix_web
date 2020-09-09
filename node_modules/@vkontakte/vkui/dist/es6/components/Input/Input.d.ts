import { FunctionComponent, HTMLAttributes } from 'react';
import { FormFieldProps } from '../FormField/FormField';
import { HasRef, HasRootRef } from '../../types/props';
export interface InputProps extends HTMLAttributes<HTMLInputElement>, HasRef<HTMLInputElement>, HasRootRef<HTMLDivElement> {
    alignment?: 'left' | 'center' | 'right';
    /**
     * Значение `verified` устарело и будет удалено в 3.0.0. Используйте вместо него `valid`
     */
    status?: FormFieldProps['status'];
    type?: string;
}
declare const Input: FunctionComponent<InputProps>;
export default Input;
