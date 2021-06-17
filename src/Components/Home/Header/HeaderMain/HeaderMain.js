import React from 'react';
import mobile from '../../../../images/asus.jpg'
const HeaderMain = () => {
    return (
        <main style={{
            height: "600px"
        }} className="row d-flex align-items-center mt-5">
            <div className="col-md-4 offset-md-1 align-center">
                <h5 className="text-white">ASUS BLACK EDITION</h5>

                <h3 className="text-white mt-3"> Modern Communication Technology</h3>

                <p className="text-white lh-1 mt-3">Find smart phone stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutter stock collection. Thousands of new ...</p>

                <button type="button" className="btn btn-info text-white mt-4">About</button>
            </div>
            <div className="col-md-6 ms-auto d-flex justify-content-center">
                <img style={{
                    height: "400px",
                    borderRadius: "50px"
                }} src={mobile} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;