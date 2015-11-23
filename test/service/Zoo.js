describe("Zoo Service functions", function() {
  var animals = new Zoo();
  var startLenght = animals.getAnimals().length;


it ("test Add animal", function(){
  animals.addAnimal(1);
  expect(animals.getAnimals().length).toBe(startLenght + 1);
});



});
