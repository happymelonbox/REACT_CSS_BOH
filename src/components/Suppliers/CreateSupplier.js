import React from 'react'
import '../../style/Suppliers.css'

import { baseURL } from '../../index'
import { suppliersEndPoint } from '../../index'

import CreateSupplierForm from './CreateSupplierForm'
import SupplierCard from './SupplierCard'

class CreateSupplier extends React.Component{

    submitToDatabase = (event) =>{
        event.preventDefault()
        console.log(event.target)
        event.target.disabled=true
        event.target.innerHTML = "Submitted"
        this.postsupplier()
        this.props.updateSuppliers()
        this.props.startNewSupplier()
    }

    postsupplier = () => {
        const incrementId = this.props.supplier.length + 1
        fetch(baseURL + suppliersEndPoint, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                "id": incrementId,
                "name": this.props.supplier.name,
                "company_logo_url": this.props.supplier.company_logo_url,
                "address": {
                    "lot_factory_number": this.props.supplier.address.lot_factory_number,
                    "street_number": this.props.supplier.address.street_number,
                    "street_name": this.props.supplier.address.street_name,
                    "suburb": this.props.supplier.address.suburb,
                    "postcode": this.props.supplier.address.postcode,
                    "state": this.props.supplier.address.state
                },
                "contact_number": this.props.supplier.contact_number,
                "representative": {
                    "rep_name": this.props.supplier.representative.rep_name,
                    "contact_number": this.props.supplier.contact_number,
                },
                "delivery_days": [this.props.supplier.delivery_days],
                "messages": this.props.supplier.messages
            })
        })
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)})
    }

    render(){
    return(
        <div className="create-container">
            < CreateSupplierForm handleFillState={this.props.fillState} fillPendingMessage={this.props.fillPendingMessage} submitMessage={this.props.submitMessage}/>
            <div className="create-display-created-supplier-container">
                <SupplierCard supplier={this.props.supplier} />
                <button className="create-supplier-submits-recipe-card" onClick={this.submitToDatabase}>Submit supplier?</button>
                <button className="create-supplier-submits-recipe-card" onClick={this.props.startNewSupplier}>Start again?</button>
            </div>

        </div>
    )
}
}

export default CreateSupplier