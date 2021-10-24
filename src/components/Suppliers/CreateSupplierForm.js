import React from 'react'

import '../../style/Suppliers.css'

const CreateSupplierForm = ({handleFillState, fillPendingMessage, submitMessage}) => {
    const fillState = (event)=>{
        handleFillState(event)
    }
    const handleMessage = (event) => {
        fillPendingMessage(event)
    }
    const handleSubmitMessage = (event) => {
        event.preventDefault()
        submitMessage()
    }
    return (
        <div className="create-supplier-form-container">
            <div>
                <form className="create-supplier-form">
                    <input className="supplier-create-form-inputs" type="text" placeholder="Supplier name" name="name" onChange={fillState} />
                    <input className="supplier-create-form-inputs" type="text" placeholder="Buisness Logo URL" name="company_logo_url" onChange={fillState} />
                    <input className="supplier-create-form-inputs" type="text" placeholder="Contact Number" name="contact_number" onChange={fillState} />
                    <input className="supplier-create-form-inputs" type="number" placeholder="Factory/Lot Number" id="address_lot_number" name="lot_factory_number" onChange={fillState} />
                    <input className="supplier-create-form-inputs" type="number" placeholder="Street number" id="address_street_number" name="street_number"  onChange={fillState} />
                    <input className="supplier-create-form-inputs" type="text" placeholder="Street name" id="address_street_name" name="street_name" onChange={fillState} />
                    <input className="supplier-create-form-inputs" type="text" placeholder="Suburb" id="address_suburb" name="suburb" onChange={fillState} />
                    <input className="supplier-create-form-inputs" type="number" placeholder="Postcode" id="address_suburb" name="postcode" onChange={fillState} />
                    <select className="supplier-create-form-inputs" type="text" id="address_state" name="state" onChange={fillState}>
                        <option className="supplier-create-form-inputs">NSW</option>
                        <option className="supplier-create-form-inputs">NT</option>
                        <option className="supplier-create-form-inputs">QLD</option>
                        <option className="supplier-create-form-inputs">SA</option>
                        <option className="supplier-create-form-inputs">TAS</option>
                        <option className="supplier-create-form-inputs">VIC</option>
                        <option className="supplier-create-form-inputs">WA</option>
                    </select>
                    <input className="supplier-create-form-inputs" type="text" placeholder="Company Representative" id="rep_name" name="rep_name" onChange={fillState} />
                    <input className="supplier-create-form-inputs" type="text" placeholder="Contact Number" id="rep_number" name="contact_number" onChange={fillState} />
                    <label className="supplier-create-form-inputs" id="delivery" >Delivery Days: </label>
                    <label className="supplier-create-form-inputs" htmlFor="Monday">Monday<input className="create-form-inputs-checkbox" type="checkbox" placeholder="Monday" id="day_Mon" name="Monday" onChange={fillState} /></label>
                    <label className="supplier-create-form-inputs" htmlFor="Tuesday">Tuesday<input className="create-form-inputs-checkbox" type="checkbox" placeholder="Tuesday" id="day_Tue" name="Tuesday" onChange={fillState} /></label>
                    <label className="supplier-create-form-inputs" htmlFor="Wednesday">Wednesday<input className="create-form-inputs-checkbox" type="checkbox" placeholder="Wednesday" id="day_Wed" name="Wednesday" onChange={fillState} /></label>
                    <label className="supplier-create-form-inputs" htmlFor="Thursday">Thursday<input className="create-form-inputs-checkbox" type="checkbox" placeholder="Thursday" id="day_Thur" name="Thursday" onChange={fillState} /></label>
                    <label className="supplier-create-form-inputs" htmlFor="Friday">Friday<input className="create-form-inputs-checkbox" type="checkbox" placeholder="Friday" id="day_Fri" name="Friday" onChange={fillState} /></label>
                    <label className="supplier-create-form-inputs" htmlFor="Saturday">Saturday<input className="create-form-inputs-checkbox" type="checkbox" placeholder="Saturday" id="day_Sat" name="Saturday" onChange={fillState} /></label>
                    <label className="supplier-create-form-inputs" htmlFor="Sunday">Sunday<input className="create-form-inputs-checkbox" type="checkbox" placeholder="Sunday" id="day_Sun" name="Sunday" onChange={fillState} /></label>
                    <textarea className="supplier-create-form-inputs" placeholder="Messages" name="messages" id="message_" onChange={handleMessage}/>
                    <button className="supplier-create-form-submits" onClick={handleSubmitMessage}>Add message</button>
                    </form>
            </div>
        </div>
    )
}
export default CreateSupplierForm