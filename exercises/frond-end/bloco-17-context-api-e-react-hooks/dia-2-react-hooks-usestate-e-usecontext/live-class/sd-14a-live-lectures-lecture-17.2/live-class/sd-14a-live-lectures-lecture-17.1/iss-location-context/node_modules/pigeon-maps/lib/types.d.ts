export declare type Point = [number, number];
export interface Bounds {
    ne: [number, number];
    sw: [number, number];
}
export interface PigeonProps {
    anchor?: Point;
    offset?: Point;
    left?: number;
    top?: number;
    latLngToPixel?: (latLng: Point, center?: Point, zoom?: number) => Point;
    pixelToLatLng?: (pixel: Point, center?: Point, zoom?: number) => Point;
}
