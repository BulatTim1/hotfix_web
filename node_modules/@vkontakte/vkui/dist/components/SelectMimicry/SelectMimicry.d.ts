import { FunctionComponent } from 'react';
import { SelectProps } from '../Select/Select';
export interface SelectMimicryProps extends SelectProps {
    multiline?: boolean;
}
declare const SelectMimicry: FunctionComponent<Omit<SelectMimicryProps, 'value'>>;
export default SelectMimicry;
