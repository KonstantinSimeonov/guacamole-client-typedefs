/// <reference path="./InputStream.d.ts" />

declare module 'guacamole-client' {
  /**
   * A reader which automatically handles the given input stream, returning
   * strictly text data. Note that this object will overwrite any installed event
   * handlers on the given Guacamole.InputStream.
   *
   * @constructor
   * @param stream The stream that data will be read from.
   */
  export class StringReader {
    constructor(stream: InputStream);

    /**
     * Fired once for every blob of text data received.
     *
     * @event
     * @param text The data packet received.
     */
    ontext: null | ((text: string) => void);

    /**
     * Fired once this stream is finished and no further data will be written.
     * @event
     */
    onend: null | (() => void);
  }
}
