"use strict";
var _free = require("./bone.js");
var _auth = "undefined";
/**
 *  Initializes the module with the given API KEY given by quick - Must be initialized
 *  before using the rest of the module
 *
 *  @API_KEY: String - The API KEY given by quickpay
 *
 */
module.exports = function(API_KEY) {
    if (API_KEY)
        _auth = "Basic " + new Buffer(":" + API_KEY).toString('base64');
};
/**
 *  Make a http DELETE request to quickpay
 *
 *  @path:          String
 *                      Set the path of the API that is being used
 *  @headers:       Object[Optional]
 *                      Minimum headers are:
 *                              "Accept-Version" is set to "v10",
 *                              "Authorization" is set to initialized _auth
 *  @parameters;    Object[Optional]
 *                      Parameters needed by quickpay, example:
 *                          {
 *                              order_id: "abcd"
 *                          }
 */
module.exports.delete = function(path, headers, parameters) {
    return _free("DELETE", path, _auth, headers, parameters);
};

/**
 *  Make a http GET request to quickpay
 *
 *  @path:          String
 *                      Set the path of the API that is being used
 *  @headers:       Object[Optional]
 *                      Minimum headers are:
 *                              "Accept-Version" is set to "v10",
 *                              "Authorization" is set to initialized _auth
 *  @parameters;    Object[Optional]
 *                      Parameters needed by quickpay, example:
 *                          {
 *                              order_id: "abcd"
 *                          }
 */
module.exports.get = function(path, headers, parameters) {
    return _free("GET", path, _auth, headers, parameters);
};

/**
 *  Make a http PATCH request to quickpay
 *
 *  @path:          String
 *                      Set the path of the API that is being used
 *  @headers:       Object[Optional]
 *                      Minimum headers are:
 *                              "Accept-Version" is set to "v10",
 *                              "Authorization" is set to initialized _auth
 *  @parameters;    Object[Optional]
 *                      Parameters needed by quickpay, example:
 *                          {
 *                              order_id: "abcd"
 *                          }
 */
module.exports.patch = function(path, headers, parameters) {
    return _free("PATCH", path, _auth, headers, parameters);
};

/**
 *  Make a http PATCH request to quickpay
 *
 *  @path:          String
 *                      Set the path of the API that is being used
 *  @headers:       Object[Optional]
 *                      Minimum headers are:
 *                              "Accept-Version" is set to "v10",
 *                              "Authorization" is set to initialized _auth
 *  @parameters;    Object[Optional]
 *                      Parameters needed by quickpay, example:
 *                          {
 *                              order_id: "abcd"
 *                          }
 */
module.exports.post = function(path, headers, parameters) {
    return _free("POST", path, _auth, headers, parameters);
};

/**
 *  Make a http PUT request to quickpay
 *
 *  @path:          String
 *                      Set the path of the API that is being used
 *  @headers:       Object[Optional]
 *                      Minimum headers are:
 *                              "Accept-Version" is set to "v10",
 *                              "Authorization" is set to initialized _auth
 *  @parameters;    Object[Optional]
 *                      Parameters needed by quickpay, example:
 *                          {
 *                              order_id: "abcd"
 *                          }
 */
module.exports.put = function(path, headers, parameters) {
    return _free("PUT", path, _auth, headers, parameters);
};

module.exports.get("ping")
    .then(function(result) {
        console.log(result);
    })
    .catch(function(result) {
        console.log(result.result);
    });