document.addEventListener("DOMContentLoaded", function(event) {
  var hedgehog1  = new Hedgehog("Bob", "Hedgehog", 1000, 1000, 100);
  var hedgehog2  = new Hedgehog("Boba", "Hedgehog", 1000, 1000, 100);
  var elephant1  = new Elephant("Smoffy", "Elephant", 1000, 1000, 500);
  var elephant2  = new Elephant("Smok", "Elephant", 1000, 1000, 500);

  var animals = [hedgehog1, hedgehog2, elephant1, elephant2];

    var animalList = new AnimalsListService({
      title: "Animals",
      items: animals
    });

    var chatService = new ChatService({
      items: animals
    });

    document.body.appendChild(animalList.getElem());
});
