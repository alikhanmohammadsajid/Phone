import React from 'react';
import SidebarForAdmin from '../Admin/SidebarForAdmin';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const adminData = {
            email: data.email
        }
        const url = `http://localhost:5000/admin`
        console.log(adminData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },body: JSON.stringify(adminData)
        })
        .then(res => console.log('server site', res))
    };
    return (
        <div className="row">
            <div className="col-md-4">
                <SidebarForAdmin></SidebarForAdmin>
            </div>
            <div className="col-md-8 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{
                        width: '500px',
                        borderRadius: "50px",
                        height: '50px'

                    }} className="mb-5 text-center" type="text" name="email" placeholder="@gmail.com" {...register("email")} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />

                    <input className="ms-5 mt-5 btn btn-warning" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;