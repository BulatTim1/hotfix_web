import { FunctionComponent, ReactNode, HTMLAttributes } from 'react';
export interface TabbarItemProps extends HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
    /**
     * Тест рядом с иконкой
     */
    text?: ReactNode;
    /**
     * Счетчик рядом с иконкой
     */
    label?: ReactNode;
}
declare const TabbarItem: FunctionComponent<TabbarItemProps>;
export default TabbarItem;
