describe("", function() {
  it("Un postre de una hora y media no es rápido", function() {
    let postresRapidos = [ { ingredientes: ["galletitas", "dulceDeLeche", "crema"], tiempo_de_coccion: 20 }, { ingredientes: ["huevos", "leche", "azúcar", "vainilla"], tiempo_de_coccion: 50 } ];
    let postreDeLeche = {ingredientes:["leche"], tiempoDeCoccion:90};
    agregarAPostresRapidos(postresRapidos, postreDeLeche)
    assert.equal(postresRapidos.length, 2);
  })
  
  it("Un postre de media hora es rápido", function() {
    let postresRapidos = [ { ingredientes: ["galletitas", "dulceDeLeche", "crema"], tiempo_de_coccion: 20 }, { ingredientes: ["huevos", "leche", "azúcar", "vainilla"], tiempo_de_coccion: 50 } ];
    let postreDeLeche = {ingredientes:["leche"], tiempoDeCoccion:30};
    agregarAPostresRapidos(postresRapidos, postreDeLeche);
    assert.equal(postresRapidos.length, 3);
    assert.equal(postresRapidos.slice(-1).pop(), postreDeLeche);
  })
  
  it("Un postre de una hora es rápido", function() {
    let postresRapidos = [ { ingredientes: ["galletitas", "dulceDeLeche", "crema"], tiempo_de_coccion: 20 }, { ingredientes: ["huevos", "leche", "azúcar", "vainilla"], tiempo_de_coccion: 50 } ];
    let postreDeLeche = {ingredientes:["leche"], tiempoDeCoccion:60};
    agregarAPostresRapidos(postresRapidos, postreDeLeche);
    assert.equal(postresRapidos.length, 3);
    assert.equal(postresRapidos.slice(-1).pop(), postreDeLeche);
  })
})