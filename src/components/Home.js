import Container from 'react-bootstrap/Container';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

const Home = () => {

    const name = "Saheel Saneef";

    
    return ( 
        <div className='bg-black vh-100 d-flex align-items-center '>
            <Container >
                <h1 className='fs-2 text-white mb-3'>Hello my name is</h1>
                <p className="fs-1 text-white fw-bold mb-3">{name}</p>
                <p className='fs-3 text-white'>And I'm an <span className='text-danger fw-bold'>Undergraduate</span> </p>
            </Container>
        </div>
        
        
        
     );
}
 
export default Home;