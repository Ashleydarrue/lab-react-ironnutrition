import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import AddFood from './components/addFoodComponents/AddFood'
import FoodBox from './components/foodComponent/FoodBox'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOfFoods: foods
    }
  }
  showAllFoods = () => {
    return(
      this.state.listOfFoods.map((eachFood, i) =>{
        return(
          <FoodBox 
          key = {i}
          theName = {eachFood.name}
          theCalories = {eachFood.calories}
          theImage = {eachFood.image}
          />
        )
      })
    )
  }


  addNewFood = (ev,  newName, newCalorie, newImage) =>{
    ev.preventDefault();
    let newFood = {};
    newFood.name = newName;
    newFood.calorie = newCalorie;
    newFood.img = newImage;

     let allMyFoods = [...this.state.listOfFoods];
    allMyFoods.unshift(newFood);


     this.setState({listOfFoods: allMyFoods})
  }
  render() {
    return (
      <div className="App">
        <input class="input search" placeholder="Enter a Search term"/>
        <h1>IronNutrition</h1>
          <AddFood addTheNewFood ={this.addNewFood}/>
        <div class="listAllFoods">
       {this.showAllFoods()}
        </div>
      </div>
    );
  }
}

export default App;
