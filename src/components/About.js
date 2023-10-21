import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

function About() {

    const [show, setShow] = useState(true);

    return (
        <section className="container block">
            <Container fluid>
                <Row>
                    <Col sm={4}>
                        {show == true ?
                            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                <Alert.Heading style={{ fontSize: "18px", marginBottom: "0px" }}>Account Not Activated</Alert.Heading>
                            </Alert>
                            :
                            console.log("Close")
                        }
                        <Card style={{ width: '100%' }}>
                            <Image variant="top" src={require('../img/img1.jpeg')} />
                            <Card.Body>
                                <Card.Title style={{ marginTop: "15px", fontSize: "28px" }}>Glad Chinda</Card.Title>
                                <Card.Subtitle style={{ marginTop: "2px", marginBottom: "13px", color: "gray" }}>WEB DEVELOPER LAGOS</Card.Subtitle>
                                <Card.Text style={{ marginTop: "15px" }}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the.
                                </Card.Text>
                                <Button variant="success" onClick={() => setShow(true)}>View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={8}>
                        <div className='content'>
                            <div className='title'>
                                <h6>EDITOR'S PICK</h6>
                                <Button className='btn' variant="success">NEW</Button>
                            </div>
                            <div className='subtitle'>
                                <h1>Getting Started With React</h1>
                            </div>
                            <hr />
                            <div className='peregrafgh'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;