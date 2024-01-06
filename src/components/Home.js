import React from 'react';
import { Container } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import planetOne from '../Assets/planet.svg';
import planetTwo from '../Assets/planet-2.svg';
import planetThree from '../Assets/planet-3.svg';
import planetFour from '../Assets/planet-4.svg';


const Home = () => {
  const name = "Saheel Saneef";

  const fadeInAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });

  const fadeInAnimat = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 0, transform: 'translateX(-100%)' },
    config: { duration: 1200 },
  });

  const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%; 
  max-width:220px;
  max-height:220px;
`;


  return (
    
    <div className='bg-black vh-100 d-flex  align-items-center'>
        
        <div className="left">
            <Container>
                <animated.h1 className='fs-2 text-white mb-3' style={{ ...fadeInAnimation }}>Hello my name is</animated.h1>
                <animated.h1 className="fw-bold text-white mb-3" style={{ fontSize: '75px', ...fadeInAnimat }}> {name}</animated.h1>
                <animated.p className='text-white' style={{ fontSize: '35px', ...fadeInAnimation }}>And I'm an <span className='text-danger fw-bold' >Undergraduate</span></animated.p>
            </Container>
        </div>
        <div className="right ">
            <Container>
                <Img src={planetOne} alt='planet1'/>
                <Img src={planetTwo} alt='planet2'/>
                <Img src={planetThree} alt='planet3'/>
                <Img src={planetFour} alt='planet4'/>
            </Container>
        </div>
        
    </div>

  );
};

export default Home;
