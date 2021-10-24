import React from 'react'

import {baseURL} from '../..'
import {stockEndPoint} from '../..'

import StocktakeForm from './StocktakeForm'

class StockTake extends React.Component{
    constructor(){
        super()
        this.state={
            stocktakeTotal: 0,
            pendingProducts:[]
        }
    }
    handleQuantityInput = (event) => {
        const children =event.target.parentNode.children
        const id = Number(children[0].innerHTML)
        const item = this.props.masterStocktake.products.find(product=>{return product.id === Number(id)})
        const pendingItem = this.state.pendingProducts.find(product=>{return product.id === item.id})
        const pendingQuantity = this.state.pendingProducts.find(product=>{return product.quantity === item.id})
        if(!pendingItem && !pendingQuantity){
        this.setState({
            pendingProducts:[
                ...this.props.masterStocktake.products,
                {
                "id": item.id,
                "name": item.name,
                "brand": item.brand,
                "supplier": item.supplier,
                "quantity": Number(event.target.value),
                "unit": item.unit,
                "price_per_unit": item.price_per_unit,
                "location": item.location,
                "type": item.type
            }]
        })
        }
    }
    handleSubmitStocktake = (event) => {
        event.target.innerHTML = "Submitted!"
        event.target.disabled = true
        this.submitStocktake()
        this.props.updateStocktake()
    }

    submitStocktake = () => {
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth()+1
        const year = date.getFullYear()
        const todaysDate = `${day}/${month}/${year}`
        const length = this.props.stocktake.length + 1
        const body = {
                  "id": length,
                  "date": todaysDate,
                  "products": this.state.pendingProducts
            }
        fetch(baseURL + stockEndPoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(resp=>resp.json())
        .then(data=>console.log(data))
    }
    render(){
        return(
            <div>
                <StocktakeForm stocktake={this.props.masterStocktake} handleInput={this.handleQuantityInput} submitStocktake={this.handleSubmitStocktake}/>
            </div>
        )
}
}
export default StockTake