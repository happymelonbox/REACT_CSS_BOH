import React from 'react'
import '../../style/Suppliers.css'

const SupplierCard =({supplier})=>{
    return(
        <div className="suppliers-hub-inner-main-container">
            <h3 className="suppliers-hub-title">{supplier.name}</h3>
            <img className="suppliers-hub-logo" src={supplier.company_logo_url} alt="Company Logo not available"/>
            <h5 className="suppliers-hub-contact">Factory/Lot Number: {supplier.address.lot_factory_number}</h5>
            <h5 className="suppliers-hub-contact">Street address: {supplier.address.street_number} {supplier.address.street_name}</h5>
            <h5 className="suppliers-hub-contact">Suburb: {supplier.address.suburb}</h5>
            <h5 className="suppliers-hub-contact">Contact Number: {supplier.contact_number}</h5>
            <h5 className="suppliers-hub-contact">Postcode: {supplier.address.postcode}</h5>
            <h5 className="suppliers-hub-contact">State: {supplier.address.state}</h5>
            <h5 className="suppliers-hub-rep">Business Representative: {supplier.representative.rep_name}</h5>
            <h5 className="suppliers-hub-rep">Contact Number: {supplier.representative.contact_number}</h5>
            <h5 className="suppliers-hub-delivery-days">Delivery days: {supplier.delivery_days.map(day=>{return day + ', '})}
            </h5>
            <h5 className="supliers-hub-messages">Messages:</h5>
            {supplier.messages.map(((message, index)=>{
                return(
                        <p className="supliers-hub-" key={index}>{message}</p>
                )
            }))}
        </div>
    )
}
export default SupplierCard