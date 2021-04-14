import React from 'react';
import man from '../../../images/man.png';
import woman from '../../../images/woman.png';
import woman2 from '../../../images/woman2.png';
import OurBlogsCard from '../OurBlogsCard/OurBlogsCard';

const blogerData = [
    {
        name: 'Dr.Caudi',
        date: '23 April 2019',
        title: '2 Times of Brush in a Day Can Keep You Healthy',
        img: man
    },
    {
        name: 'Dr.Caudi',
        date: '23 April 2019',
        title: '2 Times of Brush in a Day Can Keep You Healthy',
        img: woman
    },
    {
        name: 'Dr.Caudi',
        date: '23 April 2019',
        title: '2 Times of Brush in a Day Can Keep You Healthy',
        img: woman2
    }
]

const OurBlogs = () => {
    return (
        <section className='container'>
            <div className='text-center'>
                <h4 className='text-color '>OUR BLOG</h4>
                <h1>From Our Blog News</h1>
            </div>
            <div className="row justify-content-center my-5 our-blogs-main">
                {blogerData.map(blog => <OurBlogsCard blog={blog}></OurBlogsCard>)}
            </div>
        </section>
    );
};

export default OurBlogs;