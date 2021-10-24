import React from 'react'
import { Link } from 'react-router-dom';


const StockNav = () => {
    return (
        <div className="stock-navbar">
            <Link className="stock-navbar-link" to="/stockItems">Items in Stock</Link>
            <Link className="stock-navbar-link" to="/addStockItem">Add Stock Item</Link>
            <Link className="stock-navbar-link" to="/stockTake">Stocktake</Link>
        </div>
    )
}

export default StockNav