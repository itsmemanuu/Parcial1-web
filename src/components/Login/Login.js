import { Container, Card, CardBody, Form, Button } from "react-bootstrap";
import { useState } from "react";
// import bootstrap from "bootstrap/dist/css/bootstrap.min.css"; // Removed unused import
import './Login.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";


function Login() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(false)

    const getEmailValid = () => {
        const emailPattern = /^[\w.-]+@([\w-]+\.)+[\w-]{2,3}$/;
        return emailPattern.test(email) || email === ""
    }

    const getPswdValid = () => {
        return password.length >= 8 || password === ""
    }

    const checkSubmit = (e) => {
        const form = e.currentTarget;

        console.log("suvbbbb")

        if (form.checkValidity() === false || email === "" || password === ""){
            e.preventDefault();
            e.stopPropagation()
        }
        else{
            console.log(valid)
            setValid(true)
        }
    }

    const handleSubmit = () => {
        console.log("submit")
        if (valid) {
            navigate('/home')
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center vh-100" style={{ minWidth: '100vw', height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: 'url("https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
            <Card className="shadow-lg " style={{ height: 'auto', display: 'flex', width: '80%', borderColor: 'none' }}>
                <CardBody>
                    <Card.Title style={{ textAlign: 'left' }}><h2 style={{ fontWeight: 'bold' }}> {t('login')} </h2></Card.Title>
                    <Form noValidate validated={valid} onSubmit={(e) => checkSubmit(e)} >
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label> {t('email')} </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t('email')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                isInvalid={!getEmailValid()} />
                            <Form.Control.Feedback type='invalid'>
                                {t('enotvalid')}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>{t('password')}</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder={t('password')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                                isInvalid={!getPswdValid()} />
                            <Form.Control.Feedback type='invalid'>
                                {t('pnotvalid')}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div style={{ textAlign: 'center' }}>
                            <Button variant="primary" className='mt-3' type="submit" onSubmit={handleSubmit()}>
                                {t('submit')}
                            </Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    );

}

export default Login;