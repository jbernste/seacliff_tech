import React, {Fragment} from 'react';
import { useForm } from "react-hook-form";

const ProjectForm = () => {
    const { register,errors } = useForm({
        mode: "onBlur"
    });
    return (
        <Fragment>
         <form action="https://getform.io/f/2c968bc7-636a-4789-bc54-b615c3f2b480" method="POST">
            <div className="row mb-n4">
                <div className="col-md-12 col-12 mb-4">
                    <input type="text" placeholder="Your Name *" name="name" ref={register({ required: 'Name is required' })} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="col-md-12 col-12 mb-4">
                    <input type="email" placeholder="Email *" name="email" ref={register({
						required: 'Email is required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: "invalid email address"
						}
					})} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="col-12 mb-6">
                    <textarea name="message" placeholder="Message" ref={register({ required: 'Message is required' })}></textarea>
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <div className="col-12 text-center mb-4">
                    <button className="btn btn-primary btn-hover-secondary">Get a free consultation</button>
                </div>
            </div>
        </form>
        <p className="form-messege"></p>
        </Fragment>
    )
}

export default ProjectForm;
