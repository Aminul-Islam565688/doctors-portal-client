import React from 'react';

const ContactUs = () => {
    return (
        <section>
            <div className='contactus-main'>
                <div className='text-center'>
                    <h3 className='text-color '>CONTACT US</h3>
                    <h1 className='contact-us-text'>Always Connect With Us</h1>
                </div>
                <div className='w-75 my-5 mx-auto'>
                    <div class="mb-3">
                        <input type="text" class="form-control contact-input" id="formGroupExampleInput" placeholder="Email Address*" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control contact-input " id="formGroupExampleInput2" placeholder="Subject*" />
                    </div>
                    <div className="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your Message*" rows="8"></textarea>
                    </div>
                    <div class="my-4 d-flex justify-content-center">
                        <button type="submit" class="btn appointment-btn contact-us-btn">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;