import React from 'react'

const StockCard = ({stocktake, stocktakeTotal}) => {
        return(
            <div>
                <h4 className="stock-stockcard-h4">Last updated: {stocktake.date}</h4>
                <h4 className="stock-stockcard-h4">Total Stock: ${stocktakeTotal}</h4>
                <div>
                    <h5 className="stock-stockcard-h5">Supplier Items</h5>
                    {stocktake.products.filter(product=>{return product.type === "Supplier"}).map(product=>{
                        const itemTotal = product.quantity * product.price_per_unit
                        const roundedTotal = Math.round(itemTotal * 100)/100
                        return(
                        <div className="stock-stockcard-supplier-items-container" key={product.id}>
                            <h6 className="stock-stockcard-h6"><strong>Item name: </strong>{product.name}</h6>
                            <h6 className="stock-stockcard-h6"><strong>Item brand:</strong> {product.brand}</h6>
                            <h6 className="stock-stockcard-h6"><strong>Supplied by:</strong> {product.supplier}</h6>
                            <h6 className="stock-stockcard-h6"><strong>How much in stock:</strong> {product.quantity}{product.unit}</h6>
                            <h6 className="stock-stockcard-h6"><strong>Item total:</strong> ${roundedTotal}</h6>
                        </div>
                    )})}
                </div>
                <div>
                    <h5 className="stock-stockcard-h5">Recipe Items</h5>
                    {stocktake.products.filter(product=>{return product.type === "Recipe"}).map(product=>{
                        const itemTotal = product.quantity * product.price_per_unit
                        const roundedTotal = Math.round(itemTotal * 100)/100
                        return(
                        <div className="stock-stockcard-recipe-items-container" key={product.id}>
                            <h6 className="stock-stockcard-h6"><strong>Item name: </strong>{product.name}</h6>
                            <h6 className="stock-stockcard-h6"><strong>Item brand:</strong> {product.brand}</h6>
                            <h6 className="stock-stockcard-h6"><strong>Supplied by:</strong> {product.supplier}</h6>
                            <h6 className="stock-stockcard-h6"><strong>How much in stock:</strong> {product.quantity}{product.unit}</h6>
                            <h6 className="stock-stockcard-h6"><strong>Item total:</strong> ${roundedTotal}</h6>
                        </div>
                    )})}
                </div>
            </div>
        )
    }

export default StockCard
// need to add recipe items