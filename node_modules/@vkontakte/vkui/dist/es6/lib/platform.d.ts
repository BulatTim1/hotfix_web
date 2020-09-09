export declare enum OS {
    ANDROID = "android",
    IOS = "ios"
}
export declare const ANDROID: OS;
export declare const IOS: OS;
export declare function platform(useragent?: string): OS;
/**
 * @deprecated будет удалено в 3.0.0, используйте platform() === OS.IOS
 */
export declare const IS_PLATFORM_IOS: boolean;
/**
 * @deprecated будет удалено в 3.0.0, используйте platform() === OS.ANDROID
 */
export declare const IS_PLATFORM_ANDROID: boolean;
