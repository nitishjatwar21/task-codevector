import React ,{ Component} from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Jumbotron from '../components/jumbotron';
import { Button, Form ,FormGroup ,Label, Input } from 'reactstrap';
import { FacebookLoginButton} from 'react-social-login-buttons';
import './login.css'



class Login extends Component{
    render(){
        return(
            <div><div className="main">
                <Navbar />

                <div className="container">
                <Jumbotron title="playstar" subtitle="Now watch movies online on"/>
                </div>

                <div className="container-inner">
                    
                    <div className="container">
                        <div className="container">
                            <Form id="mydiv" className="login-form" action="/" >
                                <div className="container">
                                <h1 style={{textAlign: 'center'}}>LOGIN PAGE</h1>
                                <div className="form-group">
                                <Label>Email</Label><br/>
                                <input className="form-control"  id="email" name="email" type="email"  placeholder="Email" onChange={this.validate1} required/>
                                <pre className="error"></pre>
                                {/* <div class="invalid-feedback">Example invalid custom select feedback</div> */}
                                </div>
                                <div className="form-group">
                                <Label>Password</Label><br/>
                                <input className="form-control" id="password1" name="password1" type="password" placeholder="Password" onChange={this.validate2} required/>
                                <pre className="error"></pre>
                                </div>
                                <button type="submit " className="btn-lg btn-dark btn-block" href="/"   style={{textAlign: 'center'}}> Log In</button>
                                {/* <a className="btn-lg btn-dark btn-block" href="/sidebar/" style={{textAlign: 'center'}} onClick={()=>alert("Hey!")} >Log In</a> */}
                                {/* <button className="btn-lg btn-dark btn-block"  href="/logout" >Log In</button> */}
                                <div className="text-center pt-3">
                                Or continue with your Social Account
                                </div>
                                <FacebookLoginButton className="mt-3 mb-3" />
                                <div className="text-center">
                                <a href="/register/">Sign Up</a>
                                <span className="p-2">|</span> 
                                <a href="/">Forgot Password</a>
                                </div>
                                </div>
                            </Form>           
        
                        </div>
                    </div>
                </div>
                
                </div>
                <div className="foot">
                <Footer/>
                </div>
                
            </div>
        )
    }
}
export default Login;