"use client"
import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link'

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <header className="flex justify-between p-4 bg-dark text-light">
        <div className="logo">

        </div>
        <button className="nav-toggle p-2 bg-transparent border-0 cursor-pointer" aria-label="toggle navigation" onClick={handleNavToggle}>
            <span className={classNames('hamburger block relative w-6 h-1 bg-accent rounded-full transition-transform duration-500 ease-in-out', { 'transform rotate-180': navOpen })}></span>
            <span className={classNames('hamburger block relative w-6 h-1 bg-accent rounded-full mt-2 transition-transform duration-500 ease-in-out', { 'transform -rotate-180': navOpen })}></span>
        </button>
        <nav className={classNames('nav fixed bg-dark bg-opacity-75 text-light top-0 bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-in-out', { 'translate-x-0': navOpen, 'translate-x-full': !navOpen })}>
            <ul className="nav__list flex flex-col h-full justify-center items-center m-0 p-0">
                <li className="nav__item mb-8"><Link href="../#home" className="nav__link text-2xl font-bold text-light" onClick={closeNav}>Home</Link></li>
                <li className="nav__item mb-8"><Link href="../#services" className="nav__link text-2xl font-bold text-light" onClick={closeNav}>My Services</Link></li>
                <li className="nav__item mb-8"><Link href="../#about" className="nav__link text-2xl font-bold text-light" onClick={closeNav}>About me</Link></li>
                <li className="nav__item mb-8"><Link href="../#work" className="nav__link text-2xl font-bold text-light" onClick={closeNav}>My Work</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
