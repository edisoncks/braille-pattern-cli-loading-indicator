declare module "@edisoncks/cli-loading-indicator" {
  interface LoadingIndicatorOptions {
    /** Size of the loading indicator pattern ('small' or 'large'). Default: 'large' */
    size?: "small" | "large";
    /** Rotation direction: 'cw' (clockwise) or 'ccw' (counter-clockwise). Default: 'ccw' */
    rotation?: "cw" | "ccw";
    /** Animation interval in milliseconds. Default: 70 */
    interval?: number;
    /** Format function to customize the displayed text */
    format?: (pattern: string, index: number) => string;
  }

  class LoadingIndicator {
    constructor(attributes?: LoadingIndicatorOptions);
    start(): void;
    stop(): void;
  }

  export default LoadingIndicator;
}
