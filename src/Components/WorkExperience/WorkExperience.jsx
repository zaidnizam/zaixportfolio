import React, { useRef } from 'react';
import Slider from '../../react-slick';
import './WorkExperience.css';
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';

const WorkExperience = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section className='experience-container'>
            <h5>Work Experience</h5>

            <div className="experience-content">
                <div className="arrow-right" onClick={nextSlide}>
                    <span className="material-symbol-outlined">{'>'}</span>
                </div>

                <div className="arrow-left" onClick={prevSlide}>
                    <span className="material-symbol-outlined">{'<'}</span>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {WORK_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default WorkExperience;
