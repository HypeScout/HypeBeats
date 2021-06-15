const HypeBeats = require("../index");

const hypebeats = new HypeBeats("https://yourlogstoreurl.com");

hypebeats.log({
    message: "hola log"
});
// hypebeats.info("hola info");
// hypebeats.error("hola error");
// hypebeats.warn("hola warn");