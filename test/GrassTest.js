describe("Animals functions", function() {
  var grass  = new Grass();

  it ("test addGrass", function(){
    grass.addGrass(1);

  expect(grass.getCount()).toBe(201);
  });

  it ("test minusGrass", function(){
    grass.minusGrass();
  expect(grass.getCount()).toBe(200);
  });

});
