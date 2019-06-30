import React ,{ Component} from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <span >&#169; {new Date().getFullYear()}, <a href="#">playstar</a>  |  All rights reserved. </span>
                </div>
            </footer>
        );
    }
}

export default footer;