function Animal(name, type, eatTime, activity, size ){
  this.name = name;
  this.type = type;
  this.eatTime = eatTime
  this.activity = activity;
  this.size = size;
  this.voice = "Animal voice";
}

Animal.prototype.getName = function(){
    return this.name;
}

Animal.prototype.getType = function(){
return this.type;
}

Animal.prototype.getSize = function(){
return this.size;
}

Animal.prototype.getVoice = function(){
return this.voice;
}
