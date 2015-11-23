function Animals(options) {
  var elem;
  var animals = options.animals || [];

  function getElem() {
    if (!elem) render();
    return elem;
  }

  function render() {

    elem = document.createElement('div');
    elem.className = "names";

    var titleElem = document.createElement('span');
    elem.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = options.title;

    showList();


  }

  function showList() {


      var list = document.createElement('ul');

      animals.getAnimals().forEach(function(animal) {
        var li = document.createElement('li');
        li.className = "names-li";

        li.textContent = animal.getName() + " " + animal.getType();
        list.appendChild(li);

        animal.eatTimer = setTimeout(function(){
        list.removeChild(li);
        clearInterval(animal.timer);
        clearInterval(animal.eatTimer);
        }, animal.getEatTime());



        var btnKill = document.createElement("button");

        btnKill.type = "button";
        btnKill.className = "btn-kill"
        btnKill.textContent = "Kill";

        btnKill.onclick = function(e){
          animals.removeAnimal(animal);
          list.removeChild(li);
          clearInterval(animal.timer);
          clearInterval(animal.eatTimer);

        };



        li.appendChild(btnKill);
    });

    elem.appendChild(list);
  }

  this.getElem = getElem;

}
