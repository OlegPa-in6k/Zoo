describe("Hedgehog functions", function() {
  var hedgehog  = new Hedgehog("Bob", "Hedgehog", 1000, 1000, 100);

it ("test Hedgehog Use Voice", function(){
expect(hedgehog.getVoice()).toBe("Hedgehog voice");
});

it ("get Hedgehog name", function(){
  expect(hedgehog.getName()).toBe("Bob");
});

it ("get Hedgehog type", function(){
  expect(hedgehog.getType()).toBe("Hedgehog");
});

it ("get Main parent class" , function(){
  expect (hedgehog instanceof Animal).toBe(true);
})

it ("get kind class" , function(){
  expect (hedgehog instanceof CarnivoreAnimal).toBe(true);
})

it ("get Parent class" , function(){
  expect (hedgehog instanceof Hedgehog).toBe(true);
})

});
