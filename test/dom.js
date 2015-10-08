'use strict';

describe("DOM Test", function () {
    var myEl = document.getElementById('myDiv');

    it("has the right text", function () {
        (myEl.innerHTML).should.equal("Hello World!");
    });
});
