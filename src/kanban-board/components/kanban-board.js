import React from 'react'
import './kanban-board.css'

const Kanban_board = (props)=>{
  return (
    <div className="row d-flex justify-content-around" onClick={props.handleClick}>
      {props.children}
    </div>
  )
}
export default Kanban_board;