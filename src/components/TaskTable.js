import React from 'react'
import {TaskRow} from './TaskRow'

// Traemos el objeto tasks con el que estamos trabajando en App.js
export const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {

  const taskTableRow = (doneValue) => {
    console.log(doneValue);
    return (
      // Cambiamos tasksItems.map por el parametro que estamos trayendo en el componente a tasks
      tasks
      // Filtro las tareas por el valor de done y las comparo si son true o false | De este modo las filtramos y visualizamos en el fronted
      .filter(tasks => tasks.done === doneValue)
      .map(task =>(
        // // cada elemento hijo debe tener una clave unica 
        <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
      ))
  )}
  return (
    
    <table className='table table-dark table-striped table-bordered border-secondary'>
      <thead>
        <tr className='table-primary'>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>
        {/* Utilizamos llaves para utilizar codigo js */}
        {
          taskTableRow(showCompleted)
        }
        </tbody>
    </table>
    
  )
}
