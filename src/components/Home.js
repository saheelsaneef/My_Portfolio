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
  max-width:250px;
  max-height:250px;

    &:nth-child(1) {
      top: 90px;
      right: 30px;
    }

    &:nth-child(2) {
       top: 220px;
       right: 430px; 
    }

    &:nth-child(3) {
       bottom: 170px; 
       right: 50px;
    }

    &:nth-child(4) {
       bottom: 30px; 
       right: 280px; 
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
        <Image src={planetOne} alt='planet One' whileTap={{ scale: 0.9 }} drag={true} dragConstraints={{top:-100,right:0,left:-1200,bottom:450}}/>
        <Image src={planetTwo} alt='planet Two'whileTap={{ scale: 0.9 }} drag={true} dragConstraints={{top:-230,right:400,left:-800,bottom:350}}/>
        <Image src={planetThree} alt='planet Three' whileTap={{ scale: 0.9 }} drag={true} dragConstraints={{top:-350,right:100,left:-1200,bottom:200}}/>
        <Image src={planetFour} alt='planet Four' whileTap={{ scale: 0.9 }} drag={true}  dragConstraints={{top:-450,right:400,left:-1000,bottom:100}}/>
      </Container>
    </div>
  );
};

export default Home;
