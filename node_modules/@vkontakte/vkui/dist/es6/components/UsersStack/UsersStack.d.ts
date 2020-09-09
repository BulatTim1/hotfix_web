import React from 'react';
import { HasChildren } from '../../types/props';
export interface UsersStackProps extends React.HTMLAttributes<HTMLDivElement>, HasChildren {
    /**
     * Массив ссылок на фотографии
     */
    photos?: string[];
    /**
     * Размер аватарок
     */
    size?: 's' | 'm';
    /**
     * Вертикальный режим. Рекомендуется использовать с размером `m`
     */
    vertical?: boolean;
    /**
     * Количество аватарок, которые будут показаны.
     * Если в массиве `photos` больше элементов и используется размер `m`, то будет показано количество остальных элементов
     */
    count?: number;
}
declare const _default: React.NamedExoticComponent<UsersStackProps>;
export default _default;
