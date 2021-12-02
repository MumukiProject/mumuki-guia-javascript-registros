describe("", function() {
  
  let flanCasero = { ingredientes: ["huevos", "leche", "azúcar", "vainilla"], tiempoDeCoccion: 50 }
  let cheesecake = { ingredientes: ["frambuesas", "queso crema"], tiempoDeCoccion: 80 }
  let lemonPie = { ingredientes: ["jugo de limón", "almidón de maíz", "leche", "huevos"], tiempoDeCoccion: 65 }

  it("El flan casero es más difícil de cocinar que el cheesecake", function() {
    assert.equal(masDificilDeCocinar(flanCasero, cheesecake), flanCasero);
  })
  
  it("El lemonPie es más difícil de cocinar que el cheesecake", function() {
    assert.equal(masDificilDeCocinar(cheesecake, lemonPie), lemonPie);
  })
  
  it("Si dos postres son igual de difíciles de cocinar, devuelve cualquiera de los dos", function() {
    let masDificil = masDificilDeCocinar(flanCasero, lemonPie);
    assert(masDificil == flanCasero || masDificil == lemonPie);
  })
})