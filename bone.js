var request = require("request"),
    q = require("q");

/**
 *  This method provides nothing but a backbone to send and receive commands to quickpay
 *
 *  @method:        String
 *                      What http method is being used? (DELETE | GET | PATCH | POST | PUT)
 *  @path:          String
 *                      Where is the method being sent to?
 *                          Example: /ping
 *  @auth:          String
 *                      The authentication is built once when the module is initialized
 *  @headers:       Object[Optional]
 *                      What headers does the path need in order to function?
 *                          As default "Accept-Version" is set to "v10" and
 *                          "Authorization" is set to initialized auth
 *  @parameters:    Object[Optional]
 *                      What parameters does the path need in order to function?
 *                          There are no defaults set
 *
 *  @return         Promise
 *                      .then always returns the result and no statusCode
 *                          .then(function(result) {
 *                              //Do something with result
 *                          })
 *                      .catch always returns error, response and result
 *                          .catch(function(result) {
 *                              //Do something with result.error (May be null)
 *                              //Do something with result.response (Never null)
 *                              //Do something with result.result (May be null)
 *                          })
 */
module.exports = function(method, path, auth, headers, parameters) {
    var _url = "https://api.quickpay.net/" + path;
    var _parameters = parameters;
    var _headers = headers;

    if (!_parameters)
        _parameters = {};
    if (!_headers)
        _headers = {};
    if (!_headers["Accept-Version"])
        _headers["Accept-Version"] = "v10";
    if (!_headers["Authorization"])
        _headers["Authorization"] = auth;

    var deferred = q.defer();
    request({
        url: _url,
        method: method,
        preambleCRLF: true,
        postambleCRLF: true,
        headers: _headers,
        json: _parameters
    }, function(error, response, result) {
        if (!error) {
            if (response.statusCode === 200 ||
                response.statusCode === 201 ||
                response.statusCode === 204 ||
                response.statusCode === 202) {
                deferred.resolve(result);
            } else {
                deferred.reject({
                    error: error,
                    response: response,
                    result: result
                });
            }
        } else {
            deferred.reject({
                error: error,
                response: response,
                result: result
            });
        }
    });
    return deferred.promise;
};