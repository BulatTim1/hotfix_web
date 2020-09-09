import React from 'react';
import { OS } from './platform';
import { HasChildren } from '../types/props';
export interface SSRContextInterface {
    platform: OS;
}
export declare const SSRContext: React.Context<SSRContextInterface>;
export interface SSRWrapperProps extends HasChildren {
    userAgent?: string;
}
export declare const SSRWrapper: React.FunctionComponent<SSRWrapperProps>;
