import Container from 'react-bootstrap/Container';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

const Home = () => {

    const name = "Saheel Saneef";

    
    return ( 
        <div className='bg-black vh-100 d-flex align-items-center '>
            <Container >
                <h1 className='fs-2 text-white mb-3'>Hello my name is</h1>
                <h1 className="fw-bold text-white mb-3" style={{ fontSize: '75px' }}>{name}</h1>
                <p className='text-white'style={{ fontSize: '35px' }}>And I'm an <span className='text-danger fw-bold'>Undergraduate</span> </p>
            </Container>
        </div>
        
        
        
     );
}
 
export default Home;