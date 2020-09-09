import React, { Component, HTMLAttributes } from 'react';
import { HasChildren, HasPlatform } from '../../types/props';
export interface AlertActionsInterface {
    title: string;
    action?(): void;
    autoclose?: boolean;
    style: 'cancel' | 'destructive' | 'default';
}
export interface AlertProps extends HTMLAttributes<HTMLElement>, HasPlatform, HasChildren {
    actionsLayout?: 'vertical' | 'horizontal';
    actions?: AlertActionsInterface[];
    onClose?(): void;
}
export interface AlertState {
    closing: boolean;
}
declare class Alert extends Component<AlertProps, AlertState> {
    constructor(props: any);
    element: React.RefObject<HTMLDivElement>;
    static defaultProps: {
        actionsLayout: string;
        actions: any[];
    };
    onItemClick: (item: any) => () => void;
    onClose: () => void;
    stopPropagation: (e: any) => any;
    waitTransitionFinish(eventHandler: any): void;
    render(): JSX.Element;
}
declare const _default: typeof Alert;
export default _default;
