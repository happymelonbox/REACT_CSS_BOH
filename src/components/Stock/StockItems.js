import React from 'react'

import StockCard from './StockCard'

class StockItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            foundStocktake: this.props.stockToDisplay,
            stocktakeTotal: 0
        }
    }
    handleClick = (event)=>{
        const date = event.target.innerHTML.toString()
        this.handleStocktake(date)
    }
    handleStocktake = (value) =>{
        const foundStocktake = this.props.stocktake.find(stocktake=> {return stocktake.date === value})
        const totalPricePerItem = []
        const totalPrices = () => {foundStocktake.products.map(product=>{
            return(
                totalPricePerItem.push((product.quantity * product.price_per_unit))
            )
        })}
        totalPrices()
        const totalPriceToDisplay = totalPricePerItem.reduce((acc,cv)=>acc+cv,0)
        const stocktakeTotal = Math.round(totalPriceToDisplay*100)/100
        this.setState({
            foundStocktake: foundStocktake,
            stocktakeTotal: stocktakeTotal
        })
    }
    componentDidMount(){
        this.handleStocktake(this.state.foundStocktake.date)
    }
    render(){
        return(
            <div className="stock-items-container-div">
                <div className="stock-items-stocktakes-div">
                    <h4 className="stock-items-stocktakes-h4">Stocktakes:</h4>
                    {this.props.stocktake.slice(1,this.props.stocktake.length).map((item)=>{
                        return(
                            <div key={item.id}>
                                <h5 className="stock-items-stocktakes-display-date" onClick={this.handleClick}>{item.date}</h5>
                            </div>
                    )})}
                </div>
                <div className="stock-items-stockcard-div">
                    <StockCard stocktakeTotal = {this.state.stocktakeTotal} stocktake={this.state.foundStocktake}/>
                </div>
            </div>
        )
    }
}
export default StockItem