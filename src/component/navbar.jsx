import React from 'react';
import './navbar.css';
import cmich from './images/menuCMich.jpg';
import bits from './images/menuBitsPilani.jpg';
import resume from './docs/Resume.pdf';
import cv from './docs/CV.pdf';
import cl from './docs/CL.pdf';
import bosm from './docs/bosm.pdf';
import coep from './docs/coep.pdf';
import aws from './docs/AmazonWebServices.pdf';
import oracle from './docs/Oracle.pdf';

const navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#home" rel="no-opener">Home</a></li>
                <li><a href="#work" rel="no-opener">Work</a></li>
                <li><a href="#project" rel="no-opener">Project</a></li>
                <li><a href="#academic" rel="no-opener">Academic</a></li>
                <li><a href="#contact" rel="no-opener">Contact</a></li>
                <li><a href="#" rel="no-opener">Documents</a>
                    <ul class="doc">
                        <li><a href={resume} rel="no-referrer no-opener" target="_blank">Resume</a></li>
                        <li><a href={cv} rel="no-referrer no-opener" target="_blank">CV</a></li>
                        <li><a href={cl} rel="no-referrer no-opener" target="_blank">Letter</a></li>
                        <li><a href="#" rel="no-referrer no-opener"><img class="cmich" src={cmich} alt="Certifications achieved in CMich"/><br/>&nbsp;Certification</a>
                            <ul class="cert">
                                <li><a href={aws} rel="no-referrer no-opener" target="_blank">&nbsp;AWS</a></li>
                                <li><a href={oracle} rel="no-referrer no-opener" target="_blank">&nbsp;Oracle</a></li>
                            </ul>
                        </li>
                        <li><a href="#" rel="no-opener"><img class="cmich" src={bits} alt="BITS Pilani attained Medals"/><br/>&nbsp;Above Beyond</a>
                            <ul class="extrac">
                                <li><a href={bosm} rel="no-referrer no-opener" target="_blank">Sports</a></li>
                                <li><a href={coep} rel="no-referrer no-opener" target="_blank">Nationals</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
};

export default navbar;
