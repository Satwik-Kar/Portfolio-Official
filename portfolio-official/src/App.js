import React, {useEffect, useRef, useState} from 'react';
import './App.css';

import {ReactComponent as Js} from '../src/assets/js.svg';
import {ReactComponent as Java} from '../src/assets/java.svg';
import {ReactComponent as Android} from '../src/assets/android.svg';
import {ReactComponent as Css} from '../src/assets/css.svg';
import {ReactComponent as Html} from '../src/assets/html.svg';
import {ReactComponent as Python} from '../src/assets/python.svg';
import {ReactComponent as Mysql} from '../src/assets/mysql.svg';
import {ReactComponent as React_} from '../src/assets/react.svg';
import {ReactComponent as Kotlin} from '../src/assets/kotlin.svg';

function App() {
    const divRef = useRef(null);
    const skillDivRef = useRef(null);
    const USERNAME = 'Satwik-Kar'
    const [DATA, setData] = useState(null);

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
    useEffect(() => {

        const ACCESS_TOKEN_ENCODED = 'tuc_u69qARKLS3U0loGxt2pWUVhKqbTD9t1TeI4q'


        function encodeROT13(inputString) {
            return inputString.replace(/[a-zA-Z]/g, function (char) {
                const base = char <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                return String.fromCharCode(base + ((char.charCodeAt(0) - base + 13) % 26));
            });
        }

        function decodeROT13(encodedString) {
            return encodeROT13(encodedString);
        }

        const ACCESS_TOKEN = decodeROT13(ACCESS_TOKEN_ENCODED)
        const fetchRepositories = () => {
            const apiUrl = `https://api.github.com/users/${USERNAME}/repos`;
            fetch(apiUrl, {'Authorization': `token ${ACCESS_TOKEN}`,},).then(res => res.json()).then((data) => {

                console.log(data);
                setData(data);


            }).catch((err) => console.log(err));
        }
        fetchRepositories();

    }, []);

    const getDate = (timestamp) => {

        let date = new Date(timestamp);

        return date.toLocaleDateString('en-IN')
    }

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
                                <h1>Hello,</h1>
                                <h1> I am <span style={{color: 'lightgreen'}}>Satwik</span>,</h1>
                                <h1>a Software Developer</h1>
                                <br/>
                                <h3>Currently located in India 🇮🇳</h3><br/>

                                <button type="button" className="btn btn-outline-success get-in-touch-btn">Get in touch
                                </button>
                            </div>
                        </div>
                        <div className='intro-div-right'>
                            <img className='profile-img' src={require('../src/assets/profile.jpg')} alt="profile"/>
                        </div>
                    </div>
                </div>

                <div className='skill-div hidden' ref={divRef}>
                    <div className='skill-div-top'>

                        <h1><span style={{color: '#009152'}}>Skills</span> and Tools</h1><br/><br/>
                        <h5>For a more <span style={{color: 'lightgreen'}}>detailed</span> overview, please go
                            through some of my projects.</h5><br/>

                    </div>
                    <div ref={skillDivRef} className='skills-div-bottom-logos'>

                        <div className={'logos-slide'}>

                            <div className={'skill-items'}>
                                <Android style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>Android Development</h1>
                            </div>
                            <div className={'skill-items'}>
                                <React_ style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>React</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Java style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>Java</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Js style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>Javascript</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Python style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>Python</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Html style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>HTML5</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Css style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>CSS3</h1>
                            </div>
                            <div className={'skill-items'}>
                                <img style={{margin: '0 100px'}} width={100} height={100}
                                     src={require('../src/assets/bootstrap.png')}/>
                                <h1>Bootstrap</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Kotlin style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>Kotlin</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Mysql style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>MySQL</h1>
                            </div>


                        </div>
                        <div className={'logos-slide'}>

                            <div className={'skill-items'}>
                                <Android style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>Android Development</h1>
                            </div>
                            <div className={'skill-items'}>
                                <React_ style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>React</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Java style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>Java</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Js style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>Javascript</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Python style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>Python</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Html style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>HTML5</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Css style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>CSS3</h1>
                            </div>
                            <div className={'skill-items'}>
                                <img style={{margin: '0 100px'}} width={100} height={100}
                                     src={require('../src/assets/bootstrap.png')}/>
                                <h1>Bootstrap</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Kotlin style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>Kotlin</h1>
                            </div>
                            <div className={'skill-items'}>
                                <Mysql style={{margin: '0 100px'}} width={100} height={100}/>
                                <h1>MySQL</h1>
                            </div>


                        </div>
                    </div>


                </div>
                <div className={'projects-div'}>
                    <h1>Project Works.</h1>
                    <div className={'projects-container'}>

                        {DATA?.map((item, index) => (

                            <div className={'item'}>

                                <h2>{item.name}</h2>

                                <h5>{item.description}</h5>
                                <div style={{display: 'flex', flexDirection:'row',gap:'20px'}}>
                                    <div  style={{display: 'flex', flexDirection:'row',gap:'20px'}}>
                                        <img width={20} height={20} src={require('../src/assets/code.png')}/>
                                        <h6>{item.language ? item.language : 'N/A'}</h6>
                                    </div>
                                    <h6>last updated · {getDate(item.pushed_at)}</h6>

                                </div>


                            </div>


                        ))}


                    </div>


                </div>
            </header>
        </div>
    );
}

export default App;
