export interface RGB {
    r: number;
    g: number;
    b: number;
}
export interface HSL {
    h: number;
    s: number;
    l: number;
}
export interface ColorPatterns {
    ID: number;
    hex: string;
    rgb: RGB;
    hsl: HSL;
    name: string;
}
export interface ColorSet {
    [index: string]: ColorPatterns;
}
