# Practico Requests - Fake Store Api

En este práctico ejercitaremos el uso de de request mediante una api que simula una tienda.

Realizar las siguientes actividades:

1. Forkear el siguiente [repositorio](https://github.com/fedevirgolini-itr/fakeStore) y luego clonarlo. Posteriormente se deben instalar las dependencias y luego inicializar la aplicación para observar lo ya implementado. 

2. Abrir la implementación de la aplicación y leer el código de la componente `Productos`. Identificar cada una de sus partes. Lo importante es entender el comportamiento y razón de ser de cada una de sus partes.

3. Utilizar el endpoint específico para obtener productos y renderizar la lista de todos los productos como lo indica el ejemplo.

4. Agregar ruteo a la aplicación para que cada producto tenga una página propia con información detallada. La ruta deberá ser del estilo /producto/:id, donde id representa el identicador del producto.

* Al ingresar a la ruta correspondiente, se deberá realizar una nueva solicitud a la API para obtener la información del producto seleccionado:https://fakestoreapi.com/products/:id

* En esta página se mostrará la información completa del producto (imagen, título, descripción, precio, categoría y calificación).

* Los elementos del listado de productos deben incluir un botón o enlace que redirija al detalle correspondiente.