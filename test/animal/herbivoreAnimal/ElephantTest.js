describe("Elephant functions", function() {
  var elephant  = new Elephant("Smoffy", "Elephant", 1000, 1000, 100);

it ("test Elephant Use Voice", function(){
expect(elephant.getVoice()).toBe("Elephant voice");
});

it ("get Elephant name", function(){
  expect(elephant.getName()).toBe("Smoffy");
});

it ("get Elephant type", function(){
  expect(elephant.getType()).toBe("Elephant");
});

it ("get Main parent class" , function(){
  expect (elephant instanceof Animal).toBe(true);
})

it ("get Parent class" , function(){
  expect (elephant instanceof HerbivoreAnimal).toBe(true);
})

});
