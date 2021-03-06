// const axios = require("axios");

const logTypes = {
    LOG: "LOG",
    INFO: "INFO",
    ERROR: "ERROR",
    WARN: "WARN",
};

let url;

function postData(logs, type) {

    if (typeof url !== "string") {
        return console.warn("HypeBeats initialization failure: \n\n\tnew HypeBeats() \n\n\t^logStoreURL is undefined");
    }

    // axios.post(url, { logs, type })
    //     .then(res => console.log(res.data))
    //     .catch(err => console.error("Beats error: ", err.response || err));
}

class HypeBeats {

    constructor(logStoreURL) {
        url = logStoreURL;
    }

    // log
    log(logs) {
        console.log("%c HypeLog: ", "background: #374046; color: #fff", logs);
        postData(logs, logTypes.LOG);
    }
    
    // info
    info(logs) {
        console.info("%c HypeInfo: ", "background: #2196F3; color: #fff", logs);
        postData(logs, logTypes.INFO);
    }
    
    // error
    error(logs) {
        console.error("%c HypeError: ", "background: #F44336; color: #fff", logs);
        postData(logs, logTypes.ERROR);
    }
    
    // warn
    warn(logs) {
        console.warn("%c HypeWarn: ", "background: #FF9800; color: #fff", logs);
        postData(logs, logTypes.WARN);
    }
}

module.exports = HypeBeats;