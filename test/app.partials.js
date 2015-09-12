require('mocha');
require('should');
var assert = require('assert');
var assemble = require('..');
var app;

describe('app', function () {
  beforeEach(function() {
    app = assemble();
  });

  describe('add partials', function () {
    it('should add partials to `app.views.partials`:', function () {
      app.partials({
        'a.hbs': {path: 'a.hbs', contents: new Buffer('a')},
        'b.hbs': {path: 'b.hbs', contents: new Buffer('b')},
        'c.hbs': {path: 'c.hbs', contents: new Buffer('c')},
      });
      assert(Object.keys(app.views.partials).length === 3);
    });
  });
});