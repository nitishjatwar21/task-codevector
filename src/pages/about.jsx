import React ,{ Component} from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Jumbotron from '../components/jumbotron';

import './initiative.css';

class About extends Component{
    render(){
        return(
            <div><div className="main">
                <Navbar />

                <div className="container">
                <Jumbotron title="playstar" subtitle="Now watch movies online on"/>
                </div>

                <div className="container">
                    <h1>About Us</h1>
                    <p style={{marginTop:'3%'}}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                </div>
                
                </div>
                <div className="foot">
                <Footer/>
                </div>
                
            </div>
        )
    }
}
export default About;