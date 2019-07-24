import React, { Component } from 'react'
import 'bulma/css/bulma.css';
export default class AddFood extends Component {
  constructor(props){
    super(props)
    this.state = {
      newName: '',
      newCalorie: '',
      newImg: '',
      formShowing: true,
    }
  }
    updateInput = (e) => {
      // console.log('--------')
      // console.log(e.target.name);
      // console.log(e.target.value);
      this.setState({[e.target.name]: e.target.value})
    }
  
     
  
     addFoodMiddleWare = (e)=>{
        e.preventDefault();
        this.props.addTheNewFood(e,
            this.state.newName,
             this.state.newCalorie,
              this.state.newImage)
  
           this.setState({
          newName: '',
          newCalorie: '',
          newImage: ''
           })
  
     }


     toggleForm = () => {
       this.setState({formShowing: !this.state.formShowing})
     }
 
  render() {
    return (
      <div>
       <button className={`button btn ${this.state.formShowing? 'is-danger':'is-success'}`}
        onClick= {this.toggleForm}>
          {!this.state.formShowing && 'Add New Food'}
          {this.state.formShowing && 'Hide Form'}
        </button>
  
      
        <form className="add-form" 
      onSubmit={this.addFoodMiddleWare}>

        <div>
          <label>Food: </label>
          <input 
          value={this.state.newName}
          onChange = {this.updateInput}
          name = "newName"
          type = "text"
          />
        </div>

        <div>
          <label>Calories: </label>
          <input 
          value={this.state.newCalories}
          onChange = {this.updateInput}
          name = "newCalories"
          type = "text"
          />
        </div>

        <div>
          <label>Image Url: </label>
          <input 
          value={this.state.newImage}
          onChange = {this.updateInput}
          name = "newImage"
          type="text" />
        </div>
      </form>
     </div>

    )
  }
}
