import React, { Component, HTMLAttributes } from 'react';
import { HasChildren, HasFormStatus, HasRef, HasRootRef } from '../../types/props';
export interface SelectProps extends HTMLAttributes<HTMLSelectElement>, HasRef<HTMLSelectElement>, HasRootRef<HTMLLabelElement>, HasChildren, HasFormStatus {
    value?: string;
    placeholder?: string;
    alignment?: 'left' | 'center' | 'top';
    disabled?: boolean;
}
export interface SelectState {
    value?: string;
    title?: string;
    notSelected?: boolean;
}
export default class Select extends Component<SelectProps, SelectState> {
    constructor(props: any);
    isControlledOutside?: boolean;
    selectEl?: HTMLSelectElement;
    onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
    setTitle: () => void;
    componentDidUpdate(prevProps: any): void;
    componentDidMount(): void;
    readonly value: string;
    getRef: (element: any) => void;
    render(): JSX.Element;
}
