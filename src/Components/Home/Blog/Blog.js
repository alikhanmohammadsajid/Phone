import React from 'react';
import blackShark from '../../../images/Blac-Shark-jpg.jpg'
const Blog = () => {
    return (
        <section className="blog-container container mt-5 ">

            <div className="row d-flex justify-content-center offset-md-1 ">
                <div className="col-md-6 mt-5 align-center">
                    <h3 className="text-dark">ULTRA GAME MODE</h3>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam blanditiis nulla asperiores, vero alias aspernatur esse, aperiam impedit quisquam quos facilis saepe aut! Similique dolores enim voluptas laboriosam ipsam, praesentium modi laborum molestiae! Quidem inventore dolorum repudiandae temporibus fugiat deleniti asperiores autem ut earum pariatur, ipsum sed dicta unde.</p>
                    <button className="btn btn-info btn-lg">Learn More</button>
                </div>
                <div className="col-md-6">
                    <img style={{ height: "300px" }} src={blackShark} alt="" />

                </div>
            </div>
        </section>
    );
};

export default Blog;