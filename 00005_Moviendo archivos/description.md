Por el momento estuvimos creando y consultando registros. ¿No sería interesante poder... modificarlos? :smirk:

La sintaxis para modificar campos de registros es muy similar a lo que hacemos para cambiar los valores de las variables. Por ejemplo, para cambiar la temperatura de un planeta:

```javascript
saturno.temperaturaPromedio = -140;
```
Ahora imaginá que tenemos un registro para representar un archivo, del que sabemos su ruta (dónde está guardado) y su fecha de creación. Si queremos cambiar su ruta podemos hacer...

```javascript
ム leeme
{ ruta: "C:\leeme.txt", creacion: "23/09/2004" }

ム moverArchivo(leeme, "C:\documentos\leeme.txt") 
```

Luego el registro `leeme` tendrá modificada su ruta:

```javascript
ム leeme
{ ruta: "C:\documentos\leeme.txt", creacion: "23/09/2004" }
```

> ¡Es tu turno! Definí el procedimiento `moverArchivo`, que recibe un registro y una nueva ruta y modifica el archivo con la nueva ruta.
