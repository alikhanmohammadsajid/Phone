import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const BookingForm = ({ modalIsOpen, closeModal, appointmentOn }) => {

    const [payment, setPayment] = useState()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        data.service = appointmentOn;
        data.created = new Date();

        fetch('https://glacial-atoll-37822.herokuapp.com/addMobile', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal()
                    alert('Registration successful now pay for buy the product.')
                }
            })


    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>


                    <div className="form-group text-end">
                        <button type="submit" className="btn btn-outline-info">Send</button>
                    </div>

                </form>

            </Modal>
        </div>
    );
};

export default BookingForm;