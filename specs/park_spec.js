var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("park", function(){
  var park;

  beforeEach(function(){
    park = new Park();
  });

  it("can have dinosaurs added to it", function() {
    dinos = [];
    dinos[0] = new Dinosaur("Tyrannosaurus", 2);
    dinos[1] = new Dinosaur("Velociraptor", 1);

    park.add(dinos[0]);
    park.add(dinos[1]);
    for(var index in dinos){
      assert.strictEqual(park.enclosure[0], dinos[0]);
    }
  });

});
