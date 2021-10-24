import React from 'react'
import { Link } from 'react-router-dom';

import '../../style/Suppliers.css'

const SupplierNavBar = () => {
    return(
        <div className="supplier-navbar">
            <Link className="supplier-navbar-link"
            to="/supplierHome"
            >Suppliers Hub
            </Link>
            <Link className="supplier-navbar-link"
            to="/searchSuppliers"
            >Search for Suppliers
            </Link>
            <Link className="supplier-navbar-link"
            to="/addSupplier"
            >Add a supplier
            </Link>
        </div>
    )
}

export default SupplierNavBar