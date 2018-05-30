import React from 'react'

const  KanbanCard =(props)=>{
  const divstyles ={
    display:'in-line'
  }

  const buttonStyle={
    display: props.btnNext ? 'in-line' : 'none' 
  }

  const {
    bg, title 
  } = props
  return (    
    <div className={"card text-white mb-3 "+bg} style={divstyles} ref={props.setInputRef} >
      <div className="card-body">
        <p>{title}</p>
        <input type="button" onClick={props.handleClick} value="Eliminar"/>
        <input type="button" onClick={props.handleStatusChange} style={buttonStyle} value="->"/>
      </div>
    </div>
)
}
export default KanbanCard;