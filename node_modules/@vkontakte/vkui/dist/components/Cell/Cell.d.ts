import { Component, HTMLAttributes, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { HasChildren, HasPlatform, HasRootRef } from '../../types/props';
export interface CellProps extends HTMLAttributes<HTMLElement>, HasChildren, HasRootRef<HTMLElement>, HasPlatform {
    /**
     * Контейнер для контента от `children`.
     */
    before?: ReactNode;
    /**
     * Контейнер для текста справа от `children`.
     */
    indicator?: ReactNode;
    /**
     * Контейнер для контента справа от `children` и `indicator`.
     */
    asideContent?: ReactNode;
    /**
     * Выставляйте этот флаг, если клик по ячейке вызывает переход на другую панель. Флаг нужен для корректной
     * стилизации такой ячейки.
     */
    expandable?: boolean;
    /**
     * Добавляет возможность переноса содержимого `children` и `description`. Без этого флага текст будет уходить
     * в троеточие.
     */
    multiline?: boolean;
    /**
     * Контейнер для дополнительного содержимого под `children`.
     */
    description?: ReactNode;
    /**
     * Контейнер для произвольного содержимого под `description`. Рисуется только если передать `size="l"`.
     */
    bottomContent?: ReactNode;
    /**
     * Размер влияет на выравнивание блоков по вертикали, вид сепаратора (iOS) и возможность вставлять `bottomContent`.
     */
    size?: 'm' | 'l';
    /**
     * Флаг для перехода в режим ячеек-чекбоксов.
     * **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
     * **Важно:** этот режим несовместим с `draggable`. В случае истинности двух этих флагов, приоритет отдается
     * `draggable`.
     */
    selectable?: boolean;
    /**
     * Флаг для перехода в режим удаляемых ячеек. **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
     */
    removable?: boolean;
    /**
     * Коллбэк срабатывает при клике на контрол удаления.
     */
    onRemove?(e: any, rootEl: HTMLElement): void;
    /**
     * iOS only. Текст в выезжаеющей кнопке для удаления ячейки.
     */
    removePlaceholder?: ReactNode;
    /**
     * Флаг для перехода в режим перетаскивания. **Важно:** в этом режиме обработчик `onClick` вызываться не будет.
     */
    draggable?: boolean;
    /**
     * Коллбэк срабатывает при завершении перетаскивания.
     * **Важно:** режим перетаскивания не меняет порядок ячеек в DOM. В коллбэке есть объект с полями `from` и `to`.
     * Эти числа нужны для того, чтобы разработчик понимал, с какого индекса на какой произошел переход. В песочнице
     * есть рабочий пример с обработкой этих чисел и перерисовкой списка.
     */
    onDragFinish?({ from, to }: {
        from: number;
        to: number;
    }): void;
    /**
     * При передаче `href`, ячейка становится полноценной ссылкой. Поддерживаются все валидные для этого элемента
     * атрибуты (`target`, `rel` и т.д.).
     */
    href?: string;
}
export interface CellState {
    isRemoveActivated: boolean;
    removeOffset: number;
    dragging: boolean;
}
declare class Cell extends Component<CellProps, CellState> {
    constructor(props: any);
    rootEl: HTMLElement;
    removeButton: HTMLDivElement;
    static defaultProps: {
        before: any;
        indicator: string;
        asideContent: string;
        bottomContent: any;
        expandable: boolean;
        children: string;
        selectable: boolean;
        multiline: boolean;
        removable: boolean;
        size: string;
        removePlaceholder: string;
    };
    static contextTypes: {
        document: PropTypes.Requireable<any>;
    };
    readonly document: any;
    /**
     * предотвращает двойное срабатывание в случае с input
     * (https://github.com/vuejs/vue/issues/3699#issuecomment-247957931)
     * предотвращает клик в случае, когда включен режим removable
     * @param e
     */
    onClick: (e: any) => any;
    activateRemove: () => void;
    deactivateRemove: () => void;
    onRemoveClick: (e: any) => void;
    componentWillUnmount(): void;
    componentDidUpdate(_prevProps: any, prevState: any): void;
    getRemoveRef: (el: any) => any;
    getRootRef: (element: any) => void;
    dragShift: number;
    listEl: HTMLElement;
    siblings: HTMLElement[];
    dragStartIndex: number;
    dragEndIndex: number;
    dragDirection: 'down' | 'up';
    onDragStart: () => void;
    onDragMove: (e: any) => void;
    onDragEnd: () => void;
    render(): JSX.Element;
}
declare const _default: typeof Cell;
export default _default;
