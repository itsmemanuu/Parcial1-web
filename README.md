# Parcial 1 - Programación con Tecnologías Web
Este repositorio contiene el código fuente y los pasos necesarios para ejecutar la solución del parcial de la clase de Programación con Tecnologías Web utilizando React.

## Requisitos Previos
* Node.js
* npm

## Instrucciones de Instalación y Ejecución
### Clonar el repositorio
~~~
git clone https://github.com/itsmemanuu/Parcial1-web.git
cd Parcial1-web
~~~

### Instalar Dependencias
```
npm install
```

### Ejecutar el Código
~~~
npm start
~~~

## Decisiones de Diseño y Desarollo
### En la clase:
* Se comenzó por realizar el componente de login, pero el código implementado para la validación de campos tuvo errores, que consumieron más del tiempo necesario, por lo que se optó continuar.
* Se implementó el enrutamiento
* Se diseñó el schema y mock api de usuarios con ayuda de mockaroo
* Para le bottom bar de usuario se utilizó el componente de boostrap Navbar con posición absoluta bottom en el que la información mostrada se encuentra en el componente Navbar.Text. En esta versión los tiempos están mostrados en minutos
* Después de esto se diseño la sección del listado de cards, que, en la entrega de clase tiene un pequeño error pues tiene el componente onClick en la imagen y no el componente Card, por lo que el click no funciona correctamente.


### Después de la clase:
* Después de la clase se corrigieron errores como la validación de campos y el click en la pagina principal.
* Se implementó y conectó el MockAPI de las actividades
* Se hicieron modificaciones de estilo
* Se implementó internacionalización

## Componentes y Herramientas Utilizados
- **React Hooks (useState, useEffect):** Permitieron manejar el estado local de los componentes y gestionar efectos secundarios como la actualización de datos


- **React Router:** Permite navegación


- **React Bootstrap (Navbar, Button, Card, Col, Row, Modal, etc):** Optimiza la implementación de la interfaz gráfica.


- **Axios:** Facilita las peticiones API


- **React i18next:** Facilita internacionalización

