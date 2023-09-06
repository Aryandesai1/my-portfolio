import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Import Footer if you have a Footer component

function DevAryanPortfolio() {
  return (
    <div>
      <Header />

      <section className="intro" id="RTVR">
        <h1 className="section__title section__title--intro">
          Virtual Reality <strong>Reminiscence Therapy</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Integrated an existing web application with Unity application using WebGL
        </p>
        <img src="img/portfolio-01.png" alt="Virtual Reality Reminiscence Therapy" />
      </section>

      <div className="portfolio-item-individual">
        <p>
          Developed a virtual reality (VR) application in Unity and integrated it with an existing web application hosted on Heroku, and used Github for version control. The application was used by the Ontario Tech University for clinical trials at The Ontario Shores Centre for Mental Health Sciences as a form of reminiscence therapy for patients with dementia.
        </p>
        <img src="img/portfolio-01-1png.png" alt="VR Application Screenshot" />
        <p>Technologies used include: Heroku, PHP, MySQL, JavaScript, HTML, and C#</p>
      </div>

      
      <Footer />

     
    </div>
  );
}

export default DevAryanPortfolio;
