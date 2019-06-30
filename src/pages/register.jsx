import React ,{ Component} from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Jumbotron from '../components/jumbotron';
import { Button, Form ,FormGroup ,Label, Input } from 'reactstrap';




class Register extends Component{
    render(){
        return(
            <div><div className="main">
                <Navbar />

                <div className="container">
                <Jumbotron title="playstar" subtitle="Now watch movies online on"/>
                </div>

                <div className="container-inner">
                    
                    <div className="container">
                        <div>
                            <Form id="mydiv1" className="login-form" action="/login/">
                                <h1 style={{textAlign: 'center'}}>REGISTER PAGE</h1>
                                <div className="form-group">
                                    <Label>Name</Label><br/>
                                    <input className="form-control"  name="name" id="name" type="text" placeholder="Name" onChange={this.validate4} required/>
                                </div>
                                <div className="form-group">
                                    <Label>Email</Label><br/>
                                    <input className="form-control" name="email" id="email" type="email" placeholder="Email" onChange={this.validate1} required/>
                                </div>
                                <div className="form-group">
                                    <Label>Password</Label><br/>
                                    <input className="form-control" ref={(input)=>{this.pass = input}} type="password" name="password" id="password" placeholder="Password" onChange={this.validate8} required/>
                                </div>
                                <div className="form-group">
                                    <Label>Confirm Password</Label><br/>
                                    <input className="form-control" ref={(input)=>{this.confpass = input}} type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" onChange={this.validate5} required/>
                                    <p id="error" style={{color: "red"}}></p> 
                                </div>
                                
                                <button id="sub" className="btn-lg btn-dark btn-block" href="/login/"  style={{textAlign: 'center'}}>Sign UP</button>
                                
                                <div className="text-center">
                                
                                <a>Already a Member</a>
                                
                                <span className="p-2">|</span> 
                                <a href="/login/">Log In</a>
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
export default Register;