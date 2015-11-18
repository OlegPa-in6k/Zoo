function Animal(name, type, eatTime, activity, size ){
this.name = name;
this.type=type;
this.eatTime = eatTime;
this.activity = activity;
}

Animal.prototype.useVoice = function(){
    return this.activity;
}

Animal.prototype.getName = function(){
    return this.name;
}

Animal.prototype.eatTime = function(){

}
