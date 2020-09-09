import { HTMLAttributes, PureComponent } from 'react';
import { HasFormStatus, HasRef, HasRootRef } from '../../types/props';
export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement>, HasRef<HTMLTextAreaElement>, HasRootRef<HTMLElement>, HasFormStatus {
    children?: string;
    grow?: boolean;
    onResize?(el: HTMLTextAreaElement): void;
    value?: string;
}
export interface TextareaState {
    value?: string;
    height?: number;
}
export default class Textarea extends PureComponent<TextareaProps, TextareaState> {
    constructor(props: any);
    isControlledOutside?: boolean;
    element: HTMLTextAreaElement;
    componentDidMount(): void;
    static defaultProps: {
        style: {};
        defaultValue: string;
        grow: boolean;
        onResize: () => void;
    };
    getRef: (element: any) => void;
    resize: () => void;
    readonly value: string;
    onChange: (e: any) => void;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
}
