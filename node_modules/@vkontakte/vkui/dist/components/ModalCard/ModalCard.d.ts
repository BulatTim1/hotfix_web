import { Component, HTMLAttributes, ReactNode } from 'react';
import { HasPlatform, HasChildren, HasInsets } from '../../types/props';
export interface ModalCardActionInterface {
    title: string;
    action?(): void;
    type?: 'secondary' | 'primary';
}
export interface ModalCardProps extends HTMLAttributes<HTMLElement>, HasPlatform, HasChildren, HasInsets {
    /**
     * Иконка.
     *
     * Может быть компонентом иконки, например, `<Icon56MoneyTransferOutline />`, или `<Avatar size={72} src="" />`
     */
    icon?: ReactNode;
    /**
     * Заголовок карточки
     */
    title?: string;
    /**
     * Текст, поясняющий заголовок
     */
    caption?: string;
    /**
     * Список кнопок-действий
     */
    actions?: ModalCardActionInterface[];
    /**
     * Тип отображения кнопок: вертикальный или горизонтальный
     */
    actionsLayout?: 'vertical' | 'horizontal';
    /**
     * Будет вызван при закрытии карточки жестом
     */
    onClose?(): void;
}
declare class ModalCard extends Component<ModalCardProps> {
    static defaultProps: {
        actions: any[];
        actionsLayout: string;
        insets: {};
    };
    onButtonClick: (event: any) => void;
    render(): JSX.Element;
}
declare const _default: typeof ModalCard;
export default _default;
