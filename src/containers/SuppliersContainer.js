import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { baseURL } from '../index'
import { suppliersEndPoint } from '../index'

import '../style/Suppliers.css'
import SearchSuppliers from '../components/Suppliers/SearchSuppliers'
import SuppliersHome from '../components/Suppliers/SuppliersHome'
import SupplierNavBar from '../components/Suppliers/SupplierNavBar'
import CreateSupplier from '../components/Suppliers/CreateSupplier'


class SuppliersContainer extends React.Component{
    constructor(){
        super()
        this.state={
            suppliers : [],
            searchedSuppliers: [],
            searchInput: "",
            pendingMessage: "",
            newSupplier:
                {
                id: 1,
                name: "",
                company_logo_url: "",
                address: {
                    lot_factory_number: "",
                    street_number: "",
                    street_name: "",
                    suburb: "",
                    postcode: "",
                    state: ""
                },
                contact_number: "",
                representative: {
                    rep_name: "",
                    contact_number: ""
                },
                delivery_days: [
                ],
                messages: [
                ]
            }
        }
    }
    fetchSuppliers =()=> {
        fetch(baseURL + suppliersEndPoint)
        .then(resp=>resp.json())
        .then(data=> {
            this.setState({
            suppliers: data
        })
    })
    }
    componentDidMount(){
        this.fetchSuppliers()
    }

    handleSearchInput=(event)=>{
        const value = event.target.value
        this.searchSuppliers(value)
    }
    searchSuppliers = (value) => {
        const found = this.state.suppliers.filter(supplier => {return (
            supplier.name.toLowerCase().includes(value.toString().toLowerCase()))})
        if(value === ""){
            return this.setState({
                searchedSuppliers: []
            })} else {
            return this.setState({
                searchedSuppliers: found
            })
        }
    }
    handleFillState = (event) => {
        const value = event.target.value.toString()
        const name = event.target.name
        const targetId = event.target.id.toString()
        this.fillState(value, name, targetId)
    }
    fillState = (value, name, targetId) => {
        if(targetId.includes("address_")){
            return this.setState({
                newSupplier:
                    {
                    ...this.state.newSupplier,
                        address:{
                            ...this.state.newSupplier.address,
                            [name]: value
                        }
                    }
            })
        } else if (targetId.includes("rep_")){
            return this.setState({
                newSupplier:
                    {
                    ...this.state.newSupplier,
                    representative: {
                        ...this.state.newSupplier.representative,
                        [name]: value
                        }
                }
            })
        } else if (targetId.includes("message_")){
           return this.setState({
                newSupplier:
                    {
                    ...this.state.newSupplier,
                    messages: [
                        ...this.state.newSupplier.messages,
                        value
                    ]
                    }
                })
        } else if(targetId.includes("day_")){
           return this.setState({
                newSupplier: {
                    ...this.state.newSupplier,
                    delivery_days: [
                        ...this.state.newSupplier.delivery_days,
                        name
                    ]
                    }
            })
        }else {
            return this.setState({
                newSupplier: {
                    ...this.state.newSupplier,
                    [name]: value
                }
            })
        }
    }
    startNewSupplier = () => {
        this.setState({
            newSupplier: {
                id: 1,
                name: "",
                company_logo_url: "",
                address: {
                    lot_factory_number: "",
                    street_number: "",
                    street_name: "",
                    suburb: "",
                    postcode: "",
                    state: ""
                },
                contact_number: "",
                representative: {
                    rep_name: "",
                    contact_number: ""
                },
                delivery_days: [
                ],
                messages: [
                ]
            }
        })
    }

    fillPendingMessage = (event) => {
        const value = event.target.value
        return this.setState({
            pendingMessage: value.toString()
        })}

    submitMessage = () => {
        this.setState({
            newSupplier: {
                ...this.state.newSupplier,
                messages: [
                    ...this.state.newSupplier.messages,
                    this.state.pendingMessage
                ]
            }
        })
    }
    

    render(){
        return (
            <div>
                <Router>
                    <div>
                        < SupplierNavBar />
                        <Route exact path="/supplierHome">
                            < SuppliersHome suppliers={this.state.suppliers}/>
                        </Route>
                        <Route exact path="/searchSuppliers">
                            < SearchSuppliers suppliersToDisplay={this.state.searchedSuppliers} handleSearchInput={this.handleSearchInput}/>
                        </Route>
                        <Route exact path="/addSupplier">
                            <CreateSupplier fillState={this.handleFillState} supplier={this.state.newSupplier} startNewSupplier={this.startNewSupplier} fillPendingMessage={this.fillPendingMessage} submitMessage={this.submitMessage} updateSuppliers={this.fetchSuppliers}/>
                        </Route>
                    </div>
                </Router>
            </div>
        )
    }

}

export default SuppliersContainer