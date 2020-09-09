export interface OffsetRectInterface {
    top: number;
    left: number;
    width: number;
    height: number;
}
export declare function getOffsetRect(elem: HTMLElement): OffsetRectInterface;
