# quick-pay
quick-pay provides an interface for quickPay with nodeJS

### Installation
```npm install quick-pay```

###Getting started
```
var quickPay = require("quick-pay")(YOUR API KEY);
```
####Methods
Once initialized quickPay will supply you with 5 http methods
```
var quickPay = require("quick-pay");
quickPay.delete(path, headers, parameters)
quickPay.get(path, headers, parameters)
quickPay.patch(path, headers, parameters)
quickPay.post(path, headers, parameters)
quickPay.put(path, headers, parameters)
```
All methods supplied by quickPay will return a promise.

path indicates with API you wish to use, to use ping simply do
```
quickPay.get("ping", null, null)
  .then(function(result) {
    //Result from https://api.quickpay.net as JSON
  })
  .catch(function(err) {
    //err.error (May be null in case of 404)
    //err.response (The entire response from https://api.quickpay.net)
    //err.result (May be null or contain a message such as "Not Found")
    //err.result (May also be an object)
  });
```
See documentation for error codes http://tech.quickpay.net/api/services/?scope=merchant

headers and parameters are JSON objects.
By default all methods will apply your API KEY to the "Authorization" header
and "v10" to "Accept-Version" header

####Chaining
Chaining is made easy since promises are used
```
quickPay.get("ping", null, null)
  .then(function(result) {
    //Do something with result
    return quickPay.post("ping", null, null);
  })
  .then(function(result) {
    //Do something with the final result
  })
  .catch(function(err) {
    //err.error (May be null in case of 404)
    //err.response (The entire response from https://api.quickpay.net)
    //err.result (May be null or contain a message such as "Not Found")
    //err.result (May also be an object)
  });
```
Catch is only fired in case of an error in either the first or second promise