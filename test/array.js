'use strict';

// node cli use
// var assert = require('chai').assert,
//     expect = require('chai').expect;

describe('Array', function() {

    before(function() {
        console.log('this called in before all');
    });

    beforeEach(function() {
        console.log('invoke before each method');
    });

    afterEach(function() {
        console.log('invoke after each method');
    });

    after(function() {
        console.log('this called in after all');
    });


    describe('#indexOf()', function() {

        it('assert return -1 when the value is not present', function(done) {
          console.log('invoke one assert');
          assert.equal(-1, [1,2,3].indexOf(5));
          assert.equal(-1, [1,2,3].indexOf(0));
          done();
        });
    });

    describe('#indexOf()', function() {

        it('should return -1 when the value is not present', function(done) {
          console.log('invoke second should');
          [1,2,3].indexOf(5).should.equal(-1);
          [1,2,3].indexOf(0).should.equal(-1);
          done(); // Useful for async tests.
        });
    });

    describe('#indexOf()', function() {

        it('expect return -1 when the value is not present', function(done) {
          console.log('invoke third expect');
          expect([1,2,3].indexOf(5)).to.equal(-1);
          expect([1,2,3].indexOf(0)).to.equal(-1);
          done();
        });
    });

});
