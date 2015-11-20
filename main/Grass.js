function Grass(){
  this.count = 200;
}

Grass.prototype.addGrass = function(count){
  this.count +=count;
}
Grass.prototype.getCount = function(){
  return this.count;
}

Grass.prototype.minusGrass = function(){
  this.count -= 1;
}
