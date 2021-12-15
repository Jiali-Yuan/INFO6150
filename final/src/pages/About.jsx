import React from 'react';
import aboutWhyImg from '../img/about-why-img.jpeg';
import aboutWhatImg from '../img/about-what-img.jpeg';
import '../css/about.css';

function About() {
    return (
        <div className="about-page">
            <div className="about-why">
                <h4 className="title-why">Why we are here.</h4>
                <div className="why-body">
                    <p>Our brains are wired to enjoy things which make us happy. Sugar, in particular,
                        releases brain chemicals, like serotonin, that make us feel good. This leaves us
                        wanting to experience that good feeling over and over again, day after day.
                        <br />Quality of food matters to animals. If we look back a few million years, it was the quality
                        of food coupled with serious mental challenges in acquiring food that increased our brain size,
                        and helped us evolve from arboreal monkeys to human beings. Early humans ate a diet rich in protein
                        and plant nutrients, cleverly combining meat and fruit to obtain maximum nourishment.</p>
                    <img className="about-why-img" src={aboutWhyImg} />
                </div>
            </div>
            <div className="about-what">
                <h4 className="title-what">What we can do.</h4>
                <div className="what-body">
                    <img className="about-what-img" src={aboutWhatImg} />
                    <p>So many different dessert products, so little time, right? Not to mention the fact that even
                        the most obscure products often have lots of different options from different brands! We are
                        very proud of our ‘Best Of’ guides that compile a number of options from different brands of a
                        variety of food products.</p>
                </div>
            </div>
        </div>
    );
};

export default About;