var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("park", function(){
  var park;
  var dinos;

  beforeEach(function(){
    park = new Park();
    dinos = [];
    dinos[0] = new Dinosaur("Tyrannosaurus", 2);
    dinos[1] = new Dinosaur("Tyrannosaurus", 3);
    dinos[2] = new Dinosaur("Velociraptor", 1);
  });

  it("can add dinosaurs to enclosure", function() {
    for(var dino of dinos){
      park.add(dino);
    }

    for(var index in dinos){
      assert.strictEqual(park.enclosure[0], dinos[0]);
    }
  });

  it("can remove dinosaurs of given type", function() {
    for(var dino of dinos){
      park.add(dino);
    }

    park.remove("Tyrannosaurus");
    assert.strictEqual(park.enclosure[0], dinos[2]);
  });

  it("can get dinosaurs with offspringPerYear >= 2", function() {
    dinos.push(new Dinosaur("Velociraptor", 5));

    for(var dino of dinos){
      park.add(dino);
    }

    var expected = [];
    expected.push(dinos[0]);
    expected.push(dinos[1]);
    expected.push(dinos[3]);

    var result = park.getWithOffspingCountTwoAndOver();

    for(var index in expected){
      assert.strictEqual(result[index], expected[index]);
    }
  });

});
