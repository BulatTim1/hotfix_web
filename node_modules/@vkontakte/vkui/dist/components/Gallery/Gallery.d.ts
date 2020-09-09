import React, { Component } from 'react';
import { HasClassName, HasChildren, HasStyleObject, HasPlatform } from '../../types/props';
export interface GalleryProps extends HasStyleObject, HasChildren, HasClassName, HasPlatform {
    slideWidth?: string | number;
    autoplay?: number;
    initialSlideIndex?: number;
    slideIndex?: number;
    onDragStart?(): void;
    onDragEnd?(): void;
    onChange?(current: GalleryState['current']): void;
    onEnd?({ targetIndex }: {
        targetIndex: GalleryState['current'];
    }): void;
    align?: 'left' | 'center' | 'right';
    bullets?: 'dark' | 'light' | false;
}
export interface GalleryState {
    containerWidth: number;
    layerWidth?: number;
    min?: number;
    max?: number;
    startT?: number;
    current: number;
    deltaX: number;
    shiftX: number;
    slides: GallerySlidesState[];
    animation: boolean;
    duration: number;
    dragging?: boolean;
}
export interface GallerySlidesState {
    coordX: number;
    width: number;
}
declare class Gallery extends Component<GalleryProps, GalleryState> {
    constructor(props: any);
    container: React.RefObject<HTMLDivElement>;
    slidesStore: Object;
    viewport: HTMLElement;
    timeout: number;
    isChildrenDirty: boolean;
    static defaultProps: {
        slideWidth: string;
        children: string;
        autoplay: number;
        initialSlideIndex: number;
        align: string;
        bullets: boolean;
    };
    readonly isCenterWithCustomWidth: boolean;
    initializeSlides(callback?: () => void): void;
    calcMin({ containerWidth, layerWidth, viewportWidth, slides }: {
        containerWidth: any;
        layerWidth: any;
        viewportWidth: any;
        slides: any;
    }): number;
    calcMax({ viewportWidth, slides }: {
        viewportWidth: any;
        slides: any;
    }): number;
    /**
     * Считает отступ слоя галереи
     * @param {Number} targetIndex ID целевого слайда
     * @returns {Number} Значения отступа
     */
    calculateIndent(targetIndex: any): any;
    /**
     * Считает отступ слоя галереи во время драга
     * @returns {Number} Значения отступа
     */
    calculateDragIndent(): number;
    validateIndent(value: any): any;
    isDraggable(): boolean;
    /**
     * Получает индекс слайда, к которому будет осуществлен переход
     * @returns {Number} Индекс слайда
     */
    getTarget(): number;
    go: (targetIndex: any) => void;
    onStart: (e: any) => void;
    onMoveX: (e: any) => void;
    onEnd: (e: any) => boolean;
    onResize: () => void;
    setTimeout: (duration: any) => void;
    clearTimeout: () => void;
    getSlideRef: (id: any) => (slide: any) => void;
    getViewportRef: (viewport: any) => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
declare const _default: typeof Gallery;
export default _default;
