// Type definitions for path-interpolate 1.0.1
// Project: path-interpolate
// Definitions by: hmillerbakewell

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export = pathInterpolate;

declare function pathInterpolate(inputPath: string): pathInterpolate;
declare function pathInterpolate(inputPath: string, interpolateDistance: number): pathInterpolate;

declare namespace pathInterpolate {
    export let interpolate: (lambda: number, a: number, b: number) => number;
}