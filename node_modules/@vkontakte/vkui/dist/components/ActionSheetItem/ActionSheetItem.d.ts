import React from 'react';
import { HasChildren, HasClassName, HasStyleObject } from '../../types/props';
export interface ActionSheetItemProps extends HasClassName, HasChildren, HasStyleObject {
    theme?: 'default' | 'destructive' | 'cancel';
    before?: React.ReactNode;
    onClick?(): void;
    autoclose?: boolean;
}
declare const ActionSheetItem: React.FunctionComponent<ActionSheetItemProps>;
export default ActionSheetItem;
