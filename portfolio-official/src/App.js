import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    divRef.current.classList.add('show');

                    console.log("intersecting", entry);
                } else {

                    divRef.current.classList.remove('show');
                    console.log("not intersecting", entry);
                }
            },
            {
                root: null, // Use the viewport as the container
                rootMargin: '0px',
                threshold: 0, // Trigger when 10% of the element is visible
            }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Portfolio</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='intro-div-bg'>
                    <div className='intro-div'>
                        <div className='intro-div-left'>
                            <div className='intro-div-left-text-holder'>
                                <h6>Hello,</h6>
                                <h6> I am <span style={{color: 'lightgreen'}}>Satwik</span>,</h6>
                                <h6>a Software Developer</h6>
                                <br />
                                <h3>Currently located in India 🇮🇳</h3><br />

                                <button type="button" className="btn btn-outline-success get-in-touch-btn">Get in touch
                                </button>
                            </div>
                        </div>
                        <div className='intro-div-right'>
                            <img className='profile-img' src={require('../src/assets/profile.jpg')} alt="profile" />
                        </div>
                    </div>
                </div>

                <div className='skill-div hidden' ref={divRef}>
                    <div className='skill-div-left'>
                        <div className='skill-div-left-text-holder'>
                            <h1>Skills and Tools</h1><br /><br />
                            <h5>For a more <span style={{color: 'lightgreen'}}>detailed</span> overview, please go through some of my projects.</h5><br />
                        </div>
                    </div>
                    <div className='skill-div-right'></div>
                </div>
            </header>
        </div>
    );
}

export default App;
