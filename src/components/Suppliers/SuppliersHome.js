import React from 'react'

import '../../style/Suppliers.css'
import SupplierCard from './SupplierCard'

const SuppliersHome = ({suppliers}) => {
    return (
        <div className="suppliers-hub-main-container">
            {suppliers.map(supplier=>{
                return (
                <div className="suppliers-hub-card-container" key={supplier.id}>
                    < SupplierCard supplier={supplier}/>
                </div>
            )})}
        </div>
    )
}
export default SuppliersHome