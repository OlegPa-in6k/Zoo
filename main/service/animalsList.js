document.addEventListener("DOMContentLoaded", function(event) {
  var hedgehog1  = new Hedgehog("Bob", "Hedgehog", 1000, 1000, 100);
  var hedgehog2  = new Hedgehog("Boba", "Hedgehog", 1000, 5000, 100);
  var elephant1  = new Elephant("Smoffy", "Elephant", 1000, 10000, 500);
  var elephant2  = new Elephant("Smok", "Elephant", 1000, 10000, 500);

  // var animals = [hedgehog1, hedgehog2, elephant1, elephant2];

  var animalService = new AnimalsService();
      animalService.addAnimal(hedgehog1);
      animalService.addAnimal(hedgehog2);
      animalService.addAnimal(elephant1);
      animalService.addAnimal(elephant2);



    var animalList = new ShowService({
      title : "Animals",
      animals : animalService
    });

    // var chatService = new ChatService({
    //   animals : animalService
    // });

    document.body.appendChild(animalList.getElem());
    // document.body.appendChild(chatService.getElem());

});
