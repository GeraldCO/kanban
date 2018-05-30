import React, {Component} from 'react'
import Card from '../components/kanbanCard'

class KanbanCard extends Component{
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state={
      display :"block",
      View: true, 
      task: {...props},
    }
  }

  componentDidMount () { 
  }

  componentDidUpdate(){
  }
  componentWillUnmount() {
  }

  handleClick=()=>{
    this.props.click(this.props.index)
  }

  handleStatusChange=()=>{
    console.log(this.props.itemTask)
    this.props.handleStatusChange(this.props.itemTask)
  }

  render(){    
       return(
        <Card        
          bg={this.state.task.bg}
          title={this.state.task.title}
          prioridad={this.state.task.prioridad}
          display={this.state.task.display}
          handleClick={this.handleClick}
          id={this.state.task.id}
          handleClickCard={this.props.handleClickCard}
          handleStatusChange={this.handleStatusChange}
          btnNext={this.props.btnNext}
        />
       );
  }
  
}

export default KanbanCard;