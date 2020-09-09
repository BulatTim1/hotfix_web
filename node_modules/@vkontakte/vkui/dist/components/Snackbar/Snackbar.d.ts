import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { HasChildren, HasClassName, HasPlatform } from '../../types/props';
export interface SnackbarProps extends HasChildren, HasClassName, HasPlatform {
    /**
     * Название кнопки действия в уведомлении
     */
    action?: string | React.ComponentType;
    /**
     * Будет вызвано при клике на кнопку действия
     */
    onActionClick?: (e: Event) => {};
    /**
     * Цветная иконка 24x24 пикселя
     */
    before?: React.ComponentType;
    /**
     * Контент в правой части, может быть `<Avatar size={32} />`
     */
    after?: React.ComponentType;
    /**
     * Варианты расположения кнопки
     */
    layout?: 'vertical' | 'horizontal';
    /**
     * Время в миллисекундах, через которое плашка скроется
     */
    duration?: number;
    /**
     * Обработчик закрытия уведомления
     */
    onClose: () => {};
}
export interface SnackbarState {
    closing: boolean;
    touched: boolean;
}
declare class Snackbar extends PureComponent<SnackbarProps, SnackbarState> {
    constructor(props: any);
    static defaultProps: {
        duration: number;
    };
    static contextTypes: {
        window: PropTypes.Requireable<any>;
        document: PropTypes.Requireable<any>;
    };
    private innerEl;
    private bodyElRef;
    private closeTimeout;
    private shiftXPercent;
    private shiftXCurrent;
    private touchStartTime;
    private animationFrame;
    componentDidMount(): void;
    componentWillUnmount(): void;
    readonly window: any;
    setCloseTimeout: () => void;
    clearCloseTimeout: () => void;
    onActionClick: (e: any) => void;
    close(): void;
    waitTransitionFinish(element: HTMLElement, eventHandler: any): void;
    getInnerRef: (el: any) => any;
    onTouchStart: () => void;
    onTouchMoveX: (event: any) => void;
    onTouchEnd: () => void;
    setBodyTransform(percent: number): void;
    render(): JSX.Element;
}
declare const _default: typeof Snackbar;
export default _default;
