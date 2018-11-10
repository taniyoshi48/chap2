/**
 * [scraping.js]
 * encoding=utf-8
 */

require('date-utils');



var api_impl = {
    "fs" : require('fs'),
    "cheerioHttp" : require('cheerio-httpcli'),
    "cheerio" : require('cheerio')
};
exports.api_impl = api_impl;

var CACHE_PATH = "./data/cache.html";


