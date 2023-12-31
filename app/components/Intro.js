import React from 'react';

function Intro() {
  return (
    <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I am <strong>Aryan Desai</strong> 
        </h1>
        <p className="section__subtitle section__subtitle--intro">Software Engineer</p>
        <img src="/img/picture.jpg" alt="" />
    </section>
  );
}

export default Intro;
