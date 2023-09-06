import React from 'react';
import Link from 'next/link';

function Work() {
  return (
    <section className="bg-dark text-light text-center py-20" id="work">
        <h2 className="text-accent text-4xl mb-4">My Projects</h2>
        <p className="text-light text-xl mb-12"></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            <Link href="/Project1" className="bg-dark overflow-hidden h-96 w-full relative">
                <img src="img/portfolio-01.png" alt="" className="transform transition-transform duration-750 ease-out hover:scale-120 hover:opacity-50" />
            </Link>
            <Link href="/Project2" className="bg-dark overflow-hidden h-96 w-full relative">
                <img src="img/portfolio-02.png" alt="" className="transform transition-transform duration-750 ease-out hover:scale-120 hover:opacity-50" />
            </Link>
            <Link href="/Project3" className="bg-dark overflow-hidden h-96 w-full relative">
                <img src="img/portfolio-03.png" alt="" className="transform transition-transform duration-750 ease-out hover:scale-120 hover:opacity-50" />
            </Link>
            <Link href="/Project4" className="bg-dark overflow-hidden h-96 w-full relative">
                <img src="img/portfolio-04.png" alt="" className="transform transition-transform duration-750 ease-out hover:scale-120 hover:opacity-50" />
            </Link>
        </div>
    </section>
  );
}

export default Work;
