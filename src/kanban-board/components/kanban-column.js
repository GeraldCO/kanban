import React, {Component} from 'react'
import Card from '../containers/kanbanCard'
import Modal from '../../modal/components/modal'
import ModalContainer from '../../modal/containers/modal'
import {createPortal } from 'react-dom';
import './kanban-column.css'


class kanban_layout extends Component{
  
  constructor(props){
    super(props);
    this.cambiandoTODO=this.cambiandoTODO.bind(this);
    this.state={
      tareas:props.tareas,
      click:false,
    }
  }

  handleClickCard=(id)=>{
   let tareas = this.state.tareas;
   tareas.splice(id,1);
   this.setState({
     tareas: tareas,
   })
  }

  cambiandoTODO(){
    this.props.cambiandoTODO(this.state.tareas)
  }

  addTask=(title)=>{
    //let ultimaTarea= this.state.tareas[this.state.tareas.length-1];
    let tareas = this.state.tareas;
    let newTask={
      id: 64514,
      priority: "PRIORITY_HIGHEST",
      title: title,
      epicLink: "React buidings",
      status: this.props.title
    };
    tareas.push(newTask);
    this.setState({
      tareas: tareas
    })
  }

  componentDidUpdate(){
  }

  
  componentDidMount(){
  }

  render(){
  const tam={
  maxWidth:"18rem",
  padding:0
  }
  const pillBadgeStyle={
    paddingTop:"6px"
  }
  return(
      <div className="card border-primary col-md-3 mb-3" id={this.props.id} style={tam}>
        <div className="card-header justify-content-between d-flex">
          <span> {this.props.id} </span>
          <span className="badge badge-pill badge-secondary" style={pillBadgeStyle}>{this.props.tareas.length}</span>
        </div>
        <div className="card-body text-primary columna" id={this.props.id+"-body"}>
    
          {this.state.tareas.map((itemTask, index) => {
          return (
            <Card
                bg={this.props.bg}
                title={itemTask.title}
                prioridad={itemTask.prioridad}
                display={itemTask.display}
                key={itemTask.id}
                id={itemTask.id}
                imprimir={this.alertKey}
                item={itemTask}
                click={this.handleClickCard}
                index={index}
                modificar={this.props.modificar}
                status={itemTask.status}
                handleStatusChange={this.props.handleStatusChange}
                itemTask={itemTask}
                btnNext={this.props.btnNext}
            />
          ) 
        })}
        
        
        
        </div>
      </div>
    
    
  )
  }
}
export default kanban_layout;