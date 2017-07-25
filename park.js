
var Park = function(){
  this.enclosure = []
}

Park.prototype.add = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.remove = function(type){
  var length = this.enclosure.length;
  for(var j=length-1; j>=0; j--){
    if(this.enclosure[j].type === type){
      this.enclosure.splice(j, 1);
    }
  }
}

module.exports = Park;
