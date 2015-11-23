function ChatService(options) {
  var elem;
  var chat;

  function getElem() {
    if (!elem) render();
    return elem;
  }

  function render() {
    elem = document.createElement('div');
    elem.className = "animalsChat";
    renderItems();
  }

  function renderItems() {
    var animals = options.animals || [];
    chat = document.createElement('div');

    animals.getAnimals().forEach(function(animal) {

        var timer = setInterval(function(){
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
