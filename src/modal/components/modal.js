import React, {PureComponent} from 'react';
var $ = require ('jquery');

class Modal extends PureComponent {
  handleForm=(e)=>{
    e.preventDefault();
    this.props.addTask($("#newTask").val());
    $('#myModal').modal('hide');
    return false;
  }

  render(){
    return (
      <div className="Modal">
         <div className="modal fade show" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form onSubmit={this.handleForm}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Escribe una nueva tarea</label>
                  <input type="text"  className="form-control" id="newTask" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
              </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" onClick={this.props.addTask} className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }  
}

export default Modal;