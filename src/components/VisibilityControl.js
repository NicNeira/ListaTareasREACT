import React from "react"

// Al momento de traer el parametro del componente, importante las llaves
export const VisibilityControl = ({setShowCompleted, cleanTasks, isChecked}) => {

    // Creamos funcion para botonDelete
    const handleDelete = () =>{
        if (window.confirm('Estas seguro de Eliminar?')) {
        cleanTasks()
        }
    }
  return (
    //Boton para hacer aparecer o desaparecer la tabla de tareas completadas
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
        <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label>Mostrar tareas hechas</label>

        <button onClick={handleDelete} className="btn btn-danger btn-sm">
            Clear
        </button>
    </div>
  )
}
