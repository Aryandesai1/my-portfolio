import React from 'react';

function Services() {
  return (
    <section className="my-services " id="services" >
        <h2 className="section__title section__title--services ">What I do</h2>
        <div className="services ">
            <div className="service">
                <h3>Web Design + Development</h3>
                <p>
                    Through my University contract and education I have learned how to develop, reactive and flexible websites using HTMl, Javascript and PHP.
                </p>
            </div>
            <div className="service">
                <h3>AWS</h3>
                <p>
                    I have 2 certifications in AWS and am able to design and implement cloud solutions with AWS(This website is hosted on AWS).
                </p>
            </div>
            <div className="service">
                <h3>VR Development (C#)</h3>
                <p>
                    Throughout my 3 month paid contract with Ontario Tech University, which was also an extenstion of my Capstone Project Thesis, I learned how to use C# and Unity along with integrating them on a web hosted platform using WebGL.
                </p>
            </div>
        </div>
        <a href="#work" className="btn">My Work</a>
    </section>
  );
}

export default Services;
