import { Container, Card, CardBody, Form, Button, Navbar, Row, Col, Image, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";



function ActivityCol(info) {

    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=10');
            setImages(response.data);
        };

        fetchImages();


    }, []);

    const clickedImg = (image) => {
        setSelectedImage(image);
        handleShow();
    }

    return (
        <Container>
            <Col>
                <h2> {info.activityName} </h2>
                <Row>
                    {images.map((image) => (
                        <Col key={image.id} xs={6} sm={6} lg={6} className='mb-3'>
                            <Card className="bg-dark text-white">
                                <Image onClick={() => clickedImg(image)} src={image.download_url} alt='post' style={{ maxWidth: '100%' }} />
                                <Card.ImgOverlay>
                                    <Card.Title>{info.activityName} Session</Card.Title>
                                    <Card.Text>
                                        Recorrido alrededor de la Bahía
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Image src={selectedImage?.download_url} alt='post' style={{ maxWidth: '100%' }} />
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </Container>
    )

}


function Contents() {
    return (
        <Container>
            <Row>
                <Col>
                    <ActivityCol activityName="Cycling"></ActivityCol>
                </Col>
                <Col>
                    <ActivityCol activityName="Running"></ActivityCol>
                </Col>
                <Col>
                    <ActivityCol activityName="Biking"></ActivityCol>
                </Col>
            </Row>

        </Container>
    )


}


function Bottom() {

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get('https://my.api.mockaroo.com/user?key=c96cbbb0');
            setUser(response.data);
        };

        fetchUser();

    }, []);

    return (
        <Navbar fixed="bottom" bg="dark" data-bs-theme="dark">

            <Row style={{ width: '100%', alignContent: 'center' }}>
                <Col>
                    <Image style={{ height: '50px', width: '50px', marginLeft: '50px' }} id="profilePic" src={user.pic} alt="User" roundedCircle />
                </Col>
                <Col>
                    <Navbar.Text>
                        {user.name}
                    </Navbar.Text>
                </Col>
                <Col>
                    <Navbar.Text>
                        RunTime
                        &nbsp;
                        {user.runTime}
                    </Navbar.Text>
                </Col>
                <Col>
                    <Navbar.Text>
                        SwimTime
                        &nbsp;
                        {user.swimTime}
                    </Navbar.Text>
                </Col>
                <Col>

                    <Navbar.Text>
                        BikeTime
                        &nbsp;
                        {user.bikeTime}
                    </Navbar.Text>
                </Col>
            </Row>
        </Navbar>
    )
}

function Home() {

    return (
        <Container>
            <Contents />
            <Bottom />
        </Container>
    )

}

export default Home;