import React from 'react'

import StocktakeInput from './StocktakeInput'

const todaysDate = new Date()
const day = todaysDate.getDate()
const month = todaysDate.getMonth()+1
const year = todaysDate.getFullYear()
export const today = `${day}/${month}/${year}`

const StocktakeForm = ({stocktake, stocktakeTotal, handleInput, submitStocktake}) => {
    const supplierItems = stocktake.products.filter(product=>{return product.type === "Supplier"})
    const supplierCoolroom = supplierItems.filter(product=>{return product.location === "Coolroom"})
    const supplierDryStore = supplierItems.filter(product=>{return product.location === "Dry Store"})
    const supplierFreezer = supplierItems.filter(product=>{return product.location === "Freezer"})
    const recipeItems = stocktake.products.filter(product=>{return product.type === "Recipe"})
    const recipeCoolroom = recipeItems.filter(product=>{return product.location === "Coolroom"})
    const recipeDryStore = recipeItems.filter(product=>{return product.location === "Dry Store"})
    const recipeFreezer = recipeItems.filter(product=>{return product.location === "Freezer"})

    return(
        <div className="stock-stocktake-main-container">
            <h3 className="stock-stocktake-header">Stocktake Date: {today}</h3>
            <h4 className="stock-stocktake-sub-header">Total Stock: ${stocktakeTotal}</h4>
            <div>
                <h4 className="stock-stocktake-type-header">Supplier Items:</h4>
                <div className="stock-stocktake-location-div">
                    <h5 className="stock-stocktake-location-header">Coolroom</h5>
                        <StocktakeInput location={supplierCoolroom} handleInput={handleInput}/>
                    <h5 className="stock-stocktake-location-header">Freezer</h5>
                        <StocktakeInput location={supplierFreezer} handleInput={handleInput}/>
                    <h5 className="stock-stocktake-location-header">Dry Store</h5>
                        <StocktakeInput location={supplierDryStore} handleInput={handleInput}/>
                </div>
                <h4 className="stock-stocktake-type-header">Recipe Items:</h4>
                <div className="stock-stocktake-location-div">
                    <h5 className="stock-stocktake-location-header">Coolroom</h5>
                        <StocktakeInput location={recipeCoolroom} handleInput={handleInput}/>
                    <h5 className="stock-stocktake-location-header">Freezer</h5>
                        <StocktakeInput location={recipeFreezer} handleInput={handleInput}/>
                    <h5 className="stock-stocktake-location-header">Dry Store</h5>
                        <StocktakeInput location={recipeDryStore} handleInput={handleInput}/>
                </div>
            </div>
            <button className="stock-stocktake-submit-button" onClick={submitStocktake}>Submit stocktake</button>
        </div>
    )
}

export default StocktakeForm