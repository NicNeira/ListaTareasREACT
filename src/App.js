// para guardar un dato en una variable en react, necesitamos un estado. un estado en react basicamente es una variable en js puro | useState es una funcion
// UseEffect se ejecuta cada vez que le decimos que si un dato cambia
import React, { useState, useEffect } from "react";
// import del css
import "./App.css";
import { Container } from "./components/Container";
// import del componenente TaskCreator
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";


function App() {
  
  // Lista de tareas | Inicialmente nuestra aplicacion no deberia tener datos, por eso en la parte 3 los comentamos
  const [tasksItems, setTasksItems] = useState([
    // {name: 'Mi primer tarea', done: false},
    // {name: 'Mi segunda tarea', done: false},
    // {name: 'Mi tercer tarea', done: false},
  ]);

  const [showCompleted, setShowCompleted] = useState(false);

  // funcion que queremos ejecutar dentro del componente TaskCreator.js
  // este createNewTask va a recibir una tarea taskName como parametro
  function createNewTask(taskName) {
    // dentro de la funcion setTaskItems indicamos que queremos copiar el arreglo tasksItems y le añadiremos un nuevo dato
    // console.log(taskName);
    // utilizamos if con la condicional ! para indicar que si al momento de recorrer el arreglo con .find y no nos retorna nada osea undefined podamos añadirlo los datos con la siguiente funcion
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
    // Con esto indicamos que si ya esta la tarea, comprueba si esta. si esta no crea ni guarda nada.
  }

  // Crearemos funcion para actualizar el estado de una tarea (donde:true,false)

  const toggleTask = (task) => {
    setTasksItems(
      // t en estos momentos es el nombre de las tareas y lo comparamos con task (que es lo que estamos pasando) ? = es parecido a un if. Funciona validando lo del lado izquierdo y ejecutando lo del lado derecho, si no se cumple la validacion ejecuta otra opcion (la que sigue)
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
      // ...t copia el arreglo principal y crea uno nuevo con el elemento que incluimos | done: !t.done cambia el estado de done del elemento
    );
  };

  // ** Parte 5? eliminar con boton tareas ya hechas
  const cleanTasks = () => {
    // Por cada una de las tareas, buscaremos la que su propiedad done este en true, con !task.done retornaremos las que no estan hechas | y para finalizar las establecemos en el estado con setTasksItems
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  // Este useEffect se aplicará inmediatamene al abrir la aplicacion, esto es por que dejamos su arreglo vacio
  useEffect(() => {
    // Leemos el localStorage get item con la variable tasks
    let data = localStorage.getItem("tasks");

    // Si existen datos vamos a convertirlos
    if (data) {
      // *** Importante para almacenar los datos *** Convertimos en formato javascript y estableciendo setTasksItems para almacenar en array tasksItems (del useEstate)
      setTasksItems(JSON.parse(data));
    }
  }, []); //Si no colocamos nada en el arreglo, esto se ejecutara apenas abra la aplicación

  // Cuando haya un cambio en tasksItems este se ejecutará
  useEffect(() => {
    // Guardaremos en localStorage | JSON.stringify para "Guardar en formato objeto"
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]); //Que dato o variable ira cambiando en este caso el arreglo taskItems

  // Para recibir datos y funciones en los componentes necesitamos hacer uso de los Promps

  return (
    <div className="bg-dark vh-100 text-white">
      <Container>
        {/* Este componente va a recibir una propiedad de nombre createNewTask sera igual al valor de la funcion createNewTask | para que el componente reciba esta funcion hay que llamarla con nombre props como parametro desde el componente selecionado*/}
        <TaskCreator createNewTask={createNewTask} />

        {/* Hay que pasarle el arrlego con las tareas (que usamos con useEstate) en una propiedad con nombre tasks (esto para enviarla al componente ) y recibirla en el componente (TaskTable.js) | showCompleted = muestra las tareas segun el filtro true/false */}
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

        {/* llamamos componenete visibilityControl */}
        <VisibilityControl
        // isChecked para ver si esta marcado o no el checked setShowCompleted
        isChecked={showCompleted}
        // Establecemos funcion que recibirá de parametro checked y establecerlo como valor del setShowCompleted | La importamos al componente VisibilityControl
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTasks={cleanTasks}

        />

        {
          // Si showCompleted es === a true entonces muestro la tabla | en showCompleted el parametro es showCompleted de esta forma se ven las tareas que ya estan realizadas
          showCompleted === true && (
            <TaskTable
              tasks={tasksItems}
              toggleTask={toggleTask}
              showCompleted={showCompleted}
            />
          )
        }
      </Container>
        
      </div>
      
    
  );
}

export default App;
