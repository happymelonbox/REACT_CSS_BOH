import React from 'react'
import { baseURL } from '../..'
import { stockEndPoint } from '../..'
import { today } from '../Stock/StocktakeForm'

import AddItemForm from './AddItemForm'

class AddStockItem extends React.Component{
    constructor(){
        super()
        this.state={
            pendingStock: {}
        }
    }
    handleAddStock = (event) =>{
        const value = event.target.value
        const name = event.target.name.toString()
        const increment = this.props.stocktake[0].products.length + 1
        if(value !== "Select a location"){
            this.setState({
                pendingStock:{
                    id: increment,
                    ...this.state.pendingStock,
                    [name]: value,
                    "type": "Supplier"
                }
            },()=>{console.log(this.state.pendingStock)})
        }
    }

    handleSubmitStock = () => {
        const master = this.props.stocktake[0].products
        master.push(this.state.pendingStock)
        fetch(`${baseURL}${stockEndPoint}/master`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": "master",
                "date": today,
                "products": master})
        })
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
        })
    }
    render(){
        return(
            <div>
                < AddItemForm handleAddStock={this.handleAddStock} handleSubmitStock={this.handleSubmitStock}/>
            </div>
        )
    }
}
export default AddStockItem