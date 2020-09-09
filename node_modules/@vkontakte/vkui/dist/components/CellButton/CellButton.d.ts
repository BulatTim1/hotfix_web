import React from 'react';
import { HasChildren } from '../../types/props';
export interface CellButtonProps extends React.HTMLAttributes<HTMLElement>, HasChildren {
    level?: 'primary' | 'danger';
    align?: 'left' | 'center' | 'right';
    before?: React.ReactNode;
    component?: string | React.ComponentType;
    stopPropagation?: boolean;
}
declare const CellButton: React.FunctionComponent<CellButtonProps>;
export default CellButton;
