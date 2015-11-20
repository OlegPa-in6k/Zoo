function ChatService(options) {
  var elem;

  function getElem() {
    if (!elem) render();
    return elem;
  }

  function render() {
    elem = document.createElement('div');
    elem.className = "chat";

    renderItems();

  }

  function renderItems() {
    var items = options.items || [];
    var list = document.createElement('ul');
    items.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item.getVoice();
      list.appendChild(li);

    });
    elem.appendChild(list);
  }

  this.getElem = getElem;

}
