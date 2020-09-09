import { FunctionComponent, HTMLAttributes } from 'react';
import { HasChildren, HasRef } from '../../types/props';
export interface FormLayoutProps extends HTMLAttributes<HTMLElement>, HasRef<HTMLElement>, HasChildren {
    TagName?: string;
}
declare const FormLayout: FunctionComponent<FormLayoutProps>;
export default FormLayout;
