function AnimalsListService(options) {
  var elem;

  function getElem() {
    if (!elem) render();
    return elem;
  }

  function render() {

    elem = document.createElement('div');
    elem.className = "animalsList";

    var titleElem = document.createElement('span');
    elem.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = options.title;

    renderItems();

  }

  function renderItems() {
    var items = options.animals || [];
    var list = document.createElement('ul');
    items.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item.getName() + " " + item.getType();
      list.appendChild(li);

      var btnKill = document.createElement("button");

      btnKill.type = "button";
      btnKill.className = "btn-kill"
      btnKill.textContent = "Kill";

      btnKill.onclick = function(){

      list.removeChild(li);
      list.removeChild(btnKill);
      for(var i = 0; i < items.length; i++){
        if(items[i].getName() == item.getName()){
          delete options.animals[i];
          delete ChatService.animals;
        }
      }
    }

      list.appendChild(btnKill);

    });
    elem.appendChild(list);
  }

  this.getElem = getElem;

}
