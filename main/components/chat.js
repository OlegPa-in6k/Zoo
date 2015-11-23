function Chat(options) {
  var elem;
  var chat;
  var voice;
  var list;

  function getElem() {
    if (!elem) render();
    return elem;
  }

  function render() {
    elem = document.createElement('div');
    elem.className = "chat";
    elem.id = "chat";
    renderItems();
  }


  function renderItems(){

      var animals = options.animals || [];
      list = document.createElement('ul');

      animals.getAnimals().forEach(function(animal){
        animal.timer = setInterval(function(){
        printAnimalVoice(animal);}, animal.getActivity()),

        animal.eatTimer = setInterval(function(){
        printAnimalEatTime(animal);}, animal.getEatTime()*0.75)

      })
      elem.appendChild(list);
  }


  function printAnimalVoice(animal){
    var li1 = document.createElement('li');
    li1.textContent = animal.getName() + " : " + animal.getVoice();
    list.insertBefore(li1, list.firstChild);


}

  function printAnimalEatTime (animal){
    var li2 = document.createElement('li');
    li2.className = ("hungry");
    li2.textContent = animal.getName() + " : Is Hungry! Feed or it will die!";
    list.insertBefore(li2, list.firstChild);
  }

  this.getElem = getElem;

}
