/**
 * [scraping.js]
 * encoding=utf-8
 */

require('date-utils');
var fs =  require('fs');
//var cheerioHttp = require('cheerio-httpcli');
//var cheerio = require('cheerio');

var api_impl = {
    

};
exports.api_impl = api_impl;

var CACHE_PATH = "./data/cache.html";

var EVENTE_TITLE = process.env.SEARCH_KEYWORD || "#3good";
var SEARCH_KEYWORD = EVENTE_TITLE;
SEARCH_KEYWORD = SEARCH_KEYWORD.replace(/#/, '%23');