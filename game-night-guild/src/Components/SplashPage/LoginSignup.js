import React, {useState} from 'react';
import logo from '../../Assets/white-tower.png';
// import signupIcon from '../../Assets/signup.svg';
// import backIcon from '../../Assets/previous.svg';
import './Splash.css';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const SignIn = (props) => {

   const [login, setLogin] = useState(true);
//    const [signup, setSignup] = useState(false);
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

    let handleSubmit = (event) => {
        event.preventDefault();
        let url = login ? 'http://localhost:4000/user/login' : 'http://localhost:4000/user/signup'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                user: {
                fullName: fullName,
                email: email,
                userName: username,
                passwordHash: password
                }
            })
        }).then(res => res.json())
        .then(data => {
            props.tokenHandler(data.sessionToken)
        })
    }
    
    // //////////////////////////////////////////////
    return(
        <div className="App mainBackground">
            <img src={logo} className="login-signup-logo" alt="logo" />

                {!login ? 
                    <Form className="signupForm">
                    {/* SIGNUP */}
                    
                    <FormGroup row>                
                        <Col sm={10}>
                            <Input className="splash-input" type="text" name="email" placeholder="name" bsSize="lg" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>                
                        <Col sm={10}>
                            <Input className="splash-input" type="email" name="email" placeholder="email" bsSize="lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    {/* LOGIN */}
                    <FormGroup row>
                        <Col sm={10}>
                            <Input className="splash-input" type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={10}>
                            <Input className="splash-input" type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <br/>
                    <button onClick={(e) => handleSubmit(e)}><h1 className="loginButton">{ login ? 'Login' : 'Signup'}</h1></button>
                </Form> 
                :
                    <Form>
                    {/* LOGIN */}
                    <FormGroup row>
                        <Col sm={20}>
                            <Input className="splash-input" type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={20}>
                            <Input className="splash-input" type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <br/>
                    <button onClick={(e) => handleSubmit(e)}><h1 className="loginButton">{ login ? 'Login' : 'Signup'}</h1></button>
                 </Form>
                }
            {/* BUTTON */}
                { login ? <button onClick={(e) => changeLogin(e)} className="signupIcon">{ login }</button> : <button onClick={(e) => changeLogin(e)} className="backIcon">{ !login }</button> }
                
        </div>
    )
}

export default SignIn;

