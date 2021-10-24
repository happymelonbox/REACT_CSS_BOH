import React from 'react'

import SupplierCard from './SupplierCard'

class SearchSuppliers extends React.Component{

    render(){
        return(
            <div>
                <div >
                    <input className="search-suppliers-input" type="text" placeholder="Search for supplier by business name" onChange={this.props.handleSearchInput}></input>
                </div>
                <div className = "search-suppliers-display-supplierCard">
                    {this.props.suppliersToDisplay.map(supplier=>{
                        return(
                            < SupplierCard key={supplier.id} supplier={supplier} />
                        )
                    })}
                </div>
            </div>
        )
    }

}
export default SearchSuppliers