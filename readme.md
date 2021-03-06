¿Por qué evitar los callbacks en las llamadas asíncronas?
    Porque generará codigo difícil de leer y posibles consecuencias.

¿Qué es una promesa?
    Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona.Esto quiere decir que podremos saber cuando un llamado asíncrono se resolvió o se rechazó. Para crear una promesa se hace a través del objeto Promise, Este recibe como parámetro una función callback, que retorna la función resolve y la función reject .

¿Qué es el callback hell?
    Este enfoque de usar callbacks es perfecto cuando solo tenemos que resolver un llamado asíncrono. Si se llaman 3 funciones asíncronas que dependen una de otra se anidan y esto nos genera un infierno de callbacks.