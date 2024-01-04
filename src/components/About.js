import { Container } from "react-bootstrap";


const About = () => {
    const name = "I'm Saheel Saneef";
    return ( 
        <div>
            <h3 className="text-center mt-5">About me</h3>
            <Container>
                <div className="d-flex">
                    <div className="image">
                        
                    </div>
                    <div className="aboutcontent">
                        <h4 className="fw-bold">{name}</h4>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default About;