var index = require("../index.js");
var assert = require("assert");
var should = require("should");

describe('GET then POST ping', function() {
    describe('With only first argument as "ping"', function() {
        it('Returns an object with a msg', function(done) {
            index.get("ping")
                .then(function(result) {
                    result.msg.should.equal("Pong from QuickPay API V10, scope is anonymous");
                    return index.post("ping");
                })
                .then(function(result) {
                    result.msg.should.equal("Pong from QuickPay API V10, scope is anonymous");
                    done();
                })
                .catch(function(result) {
                    done(result);
                });
        });
    });
});