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
    var items = options.animals || [];
    chat = document.createElement('div');

    items.forEach(function(item) {
        var timer = setInterval(function(){
        print(item);},item.getActivity())
     });
    elem.appendChild(chat);
  }

  function print(item){

    chat.innerHTML = item.getName() + " : " + item.getVoice() + "<br>"+ chat.innerHTML;
    if ( chat.innerHTML.length > 999 )
      chat.innerHTML = chat.innerHTML.substring(0, 999);

}

  this.getElem = getElem;

}
