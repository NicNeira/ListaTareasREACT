import React from 'react'

export const TaskRow = ({task, toggleTask}) => {
  return (
    
    <tr>
    {/* los nodos de texto no pueden aparecer como elementos hijos de tr por lo que deben llevar otra etiqueta llamada td */}
    <td className='d-flex justify-content-between'>
      {task.name}
      {/* input para verificar el estado de done (true,) */}
      <input 
        type="checkbox" 
        checked={task.done}
        // al hacer click en el checkbox --> funcion que creamos en App.js
        onChange={() => toggleTask(task)}
      />
    </td>
    
    
  </tr>
  )
}
