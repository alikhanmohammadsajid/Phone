import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../DashBoard/Sidebar/Sidebar';

const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addService`
        // console.log(serviceData)

        fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(serviceData)
        })
        .then(res => {
            console.log('server',res);
        })
    };

    const handleImgUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', 'cec282c8bfe8acfaf05282f10bbec60d')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="container col-md-8  mt-5 me-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="ms-5 mt-5" name='name' type="text" placeholder="name" {...register("name")} />
                    <br />
                    <input className="ms-5 mt-5" name='price' type="text" placeholder="price" {...register("price")} />
                    {errors.exampleRequired && <span>This field is required</span>}


                    <input className="ms-5 mt-5" name='exampleRequired' type='file' onChange={handleImgUpload} />
                    <br />
                    <input className="ms-5 mt-5" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddServices;