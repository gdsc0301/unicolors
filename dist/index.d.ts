import { ColorSet, ColorPatterns } from './modules/colorSet';
export default class UniColors {
    XTerm: ColorSet;
    /**
     *
     * @param colorID The number of the color in the XTerm pattern
     * from 0 to 255.
     */
    XTermFromID(colorID: number): ColorPatterns;
}
