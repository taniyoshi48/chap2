/**
 * [api.js]
 */

var url = require("url")

var authentication = require("./authentication.js");
var scraping = require("./scraping.js");

var HEADER_JSON = {
    "Access-Control-Allow-Origin" : "*", // JSONはクロスドメインがデフォルトNG。
    "Pragma" : "no-cacha", 
    "Cache-Control" : "no-cache",
    "Content-Type" : "application/json; charset=utf-8"
};
var HEADER_TEXT = {
    "Access-Control-Allow-Origin" : "*",
    "Pragma" : "no-cacha", 
    "Cache-Control" : "no-cache",
    "Content-Type" : "text/html"
};


