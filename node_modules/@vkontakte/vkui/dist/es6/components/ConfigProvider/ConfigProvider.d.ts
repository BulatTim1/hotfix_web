import React from 'react';
import PropTypes from 'prop-types';
import { HasChildren } from '../../types/props';
export interface ConfigProviderProps extends HasChildren {
    scheme?: 'client_light' | 'client_dark' | 'bright_light' | 'space_gray';
    isWebView?: boolean;
    webviewType?: 'vkapps' | 'internal';
    app?: string;
}
export default class ConfigProvider extends React.Component<ConfigProviderProps> {
    constructor(props: any, context: any);
    static childContextTypes: {
        isWebView: PropTypes.Requireable<boolean>;
        scheme: PropTypes.Requireable<string>;
        webviewType: PropTypes.Requireable<string>;
        app: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        webviewType: string;
        isWebView: any;
        scheme: string;
    };
    static contextTypes: {
        document: PropTypes.Requireable<object>;
    };
    readonly document: any;
    componentDidUpdate(prevProps: any): void;
    getChildContext(): ConfigProviderProps;
    render(): React.ReactNode;
}
