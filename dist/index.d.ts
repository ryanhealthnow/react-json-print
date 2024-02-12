import * as React from "react";
import "./styles.css";
declare type DataObject =
  | string
  | boolean
  | null
  | number
  | object
  | DataObject[];
declare type DataKey = string | number;
interface ReactJsonPrintProps {
  /**
   * The data to be printed. Can be primitives, objects, or arrays.
   * All values must be valid JSON types and all object keys
   * must be valid JSON type. (ie. `string` not `Symbol`);
   *
   * @default null
   */
  dataObject?: DataObject;
  /**
   * The data to be printed, provided as a valid JSON string.
   * The string will be parsed via `JSON.parse`. If both `dataString` and `dataObject`
   * are provided, the `dataObject` value will be used.
   *
   * @default undefined
   */
  dataString?: string;
  /**
   * Key for current data value
   *
   * @default 'DATA'
   */
  objectKey?: DataKey;
  /**
   * Displays the entire tree in an expanded state.
   * By default all nested nodes in the tree are collapsed.
   *
   * @default undefined
   */
  expanded?: boolean;
  /**
   * Limits how many levels deep to display child nodes.
   * Value of `0` will print all child nodes. Useful for deeply nested data,
   * when you want to limit the number of node displayed.
   *
   * @default 0
   */
  depth?: number;
  /**
   * Current node depth.
   * Internal use only
   *
   * @default undefined
   */
  currentDepth?: number;
  /**
   * Unique key for a rendered list of elements.
   * Internal use only.
   *
   * @default undefined
   */
  dataKey?: string;
}
declare const ReactJsonPrint: React.FunctionComponent<ReactJsonPrintProps>;
export default ReactJsonPrint;
