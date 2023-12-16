/*global Ultraviolet*/
const __before = location.pathname.split("/").slice(0, -1).join("/");
const __res = __before + "/res/";
self.__uv$config = {
  prefix: __before + "/api/",
  bare: "https://decimals.mountzion.nsw.edu.au/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: __res + "handler.js",
  client: __res + "client.js",
  bundle: __res + "bundle.js",
  config: __res + "config.js",
  sw: __res + "the.js",
};