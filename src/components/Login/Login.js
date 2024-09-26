import { Container, Card, CardBody, Form, Button  } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({ username: '', name: '', age: '' });


    const validateForm = () => {
        let formIsValid = true;
        const newErr = { email: '', password: '' };

        const emailPattern = /^[a-z]+@[a-z]+\.[a-z]{2,4}$/;

        if (!emailPattern.test(email)) {
            formIsValid = false;
            newErr.username = 'Email is not valid';
        }

        if(password.length < 8) {
            formIsValid = false;
            newErr.password = 'Password must be at least 6 characters';
        }
        setErrors(newErr);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
        if (validateForm()) {
            alert('Form submitted');
        }
    }

    return (
        <Container>
            <Card className="shadow-lg" style={{ height: 'auto', display: 'flex', width: '95%', borderColor: 'none' }}>
                <CardBody>
                    <Card.Title style={{ textAlign: 'left' }}><h2 style={{ fontWeight: 'bold' }}>Login</h2></Card.Title>
                    <Form noValidate validated={{validateForm}} onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value); validateForm()}}
                                isInvalid={errors.email} />
                            <Form.Control.Feedback type='invalid'>
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Full name"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                isInvalid={errors.password} />
                            <Form.Control.Feedback type='invalid'>
                                {!!errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div style={{ textAlign: 'center' }}>
                            <Button variant="primary" className='mt-3' type="submit" href="/home">
                            Submit
                            </Button>
                        </div>
                    </Form>

                </CardBody>
            </Card>
        </Container>
    );

}

export default Login;