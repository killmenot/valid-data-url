'use strict';

function validDataUrl(s) {
    return validDataUrl.regex.test(s);
}
validDataUrl.regex =  /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+\=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;

module.exports = validDataUrl;
