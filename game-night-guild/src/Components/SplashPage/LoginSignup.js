import React, {useState} from 'react';
import logo from '../../Assets/white-tower.png';
import signupIcon from '../../Assets/signup.svg';
import backIcon from '../../Assets/previous.svg';
import './Splash.css';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const SignIn = (props) => {

   const [login, setLogin] = useState(true);
   const [signup, setSignup] = useState(false);
   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

    let changeLogin = (e) => {
        e.preventDefault();
        setLogin(!login)
        setFullName('')
        setEmail('')
        setUsername('')
        setPassword('')
    }
    
    // //////////////////////////////////////////////
    return(
        <div className="App mainBackground">
            <img src={logo} className="login-signup-logo" alt="logo" />
                {!login ? 
                    <Form>
                    {/* SIGNUP */}
                    
                    <FormGroup row>                
                        <Col sm={10}>
                            <Input className="splash-input" type="text" name="email"placeholder="name" bsSize="lg" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>                
                        <Col sm={10}>
                            <Input className="splash-input" type="email" name="email"placeholder="email" bsSize="lg" />
                        </Col>
                    </FormGroup>
                    {/* LOGIN */}
                    <FormGroup row>
                        <Col sm={10}>
                            <Input className="splash-input" type="text" name="username" placeholder="username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={10}>
                            <Input className="splash-input" type="password" name="password" placeholder="password" />
                        </Col>
                    </FormGroup>
                </Form> 
                :
                    <Form>
                    {/* LOGIN */}
                    <FormGroup row>
                        <Col sm={10}>
                            <Input className="splash-input" type="text" name="username" placeholder="username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={10}>
                            <Input className="splash-input" type="password" name="password" placeholder="password" />
                        </Col>
                    </FormGroup>
                 </Form>
                }
                
            <br/>
                <button onClick={(e) => changeLogin(e) }><h1 className="loginButton">{ login ? 'Login' : 'Signup'}</h1></button>
            {/* BUTTON */}
                {/* <button className="signupIcon"></button> */}
                { login ? <button onClick={(e) => changeLogin(e)} className="signupIcon">{ login }</button> : <button onClick={(e) => changeLogin(e)} className="backIcon">{ !login }</button> }
        </div>
    )
}

export default SignIn;

