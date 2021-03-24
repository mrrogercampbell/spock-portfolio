import React from 'react';

const Home = () => {
    return (
        <div>
            <h1 id='name'>Welcome to Mr. Spock's Portfolio Page</h1>
            <img src="https://e7.pngegg.com/pngimages/454/204/png-clipart-spock-star-trek-james-t-kirk-t-shirt-t-shirt-face-black-hair-thumbnail.png" alt="Afro Spock" />
            <ul>
                <li>
                    <a
                        id='github'
                        href='https://github.com/mrrogercampbell'
                        target='_blank'
                        rel="noreferrer">
                        My GitHub
                        </a>
                </li>
                <li>
                    <a
                        id='linkedin'
                        href='https://www.linkedin.com/in/mrrogercampbell/'
                        target='_blank'
                        rel="noreferrer">My LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        id='resume'
                        href='https://drive.google.com/file/d/1Y3I8pKG7CMY-9D1fbivfF36Bv1NHsxJG/view?usp=sharing'
                        target='_blank'
                        rel="noreferrer">My Resume
                    </a>
                </li>
                <li>
                    <a
                        id='phone-number'
                        href="tel:+155512346789"
                        target='_blank'
                        rel="noreferrer">Call Me
                    </a>
                </li>
                <li>
                    <a
                        id='email-address'
                        href="email:spock@starfleet.com"
                        target='_blank'
                        rel="noreferrer">Email Me
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default Home;