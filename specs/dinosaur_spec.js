var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("dinosaur", function(){
  var dino1;

  beforeEach(function(){
    dino1 = new Dinosaur("Tyrannosaurus", 2);
  });

  it("should have a type on creation", function(){
    assert.strictEqual(dino1.type, "Tyrannosaurus");
  });

  it("should have an offspringPerYear count on creation", function(){
    assert.strictEqual(dino1.offspringPerYear, 2);
  });

});
