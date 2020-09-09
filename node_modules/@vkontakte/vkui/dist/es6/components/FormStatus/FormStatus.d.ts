import { FunctionComponent, HTMLAttributes } from 'react';
import { HasChildren, HasDangerHTML } from '../../types/props';
export interface FormStatusProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasDangerHTML {
    state?: 'default' | 'error';
    title?: string;
}
declare const FormStatus: FunctionComponent<FormStatusProps>;
export default FormStatus;
