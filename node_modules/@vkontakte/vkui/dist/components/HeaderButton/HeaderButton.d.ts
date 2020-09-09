import { FunctionComponent, HTMLAttributes } from 'react';
import { HasChildren } from '../../types/props';
export interface HeaderButtonProps extends HTMLAttributes<HTMLLinkElement | HTMLButtonElement>, HasChildren {
    primary?: boolean;
    /**
     * Делает из кнопки ссылку
     */
    href?: string;
}
declare const HeaderButton: FunctionComponent<HeaderButtonProps>;
export default HeaderButton;
