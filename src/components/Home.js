import Container from 'react-bootstrap/Container';


const Home = () => {

    const name = "Saheel Saneef";
    
    return ( 
        <div>
            <Container>
            <p className='fs-4  mb-0'>Hello my name is</p>
            <p className="fs-1 fw-bold mb-0">{name}</p>
            <p className='fs-2 '>And I'm an <span className='text-danger fw-bold'>Undergraduate</span> </p>
        </Container>
        </div>
        
        
        
     );
}
 
export default Home;