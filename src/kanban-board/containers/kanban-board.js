import React, {Component} from 'react'
import KanbanBoard from '../components/kanban-board'
import Column from '../components/kanban-column'
import data from '../../task.json'
import Modal from '../../modal/components/modal'
import ModalContainer from '../../modal/containers/modal'

class Kanban extends Component{
  constructor(props){
    super(props);
    this.next = this.next.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.state = {
      tasks:data.tasks,
      TypeDone:[],
      TypeInProgress:[],
      TYpeTodo:[],
    }
  }

  addTask=()=>{
    let title=document.getElementById("newTask").value;
    let tareas = this.state.TYpeTodo;
    let newTask={
      id: 64514,
      priority: "PRIORITY_HIGHEST",
      title: title,
      epicLink: "React buidings",
      status: "TYPE_INPROGRESS"
    };
    tareas.push(newTask);
    this.setState(prevState => ({
      tasks: [],
      TypeDone:prevState.TypeDone,
      TypeInProgress:prevState.TypeInProgress,
      TYpeTodo:tareas,
    }));
  }


  handleStatusChange(item){
    let tasksToSplice;
    let tasksToAdd;
    let index=0;
    if(item.status==="TYPE_TODO"){
      tasksToSplice=this.state.TYpeTodo;
      index=tasksToSplice.indexOf(item);
      item.status="TYPE_INPROGRESS";
      tasksToSplice.splice(index,1)
      tasksToAdd = this.state.TypeInProgress;
      tasksToAdd.push(item)
      this.setState( prevState => ({
        tasks:[],
        TypeDone:prevState.TypeDone,
        TypeInProgress:tasksToAdd,
        TYpeTodo:tasksToSplice,
        })
      )
    }
    else if(item.status==="TYPE_INPROGRESS") {
      tasksToSplice=this.state.TypeInProgress;
      index=tasksToSplice.indexOf(item);
      item.status="TYPE_DONE";
      tasksToSplice.splice(index,1);
      tasksToAdd = this.state.TypeDone;
      tasksToAdd.push(item)
      this.setState(prevState => ({
        tasks:[],
        TypeDone:tasksToAdd,
        TypeInProgress:prevState.TypeInProgress,
        TYpeTodo:prevState.TYpeTodo,
        })
      )
    }
    else index=2;

  }

  componentDidUpdate(){
    
  }

  next(index, type){
    let tasks= this.state.tasks;
    let tarea=this.state.tasks[1];
    tarea.status="TYPE_TODO"
    tarea.title="crear un pequeño proyecto con reactJS ¡POR FIN FUNCIONA ESTA MIERDA!";
    tasks[1]=tarea;
    console.log(tasks)
    this.setState(prevState => ({
      tasks:tasks,
      TypeDone:[],
      TypeInProgress:[],
      TYpeTodo:[],
        numero:25
      })
    )
    console.log(tasks)
  }

  handleChildUnmount=()=>{
    this.setState({renderChild: false});
  }

  setInputRef = element => {
    this.input.push = element;
  }  

  render(){
    this.state.tasks.map((x) => {
      if(x.status==='TYPE_TODO')
        return this.state.TYpeTodo.push(x);
      else if(x.status==='TYPE_DONE')
        return this.state.TypeDone.push(x)
      else return this.state.TypeInProgress.push(x)
    })
    return (
    <div>
      <KanbanBoard>
        <Column title="TYPE_TODO" tareas={this.state.TYpeTodo} key={1} id="TODO" handleStatusChange={this.handleStatusChange} bg="bg-primary" btnNext={true} handleModal={this.handleModal} />
        <Column title="TYPE_INPROGRESS" tareas={this.state.TypeInProgress} key={2} handleStatusChange={this.handleStatusChange} id="INPROGRESS" bg="bg-warning" btnNext={true} />
        <Column title="TYPE_DONE" tareas={this.state.TypeDone} key={3} id="DONE" bg="bg-success" btnNext={false}/>
      </KanbanBoard>
      <div><a className="btn btn-primary" data-toggle="modal" href="#myModal">Launch Modal</a></div>
       <Modal addTask={this.addTask}/> 
      </div>
    )
  }
}
export default Kanban;