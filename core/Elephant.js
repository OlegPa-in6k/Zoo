function Elephant(name, type, eatTime, activity, size){
  CarnivoreAnimal.apply(this, arguments);
  this.type = "Elephant";
  this.voice = "Elephant voice";
}

Elephant.prototype = Object.create(CarnivoreAnimal.prototype);
Elephant.prototype.constructor = Elephant;
