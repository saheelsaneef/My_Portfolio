import React from 'react';
import { Container } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import planetOne from '../Assets/planet.svg';
import planetTwo from '../Assets/planet-2.svg';
import planetThree from '../Assets/planet-3.svg';
import planetFour from '../Assets/planet-4.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';



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

  const Image = styled(motion.img)`
  position:absolute;
  width:100%;
  height:100%;
  max-width:150px;
  max-height:150px;

    &:nth-child(1) {
      top: 90px;
      right: 1px;
    }

    &:nth-child(2) {
       top: 220px;
       right: 120px; 
    }

    &:nth-child(3) {
       bottom: 230px; 
       right: 30px;
    }

    &:nth-child(4) {
       bottom: 100px; 
       right: 160px; 
    }

  `;

  return (
    <div className='bg-black vh-100 d-flex align-items-center'>
      <Container>
        <animated.h1 className='fs-2 text-white mb-3' style={{ ...fadeInAnimation }}>
          Hello my name is
        </animated.h1>
        <animated.h1 className="fw-bold text-white mb-3" style={{ fontSize: '75px', ...fadeInAnimat }}>
          {name}
        </animated.h1>
        <animated.p className='text-white' style={{ fontSize: '35px', ...fadeInAnimation }}>
          And I'm an <span className='text-danger fw-bold' >Undergraduate</span>
        </animated.p>
      </Container>
      
      <Container className='d-flex align-items-center '>
        <Image src={planetOne} alt='planet One' whileTap={{ scale: 0.9 }}/>
        <Image src={planetTwo} alt='planet Two'whileTap={{ scale: 0.9 }}/>
        <Image src={planetThree} alt='planet Three' whileTap={{ scale: 0.9 }}/>
        <Image src={planetFour} alt='planet Four' whileTap={{ scale: 0.9 }}/>
      </Container>
    </div>
  );
};

export default Home;
