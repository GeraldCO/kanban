import React from 'react'
import Card from '../containers/kanbanCard'
import './kanban-column.css'

const kanban_layout = (props)=>{
  const tam={
    maxWidth:"18rem",
    padding:0
  }
  
  const pillBadgeStyle={
    paddingTop:"6px"
  }
    
  return(  
      <div className="card border-primary col-md-3 mb-3" id={props.id} style={tam}>
        <div className="card-header justify-content-between d-flex">
          <span> {props.id} </span>
          <span className="badge badge-pill badge-secondary" style={pillBadgeStyle}>{props.tareas.length}</span>
        </div>
        <div className="card-body text-primary columna" id={props.id+"-body"}>
            {props.tareas.map((itemTask, index) => {
              return(
                  <Card
                    bg={props.bg}
                    click={props.handleClickCard}
                    handleStatusChange={props.handleStatusChange}
                    modificar={props.modificar}
                    btnNext={props.btnNext}

                    title={itemTask.title}
                    prioridad={itemTask.prioridad}
                    display={itemTask.display}
                    key={itemTask.id}
                    id={itemTask.id}
                    item={itemTask}                    
                    index={index}                    
                    status={itemTask.status}                    
                    itemTask={itemTask}         
                  />
              )
            })}
        </div>
      </div>   
  )
}
export default kanban_layout;