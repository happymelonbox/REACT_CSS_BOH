import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../style/Stock.css'
import { baseURL } from '..';
import { stockEndPoint } from '..';

import StockItems from '../components/Stock/StockItems'
import AddStockItem from '../components/Stock/AddStockItem'
import StockTake from '../components/Stock/StockTake'
import StockNav from '../components/Stock/StockNav'

class StockContainer extends React.Component{
    constructor(){
        super()
        this.state={
            stocktake:[],
            masterStocktake: {}
        }
    }
    componentDidMount(){
        this.fetchStock()
    }
    fetchStock = () => {
        fetch(baseURL+stockEndPoint)
        .then(resp=>resp.json())
        .then(data=>{
            const masterStocktake = data.find(stocktake=>{return stocktake.id === "master"})
            this.setState({
                stocktake: data,
                masterStocktake: masterStocktake
            })
        })
    }
    updateStocktake =(event)=>{
        this.fetchStock()
    }

    render(){
        return (
            <div className="stock-main-container">
                <Router>
                    <div>
                        <StockNav />
                        <Route exact path="/stockItems">
                            <StockItems stocktake={this.state.stocktake} stockToDisplay={this.state.masterStocktake}/>
                        </Route>
                        <Route exact path="/addStockItem">
                            <AddStockItem stocktake={this.state.stocktake} updateStocktakes={this.updateStocktake}/>
                        </Route>
                        <Route exact path="/stockTake">
                            <StockTake stocktake={this.state.stocktake} masterStocktake={this.state.masterStocktake} updateStocktake={this.updateStocktake}/>
                        </Route>
                    </div>
                </Router>

            </div>
        )
    }
}

export default StockContainer