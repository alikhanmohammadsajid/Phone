import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../DashBoard/Sidebar/Sidebar';

const ReviewInventory = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        console.log(data);
        const reviewData = {
            name: data.name,
            description: data.description,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addReview`
        console.log(reviewData)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server site response', res))

    };

    const handleImgUpload = e => {
        console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'cec282c8bfe8acfaf05282f10bbec60d')
        imageData.append('image', e.target.files[0])

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
            <div className="col-md-4"><Sidebar></Sidebar></div>
            <div className="col-md-8">
            <h5 className="text-uppercase text-brand mt-5 text-center">here you can give review</h5>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{
                        height: '50px',
                        borderRadius: "50px",
                        textAlign: 'center',
                        backgroundColor: '#61dafb'
                       
                    }} className="mb-5 mt-5" name="name" type="text" placeholder="name" {...register("name")} />
                    <br />

                    <input style={{
                        height: '200px',
                        borderRadius: "40px",
                        textAlign: 'center',
                        backgroundColor: '#61dafb'
                    }} className="me-5" name="description" type="text" placeholder="description" {...register("description")} />

                    <input  className="mb-5" type="file" onChange={handleImgUpload} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />

                    <input className="btn btn-outline-danger" type="submit" />
                </form>
            </div>


        </div>
    );
};

export default ReviewInventory;