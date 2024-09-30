import { Container, Card, Navbar, Row, Col, Image, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from 'react-i18next';

function formatTime(minutes) {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (mins === 0) return `${hours}h`;
    return `${hours}:${mins}h`;
};

function ActivityCol(obj) {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);
    const [clickedCard, setClickedCard] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [info, setInfo] = useState({ Running: [], Cycling: [], Swimming: [] });

    const images = {
        Running: "https://cdn-5f4f6e14c1ac180394b738c9.closte.com/wp-content/uploads/2018/03/01-1170x635.jpg",
        Cycling: "https://bikingman.com/contenu/uploads/EmilieClisson.jpg",
        Swimming: "https://d1s9j44aio5gjs.cloudfront.net/2016/07/The_Benefits_of_Swimming.jpg"
    }

    const texts = {
        Running: t('running'),
        Cycling: t('cycling'),
        Swimming: t('swimming')
    }

    useEffect(() => {
        const fetchData = async () => {
            const response1 = await axios.get('https://my.api.mockaroo.com/activities?key=c96cbbb0');
            const response2 = await axios.get('https://my.api.mockaroo.com/activities?key=c96cbbb0');
            const response3 = await axios.get('https://my.api.mockaroo.com/activities?key=c96cbbb0');

            setInfo({
                Running: response1.data, 
                Cycling: response2.data, 
                Swimming: response3.data});
        };

        fetchData();
    }, []);

    const clicked = (infoCard, activity) => {
        infoCard.activityName = activity;
        setClickedCard(infoCard);
        handleShow();
    }

    var act = obj.activityName;

    return (
        <Container>
            <Col style={{ textAlign: 'center' }} >
                <h2 style={{ fontWeight: 'bold' }}> {texts[act]} </h2>
                <Row>
                    {
                        info[obj.activityName].map((infoCard, index) => (
                            <Col key={index} onClick={() => clicked(infoCard, obj.activityName)} xs={6} sm={6} lg={6} className='mb-3'>
                                <CardxImg
                                    img={images[act]}
                                    activityName={act}
                                    duration={formatTime(infoCard.duration)}
                                    place={infoCard.place}
                                    distance={infoCard.distance}
                                    thumbnail={true}
                                ></CardxImg>
                            </Col>
                        ))
                    }
                </Row>
            </Col>

            <Modal show={show} onHide={handleClose} style={{ border: 'none' }}>
                <Modal.Body style={{ minWidth: '100%', padding: '0' }}>
                    <CardxImg
                        img={images[clickedCard.activityName]}
                        activityName={clickedCard.activityName}
                        place={clickedCard.place}
                        distance={clickedCard.distance}
                        duration={formatTime(clickedCard.duration)}
                        thumbnail={false}
                    ></CardxImg>
                </Modal.Body>
            </Modal>
        </Container>
    )

}

function CardxImg(info) {
    const { t } = useTranslation();

    const seshText = {
        Running: t('runningSesh'),
        Cycling: t('cyclingSesh'),
        Swimming: t('swimmingSesh')
    }

    var h2 = '1.5em';
    var text = '1em';
    var size = '300px';

    if (info.thumbnail) {
        h2 = '0.9em';
        text = '0.75em';
        size = '120px';
    }

    return (
        <Card className="bg-dark text-white" style={{ border: 'none', height: size }}>
            <Card.Img src={info.img} alt='post' style={{ maxWidth: '100%', filter: 'brightness(0.4)', height: size, objectFit: 'fill' }} />
            <Card.ImgOverlay>
                <Card.Title><h2 style={{ fontWeight: 'bold', fontSize: h2 }}>{seshText[info.activityName]} </h2></Card.Title>
                <Card.Text style={{ fontSize: text }}>
                    {t('tour')} {info.place}
                </Card.Text >
                <Card.Text style={{ fontSize: text, marginTop: 0 }}>
                    {info.distance} km - {info.duration}
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}


function Contents() {
    return (
        <Container style={{ minHeight: '120vh' }}>
            <Row>
                <Col>
                    <ActivityCol activityName="Cycling"></ActivityCol>
                </Col>
                <Col>
                    <ActivityCol activityName="Running"></ActivityCol>
                </Col>
                <Col>
                    <ActivityCol activityName="Swimming"></ActivityCol>
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

            <Row style={{ width: '100%', alignContent: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Col>
                    <Image style={{ height: '50px', width: '50px', marginLeft: '50px', objectFit: 'cover' }} id="profilePic" src={user.pic} alt="User" roundedCircle />
                </Col>
                <Col >
                    <Navbar.Text>
                        {user.name}
                    </Navbar.Text>
                </Col>
                <Col>
                    <Navbar.Text style={{ display: 'flex' }}>
                        <img src="/running-run.svg" alt="run" style={{ width: 'auto', height: '25px' }}></img>
                        &nbsp;
                        &nbsp;
                        {formatTime(user.runTime)}
                    </Navbar.Text>
                </Col>
                <Col>
                    <Navbar.Text style={{ display: 'flex' }}>
                        <img src="/swim.svg" alt="bike" style={{ width: 'auto', height: '30px' }}></img>
                        &nbsp;
                        &nbsp;
                        {formatTime(user.swimTime)}
                    </Navbar.Text>
                </Col>
                <Col>
                    <Navbar.Text style={{ display: 'flex' }}>
                        <img src="/bike.svg" alt="bike" style={{ width: 'auto', height: '30px' }}></img>
                        &nbsp;
                        &nbsp;
                        {formatTime(user.swimTime)}
                    </Navbar.Text>
                </Col>
            </Row>
        </Navbar>
    )
}

function Home() {

    return (
        <>
            <Contents />
            <Bottom />
        </>
    )

}

export default Home;