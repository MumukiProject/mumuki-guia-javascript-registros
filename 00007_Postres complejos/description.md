Unos ejercicios atrás te contamos la diferencia entre listas y registros. ¡Pero eso no significa que no podamos usar ambas estructuras a la vez! :wink:

Por ejemplo, una lista puede ser el campo de un registro. Mirá estos registros de postres, de los cuales sabemos cuántos minutos de cocción requieren y sus ingredientes:

```javascript
let flanCasero = { ingredientes: ["huevos", "leche", "azúcar", "vainilla"], tiempoDeCoccion: 50 }
let cheesecake = { ingredientes: ["queso crema", "frambuesas"], tiempoDeCoccion: 80 }
let lemonPie = { ingredientes: ["jugo de limón", "almidón de maíz", "leche", "huevos"], tiempoDeCoccion: 65 }
```

> Definí la función `masDificilDeCocinar`, que recibe dos registros de postres como argumentos y retorna el que tiene más ingredientes de los dos.

> ```javascript
ム masDificilDeCocinar(flanCasero, cheesecake)
{ ingredientes: ["huevos", "leche", "azúcar", "vainilla"], tiempoDeCoccion: 50 }
```
