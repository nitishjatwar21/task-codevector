import React ,{ Component} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <Link className="navbar-brand" href="#"><h1>playstar</h1></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about/">About</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/login/">Login</Link>
                            </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar;