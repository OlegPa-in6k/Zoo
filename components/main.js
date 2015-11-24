document.addEventListener("DOMContentLoaded", function(event) {

  var hedgehog1  = new Hedgehog("Bob", "Hedgehog", 2, 1, 100);
  var hedgehog2  = new Hedgehog("Boba", "Hedgehog", 20, 5, 100);
  var elephant1  = new Elephant("Smoffy", "Elephant", 15, 10, 500);
  var elephant2  = new Elephant("Smok", "Elephant", 10, 12, 500);


  var animalService = new Zoo();

  animalService.addAnimal(hedgehog1);
  animalService.addAnimal(hedgehog2);
  animalService.addAnimal(elephant1);
  animalService.addAnimal(elephant2);



    var animalList = new Animals({
      title : "Animals",
      animals : animalService
    });

    var chat = new Chat({
      animals : animalService
    });



    document.body.appendChild(animalList.getElem());
    document.body.appendChild(chat.getElem());


});
