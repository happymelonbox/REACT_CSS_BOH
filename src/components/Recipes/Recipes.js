import React from 'react';

import RecipeCard from './RecipeCard'

class Recipes extends React.Component{
    
    handleSearch=(event)=>{
        const inputValue = event.target.value
        this.props.handleSearch(inputValue)
    }
    render(){
        console.log(this.props.recipes)
        return(
            <div className="recipe-display-recipeCard-container">
                <input className="recipe-input" name="search" type="text" placeholder="Search recipes by name" value={this.props.inputValue} onChange={this.handleSearch}/>
                <div className="recipe-display-recipeCard">
                    {this.props.recipes.map(recipe=>{return(
                        < RecipeCard key={recipe.id} recipe={recipe} />
                    )})}
                </div>
            </div>
        )
    }
}

export default Recipes