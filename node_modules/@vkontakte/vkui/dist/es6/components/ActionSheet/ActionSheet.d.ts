import React, { Component } from 'react';
import { HasChildren, HasClassName, HasStyleObject, HasPlatform, HasInsets } from '../../types/props';
export interface ActionSheetProps extends HasStyleObject, HasChildren, HasClassName, HasPlatform, HasInsets {
    /**
     * iOS only
     */
    title?: React.ReactNode;
    /**
     * iOS only
     */
    text?: React.ReactNode;
    onClose(): void;
}
export interface ActionSheetState {
    closing: boolean;
}
declare class ActionSheet extends Component<ActionSheetProps, ActionSheetState> {
    state: {
        closing: boolean;
    };
    el: HTMLDivElement;
    onClose: () => void;
    onItemClick: (action: any, autoclose: any) => (event: any) => void;
    getRef: (el: any) => any;
    stopPropagation: (e: any) => any;
    waitTransitionFinish(eventHandler: any): void;
    render(): JSX.Element;
}
declare const _default: typeof ActionSheet;
export default _default;
