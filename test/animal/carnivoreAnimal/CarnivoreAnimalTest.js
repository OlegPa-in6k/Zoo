describe("CarnivoreAnimal functions", function() {
  var carnivore  = new CarnivoreAnimal("CarnivoreName", "carnivoreType", 1000, 1000, 100);

it ("test Use Voice", function(){
expect(carnivore.getVoice()).toBe("CarnivoreAnimal voice");
});

it ("get animal name", function(){
  expect(carnivore.getName()).toBe("CarnivoreName");
});

it ("get animal type", function(){
  expect(carnivore.getType()).toBe("carnivoreType");
});

it ("get Parent class" , function(){
  expect (carnivore instanceof Animal).toBe(true);
})

});
