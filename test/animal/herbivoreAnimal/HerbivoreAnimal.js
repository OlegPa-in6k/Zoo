
describe("HerbivoreAnimal functions", function() {
  var herbivore  = new HerbivoreAnimal("HerbivoreAnimalName", "HerbivoreAnimalType", 1000, 1000, 100);

it ("test Use Voice", function(){
expect(herbivore.getVoice()).toBe("HerbivoreAnimal voice");
});

it ("get animal name", function(){
  expect(herbivore.getName()).toBe("HerbivoreAnimalName");
});

it ("get animal type", function(){
  expect(herbivore.getType()).toBe("HerbivoreAnimalType");
});

it ("get Parent class" , function(){
  expect (herbivore instanceof Animal).toBe(true);
})

});
