import React, { useState } from 'react';
import Sidebar from '../../Dashboard/SideBar/SideBar';

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('https://serene-citadel-65750.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 pr-5 ">
                <h1 className='text-color ml-3'>Add Doctor</h1>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload a Image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;