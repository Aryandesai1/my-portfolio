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
                Step to it <strong>Mobile Application</strong> 
            </h1>
            <p class="section__subtitle section__subtitle--intro">Android application for tracking steps and location</p>
            <img src="img/portfolio-04.png" alt=""/>
        </section>
        <div class="portfolio-item-individual">
            <p>The app provides a comprehensive experience for individuals who enjoy walking to nearby locations and tracking their steps. While it is suitable for anyone, it specifically targets city dwellers who tend to walk more frequently. The app simplifies the process of finding nearby places, setting routes, and tracking step counts. Additionally, it saves each user's step count progress, ensuring that their walking data is never lost.</p>
            
            <p>integrated the Google Maps API to display maps within their app. By obtaining the user's latitude and longitude, the app centers the map on the user's location. Users can select a desired waypoint and initiate a route using Google Maps. The app also leverages the user's latitude and longitude to find nearby locations through the Google Places API.</p>
            <p>integrated the Google Places API to display locations near the user. They implemented four buttons, each showcasing different location types (restaurants, gyms, schools, and parks). Although the Google Places API can list numerous additional locations, the team could not incorporate all of them. Ideally, a dropdown menu would have been included to provide access to all available place types.</p>
        
        </div>

      
      <Footer />

     
    </div>
  );
}

export default DevAryanPortfolio;
