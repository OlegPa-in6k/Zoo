function ShowService(options) {
  var elem;
  var animals = options.animals || [];

  function getElem() {
    if (!elem) render();
    return elem;
  }

  function render() {

    elem = document.createElement('div');
    elem.className = "zoo";

    // var titleElem = document.createElement('span');
    // elem.appendChild(titleElem);
    // titleElem.className = "title";
    // titleElem.textContent = options.title;

    showList();
    showChat();

  }

  function showList() {
      var animalListDiv = document.createElement('div');
      animalListDiv.className = "animalList";

      var titleElem = document.createElement('span');
      animalListDiv.appendChild(titleElem);

      titleElem.className = "title";
      titleElem.textContent = options.title;

      var list = document.createElement('ul');

      animals.getAnimals().forEach(function(animal) {
        var li = document.createElement('li');

        li.textContent = animal.getName() + " " + animal.getType();
        list.appendChild(li);

        var btnKill = document.createElement("button");

        btnKill.type = "button";
        btnKill.className = "btn-kill"
        btnKill.textContent = "Kill";

        btnKill.onclick = function(){
          animals.removeAnimal(animal);
          list.removeChild(li);
          clearInterval(animal.timer);

        };

        li.appendChild(btnKill);
    });

    animalListDiv.appendChild(list);

    elem.appendChild(animalListDiv);
  }

  function showChat() {

    chat = document.createElement('div');
    chat.className = "chat";

    animals.getAnimals().forEach(function(animal) {
        animal.timer = setInterval(function(){
        print(animal);},animal.getActivity())
     });
    elem.appendChild(chat);
    
  }


  function print(animal){
    chat.innerHTML = animal.getName() + " : " + animal.getVoice() + "<br>"+ chat.innerHTML;
    if ( chat.innerHTML.length > 999 )
      chat.innerHTML = chat.innerHTML.substring(0, 999);

}

  this.getElem = getElem;

}
