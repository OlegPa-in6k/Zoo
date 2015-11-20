
describe("HerbivoreAnimal functions", function() {
  var carnivore  = new HerbivoreAnimal("HerbivoreAnimalName", "HerbivoreAnimalType", 1000, 1000, 100);

it ("test Use Voice", function(){
expect(carnivore.getVoice()).toBe("HerbivoreAnimal voice");
});

it ("get animal name", function(){
  expect(carnivore.getName()).toBe("HerbivoreAnimalName");
});

it ("get animal type", function(){
  expect(carnivore.getType()).toBe("HerbivoreAnimalType");
});

});
