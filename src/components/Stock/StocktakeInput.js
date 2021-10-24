import React from 'react'

const StocktakeInput = ({location, handleInput}) => {
    return(
        <div className="stock-stocktake-stocktakeinput-container-div">
            <form className="stock-stocktake-stocktakeinput-form">
            {location.map(product=>{return(
                <div className="stock-stocktake-stocktakeinput-product" key={product.id}>
                    <h6 className="stock-stocktake-stocktakeinput-product-heading">{product.id ? product.id : "Not provided"}</h6>
                    <h6 className="stock-stocktake-stocktakeinput-product-heading">{product.name ? product.name : "Not provided"}</h6>
                    <h6 className="stock-stocktake-stocktakeinput-product-heading">{product.brand ? product.brand : "Not provided"}</h6>
                    <h6 className="stock-stocktake-stocktakeinput-product-heading">{product.supplier ? product.supplier : "Not provided"}</h6>
                    <input required className="stock-stocktake-stocktakeinput-product-input" type="number" name="quantity" onBlur={handleInput}/>
                    <h6 style={{visibility:"hidden"}} className="stock-stocktake-stocktakeinput-product-heading"> </h6>
                    <h6 className="stock-stocktake-stocktakeinput-product-heading">{product.unit ? product.unit : "Not provided"}</h6>
                </div>
            )})}
            </form>
        </div>
    )
}
export default StocktakeInput