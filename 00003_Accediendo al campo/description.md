Cuando consultaste los registros existentes, se veía algo parecido a lo siguiente:

```javascript
ム tajMahal
=> { "nombre" : "Taj Mahal", "locacion" : "Agra, India", "año": 1653 }
```

Esa consulta era porque estábamos viendo al registro `tajMahal` completo, incluyendo todos sus campos. ¡Pero también se puede consultar por un campo particular! Mirá :eyes::

```javascript
ム tajMahal["locacion"]
=> "Agra, India"
ム tajMahal["año"]
=> 1653
```

> Declaramos los planetas `mercurio`, `marte` y `saturno` como registros con la siguiente información: `nombre`, `temperaturaPromedio` y si `tieneAnillos`. ¡Probalos en la consola!
