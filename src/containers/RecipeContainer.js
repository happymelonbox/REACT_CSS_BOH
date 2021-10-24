import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { recipeEndPoint } from '../index';
import { baseURL } from '../index';

import Recipes from '../components/Recipes/Recipes'
import CreateRecipe from '../components/Recipes/CreateRecipe'
import RecipeHomeNavBar from '../components/Recipes/RecipeHomeNavBar';

class RecipeContainer extends React.Component{
    constructor(){
        super()
        this.state={
            recipes: [],
            recipesToDisplay: [],
            ingredients: [],
            method: []
        }
    }
    fetchRecipes = () => {
        fetch(baseURL + recipeEndPoint)
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
            this.setState({
          recipes: data,
          recipesToDisplay: data
        })})
    }
    componentDidMount(){
        this.fetchRecipes()
      }

    handleSearchInput=(value)=>{
            this.searchRecipe(value)
        }

    searchRecipe = (value) => {
        const searchedName = this.state.recipes.filter(recipe=>{
                return (recipe.recipe_name.toLowerCase().includes(
                    value.toLowerCase())
                )
            })
            return value === '' ?
                this.setState({
                    recipesToDisplay: this.state.recipes
                }) :
                this.setState({
                    recipesToDisplay: searchedName
                })
        //When I have time i will come back to this and make the search bar a keyword search to return
        //all recipes that contain the keyword, currently cant figure it out - maybe something like .filter(recipe=>{recipe.ingredients[ingredient_name]})?
        // const searchedIngredient = this.state.recipes.filter(recipe=>{
        //     const ingredients = recipe.ingredients
        //     const ingredientsValues = ingredients.filter(ingredient=>{
        //         const eachIngredient = Object.values(ingredient_name)
        //         return ingredient.contains(this.state.inputValue)}
        //         )
        //     return ingredientsValues
        //     });
        //     console.log(searchedIngredient)
    }
    updateRecipes = () => {
        this.fetchRecipes()
    }

    render(){
        return(
            <div className="recipes-home">
                <Router>
                    <div>
                        < RecipeHomeNavBar />
                        <Route exact path="/recipes">
                            <Recipes recipes={this.state.recipesToDisplay} handleSearch={this.handleSearchInput} inputValue={this.state.searchInput}/>
                        </Route>
                        <Route exact path="/createRecipe">
                            <CreateRecipe addIngredient={this.addIngredient} addStep={this.addStep} fetchRecipes={this.fetchRecipes} updateRecipes={this.updateRecipes}/>
                        </Route>
                    </div>
                </Router>
            </div>
        )
    }
}

export default RecipeContainer
