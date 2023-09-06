import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
        <a href="mailto:aryandesai34@gmail.com" className="footer__link">aryandesai34@gmail.com</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="https://github.com/Aryandesai1">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://www.linkedin.com/in/aryan-desai-155723208/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
        </ul>
    </footer>
  );
}

export default Footer;
