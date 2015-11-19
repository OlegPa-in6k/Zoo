describe("Animals functions", function() {
  var grass  = new Grass();

  it ("test AddGrass", function(){
    grass.addGrass(1);

  expect(grass.getCount()).toBe(201);
  });

  it ("test AddGrass", function(){
    grass.minusGrass();
  expect(grass.getCount()).toBe(200);
  });

});
