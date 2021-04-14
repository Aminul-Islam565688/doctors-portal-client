import React from 'react';
import patient from '../../../images/patient.png';

const ExceptionalService = () => {
    return (
        <section className='pb-5'>
            <div className="row mx-5 py-5 align-items-center justify-content-center">
                <div className="col-md-5 ">
                    <img style={{ width: "100%" }} src={patient} alt="" />
                </div>
                <div className="col-md-7">
                    <h1>Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className=' my-5 text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci temporibus repellat id soluta debitis ullam fugiat nesciunt repellendus maiores sequi, obcaecati commodi iusto aspernatur ducimus minus delectus illo doloribus asperiores atque laborum rerum quas qui! Nostrum eligendi cum laboriosam quis velit omnis blanditiis perspiciatis harum consequuntur, ex impedit numquam quo iusto commodi? Perspiciatis blanditiis praesentium quae sint adipisci dolorem voluptas obcaecati repellat doloremque animi neque reiciendis eligendi dolore optio placeat nisi beatae voluptatem natus harum nemo aspernatur, consequatur veritatis sunt. Quibusdam nisi aliquam quis ex labore dicta pariatur. Nam exercitationem tempora id laudantium corporis! Vitae saepe earum totam dignissimos magnam deserunt non, debitis porro iste est odio quos tempora dolore ab officiis. Nam repellat ea labore vel illum architecto asperiores!</p>
                    <button style={{ padding: "7px 25px" }} className="btn  appointment-btn">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default ExceptionalService;