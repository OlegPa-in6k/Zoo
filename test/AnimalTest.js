describe("Animals functions", function() {
  var animal = new Animal("name", "type", 1000, 1000, 100);

it ("test Use Voice", function(){
expect(animal.getVoice()).toBe("Animal voice");
});

it ("get animal name", function(){
  expect(animal.getName()).toBe("name");
});

it ("get animal type", function(){
  expect(animal.getType()).toBe("type");
});
it ("get animal size", function(){
  expect(animal.getSize()).toBe(100);
});

});
