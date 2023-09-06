import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Import Footer if you have a Footer component

function DevAryanPortfolio() {
  return (
    <div>
      <Header />

      <section class="intro" id="RTVR">
            <h1 class="section__title section__title--intro">
                Library Database <strong>Management System</strong> 
            </h1>
            <p class="section__subtitle section__subtitle--intro">Enhancing and refining a previous project</p>
            <img src="img/portfolio-02.png" alt=""/>
        </section>
        <div class="portfolio-item-individual">
            <p>In this project, the team enhanced a previous course project by conducting extensive testing, improving the backend, and refining the UI. They gained valuable experience in testing web applications, focusing on frontend, backend, and database connections.</p>
            <img src="img/portfolio-02-1.png" alt=""/>
            <p>We employed frameworks like Laravel, PHPUnit, and Selenium. Laravel helped to streamline the backend code, while Selenium enabled efficient automated testing. Black box testing was performed using the Selenium IDE. For unit and white box testing, the team used PHPUnit, which was familiar due to its similarity to JUnit.</p>
            <p>Lastly, the team learned about testing database queries and integrating multiple frameworks. They tested their project using an existing library database but acknowledged that future testing should involve different SQL and NoSQL databases to ensure compatibility and robustness.</p>
        </div>

      
      <Footer />

     
    </div>
  );
}

export default DevAryanPortfolio;
