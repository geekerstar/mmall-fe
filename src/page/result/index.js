require("./index.css");
require("page/common/nav-simple/index.css");

var mm = require('util/mm.js');

$(function() {
    var type = mm.getUrlParam("type") || "default";
    var $element = $('.resultCon.' + type + '-success').show();
    if (mm.getUrlParam("type") === "payment") {
        var orderNo = mm.getUrlParam("orderNo");
        $(".order").attr("href", $(".order").attr("href") + orderNo);
    }
});