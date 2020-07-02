/// <reference path="./Tunnel.d.ts" />

declare module 'guacamole-client' {
  /**
   * Guacamole Tunnel implemented over HTTP via XMLHttpRequest.
   * @param tunnelURL The URL of the HTTP tunneling service.
   * @param [crossDomain=false] Whether tunnel requests will be cross-domain, and thus must use CORS
   * mechanisms and headers. By default, it is assumed that tunnel requests
   * will be made to the same domain.
   * @param {Object} [extraTunnelHeaders={}] Key value pairs containing the header names and values of any additional
   * headers to be sent in tunnel requests. By default, no extra headers will be added.
   */
  export class HTTPTunnel extends Tunnel {
    constructor(tunnelURL: string, crossDomain?: boolean, extraTunnelHeaders?: boolean);
  }
}
