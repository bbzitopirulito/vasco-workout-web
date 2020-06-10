import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'

import './index.scss'

const Login = () => {
    return (
        <div className="loginWrapper">
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <Button>Login</Button>
                <span>Não tens conta? Crie uma <Link to='/'>aqui!</Link></span>
            </Form>

            <Card>
                <CardBody>
                    <CardTitle>
                        Testlasjf
                    </CardTitle>
                    <CardText>Ohaosdhfaoskfjh</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Login