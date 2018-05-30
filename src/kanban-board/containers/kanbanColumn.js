import React, {Component} from "react"
import Column from '../components/kanban-column'

export default class KanbanColumnt extends Component{

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


  render(props){
    return(
      <Column 
        tareas={this.props.tareas}
        id={this.props.id}
        bg={this.props.bg}
        handleStatusChange={this.props.handleStatusChange}
        handleClickCard={this.handleClickCard}
        modificar={this.props.modificar}
        btnNext={this.props.btnNext}

      /> 
    )

  }
}