import React, { useState } from "react";

// Recibe los props enviados desde App.js | podemos desectruturar props al ser un objeto en este caso utilizamos llaves {} y dentro la funcion createNewTask
export const TaskCreator = ({ createNewTask }) => {
  // console.log(props);
  const [newTaskName, setNewTaskName] = useState("");

  // Funcion para la parte de formulario

  // *Manejando el evento de envio (*e siempre hace mencion a evento*)
  const handleSubmit = (e) => {
    // preventDefault nos servira para que cancele ese comportamiento por defecto del formulario de enviar los datos a un backeend (*No refrescara la pagina gracias a esta linea)
    e.preventDefault();
    //props.createNewTask ejecutar la funcion creada en App.js | al pasar solamente parametro createNewTask en vez de props podemos llamar directamente a la funcion
    createNewTask(newTaskName);
    // alert('sended') //en vez de alerta guardaremos en el localStorage
    // Lo podemos llamar sin hacer import ya que ya tiene permisos del navegador del que se esta ejecutando la aplicacion | con setItem = establecemos o guardamos algo dentro del localstorage en este caso queremos que se almacene la variable newTaskName En parte 3 quitamos localStorage
    // localStorage.setItem("tasks", newTaskName);
    // Queremos que al guardar el elemento, el input quede vacio --> tambien necesitamos *agrega value en input
    setNewTaskName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-2 row">
        {/* a posterior de apretar save task con la funcion alert, veremos que nos muestra el texto submiting y la pagina se refrescará (a causa de onSubmit) posteriormente borraremos alert y utilizaremos otra funcion (handle) */}
        <div className="col-9">
          <input
            type="text"
            // PlaceHolder para que muestre texto dentro del input
            placeholder="Enter a new task"
            // Para reflejar el estado -->
            value={newTaskName}
            // Evento onChange: es cuando el valor del input empieza a cambiar, se le asigna el evento al parametro y en este caso mostraremos por consola el evento
            // el evento e es un objeto agregando un punto podemos especificar que queremos solamente el valor de target y luego value
            // Necesitamos ir actualizando la variable newTaskName con la funcion setNewTaskName. modificaremos console.log por esta ultima.
            onChange={(e) => setNewTaskName(e.target.value)}
            className='form-control'
          />
        </div>
        {/* onClick: Cuando hagas click quiero que ejecutes una funcion y esta funcion llamara una alerta que diga clicked. posteriormente lo modificamos para que nos muestre el valor de la variable newTaskName */}
        <div className="col-3">
          <button className="btn btn-primary btn-sm">Save Task</button>
        </div>
      </form>
    </div>
  );
};
