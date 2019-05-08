describe("", function() {
  it("endulzarMenu le agrega azúcar al postre", function() {
    
    let menu = {platoPrincipal: "bife de lomo", ensalada: ["papa", "zanahoria", "arvejas"], postre: { ingredientes: ["queso crema", "frambuesas"], tiempoDeCoccion: 80 }};
    endulzarMenu(menu);
    
    assert.equal(menu.postre.ingredientes.length, 3);
    assert.equal(menu.postre.ingredientes.slice(-1).pop(), "azúcar");
  })

  it("endulzarMenu le agrega azúcar al postre", function() {
    
    let menu = {platoPrincipal: "milanesa", ensalada: ["lechuga", "cebolla"], postre: { ingredientes: ["dulce de leche", "vainilla", "azúcar"], tiempoDeCoccion: 30 }};
    endulzarMenu(menu);
    
    assert.equal(menu.postre.ingredientes.length, 4);
    assert.equal(menu.postre.ingredientes.slice(-1).pop(), "azúcar");
  })
})