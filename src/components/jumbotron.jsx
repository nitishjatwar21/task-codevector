import React ,{ Component} from 'react';
import { Link } from 'react-router-dom';
import './jumbotron.css'

class jumbotron extends Component{
    render(){
        return(
            <div className="jumbotron jumbotron-fluid">
                <div className="container" style={{textAlign: "right"}}>
                    <h3 className="lead">{this.props.subtitle}</h3>
                    <h1 className="display-3">{this.props.title}</h1>
                </div>
            </div>
        )
    }
}


export default jumbotron;