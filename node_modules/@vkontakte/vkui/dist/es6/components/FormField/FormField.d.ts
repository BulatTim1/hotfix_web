import React, { HTMLAttributes, ReactNode } from 'react';
import { HasChildren, HasFormStatus, HasRootRef } from '../../types/props';
export interface FormFieldProps extends HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasChildren, HasFormStatus {
    TagName?: string;
    top?: ReactNode;
    bottom?: ReactNode;
}
declare const FormField: React.FunctionComponent<FormFieldProps>;
export default FormField;
