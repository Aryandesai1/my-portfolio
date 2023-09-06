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
                P2P Applcation <strong>Using C</strong> 
            </h1>
            <p class="section__subtitle section__subtitle--intro">Project for Advanced Computer Networks</p>
            <img src="img/portfolio-03.png" alt=""/>
        </section>
        <div class="portfolio-item-individual">
            <p>This project involves creating and configuring a makeshift peer-to-peer network using C and socket programming. Socket programming allows for establishing connections between nodes on a network, supporting both TCP and UDP communication types. To set up a socket connection, one must define its domain (IPv4 or IPv6), type (UDP or TCP), and protocol (IP). Once the socket is created, it can be bound to a specific port and IP address.</p>
            <img src="img/portfolio-03-1.png" alt=""/>
            <p>The protocol has two main components: an index server and multiple clients. The index server manages incoming messages on a specified port, while clients and server synchronize their actions using switch cases. The server handles requests such as registration, downloads, deregistration, listing server files, and clients leaving. In turn, clients open TCP sockets for files, request file downloads, remove TCP sockets, request server files, and exit socket connections. Error handling is implemented to ensure robust communication, maintaining consistent information across all peers. The specific interactions between clients and server are detailed in the project's description of client and server programs.</p>
            <p>A peer, or connecting client, can act as both a content publisher and subscriber, meaning they can download and upload content within the network. The core actions governing a peer's interaction with the server include joining the network, uploading a file, requesting available files for download, downloading a file, and eventually leaving the network. Each of these actions has its own subflow, detailing the specific steps involved in each process.</p>
        
        </div>
      
      <Footer />

     
    </div>
  );
}

export default DevAryanPortfolio;
