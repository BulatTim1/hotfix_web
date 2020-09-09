export interface MatchesMethod {
    (css: string): boolean;
}
export interface OldElement extends Element {
    matchesSelector?: MatchesMethod;
    mozMatchesSelector?: MatchesMethod;
    msMatchesSelector?: MatchesMethod;
}
