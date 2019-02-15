describe("", function() {
  it("moverArchivo le cambia la ruta a un archivo al pasar una ruta nueva", function() {
    let archivo = {ruta:"/usr/miarchivo.doc", creacion:"15/02/2019"};
    moverArchivo(archivo, "/home/miarchivo.doc");
    assert.equal(archivo.ruta, "/home/miarchivo.doc");
  })
})

describe("", function() {
  it("moverArchivo le mantiene la ruta a un archivo si se pasa la misma", function() {
    let archivo = {ruta:"/usr/miarchivo.doc", creacion:"15/02/2019"};
    moverArchivo(archivo, "/usr/miarchivo.doc");
    assert.equal(archivo.ruta, "/usr/miarchivo.doc");
  })
})

describe("", function() {
  it("moverArchivo no modifica la fecha de creación del archivo", function() {
    let archivo = {ruta:"/usr/miarchivo.doc", creacion:"15/02/2019"};
    moverArchivo(archivo, "/home/miarchivo.doc");
    assert.equal(archivo.creacion, "15/02/2019");
  })
})