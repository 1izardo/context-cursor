export type CursorOptions = {
  /**
   * Radius (in px) of cursor.
   *
   * @defaultValue `8`
   */
  radius?: number;
  /**
   * Padding (in px) between cursor edge and target element
   * edge when hovering.
   *
   * @defaultValue `6`
   */
  hoverPadding?: number;
  /**
   * Time (in seconds) taken for cursor to change size/shape.
   *
   * @defaultValue `0.2`
   */
  transitionDuration?: number;
  /**
   * Strength of parallax effect.
   *
   * @defaultValue `0.15`
   */
  parallaxStrength?: number;
  /**
   * Class name for cursor element.
   *
   * @defaultValue `cc-cursor`
   */
  className?: string;
  /**
   * Data attribute used to identify interactive elements.
   *
   * @defaultValue `data-cc`
   */
  dataAttr?: string;
  /**
   * Whether to make the cursor opaque when first added to the DOM. If false,
   * then the cursor will become opaque once the user moves their mouse.
   *
   * @defaultValue `false`
   */
  beginOpaque?: boolean;
  /**
   * Class name for precise, static cursor (follows mouse exactly).
   *
   * @defaultValue `"cc-precise-cursor"`
   */
  preciseCursorClassName?: string;
  /**
   * Mapping of CSS selectors to Context Cursor data attributes.
   *
   * @example ```json
   * {
   *    "button": "", // use empty string for default settings
   *    ".my-class": "lift no-parallax"
   * }
   * ```
   */
  interactSelectors?: Record<string, string>;
  /**
   * Whether to wrap interactive elements in a parent element. Avoids
   * flickering when cursor is near the edge of a parallax element.
   *
   * @defaultValue `true`
   */
  wrapInteractElements?: boolean;
  /**
   * Whether to watch for changes in the DOM. Ensures that all interactive
   * elements are recognized on single-page applications.
   *
   * @defaultValue `false`
   */
  watch?: boolean;
};
