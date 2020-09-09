import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { HasChildren, HasFormStatus } from '../../types/props';
export interface FormLayoutGroupProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasFormStatus {
    top?: ReactNode;
    bottom?: ReactNode;
}
declare const FormLayoutGroup: FunctionComponent<FormLayoutGroupProps>;
export default FormLayoutGroup;
