import { HTMLAttributes, FunctionComponent } from 'react';
import { HasChildren, HasRootRef } from '../../types/props';
export interface DivProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement>, HasChildren {
}
export declare const Div: FunctionComponent<DivProps>;
export default Div;
