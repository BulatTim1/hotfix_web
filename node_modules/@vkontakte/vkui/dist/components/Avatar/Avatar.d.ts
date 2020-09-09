import React from 'react';
import { HasChildren, HasRootRef } from '../../types/props';
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, HasChildren, HasRootRef<HTMLDivElement> {
    size?: 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24;
    src?: string;
    type?: 'default' | 'image' | 'app';
}
declare const Avatar: React.FunctionComponent<AvatarProps>;
export default Avatar;
