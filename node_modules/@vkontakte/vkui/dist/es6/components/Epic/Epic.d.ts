import React, { HTMLAttributes, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { HasChildren, HasPlatform } from '../../types/props';
export interface EpicProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasPlatform {
    tabbar: ReactNode;
    activeStory: string;
}
export interface EpicContext {
    hasTabbar: boolean;
}
declare class Epic extends React.Component<EpicProps> {
    getChildContext(): EpicContext;
    static childContextTypes: {
        hasTabbar: PropTypes.Requireable<boolean>;
    };
    render(): JSX.Element;
}
declare const _default: typeof Epic;
export default _default;
