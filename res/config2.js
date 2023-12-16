/* DO NOT MODIFY; this is a copy */
/*global Ultraviolet*/
self.__uv$config = {
    prefix: location.pathname.split("/").slice(0, -1).join("/") + "/api/",
    bare: 'https://decimals.mountzion.nsw.edu.au/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/handler.js',
    client: '/client.js',
    bundle: '/bundle.js',
    config: '/config.js',
    sw: '/the.js',
};
