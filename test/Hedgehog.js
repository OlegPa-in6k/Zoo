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

});
