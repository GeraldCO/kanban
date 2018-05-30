import React, {Component} from "react"
import Column from '../components/kanban-column'
import Card from '../containers/kanbanCard'


export default class KanbanColumnt extends Component{

  constructor(props){
    super(props);
    this.state={
      tasksList: props.tasksList,
      title:props.title,
      bg: props.bg,
    }
  }

  addTask= (event)=>{
    let ultimaTarea= this.state.tasksList[this.state.tasksList.length-1];
    let tareas = this.state.tasksList;
    let newTask={
      id: ultimaTarea.id.toString()+1,
      priority: "PRIORITY_HIGHEST",
      title: "esta es la nueva tarea",
      epicLink: "React buidings",
      status: "TYPE_DONE"
    };
    tareas.push(newTask);
    this.setState(prevState => ({
      tasksList: tareas
    }));
    
  }

  render(props){

  }
}