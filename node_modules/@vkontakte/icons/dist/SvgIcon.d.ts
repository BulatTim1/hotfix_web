import { FC, HTMLAttributes, RefCallback, RefObject } from 'react';
interface SvgIconProps extends HTMLAttributes<HTMLDivElement> {
    width?: number;
    height?: number;
    viewBox?: string;
    fill?: string;
    getRootRef?: RefCallback<HTMLDivElement> | RefObject<HTMLDivElement>;
}
export declare const SvgIcon: FC<SvgIconProps>;
export {};
