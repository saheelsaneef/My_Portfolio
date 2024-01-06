import React from 'react';
import { Container } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';


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
    </div>
  );
};

export default Home;
