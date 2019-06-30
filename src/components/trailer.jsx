import React ,{ Component} from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import './trailer.css'

class Trailer extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="container-fluid">
                            <div className="margin">
                                <Link to="/detail/"><img className="image_hover" src="https:\/\/static.episodate.com\/images\/tv-show\/thumbnail\/43467.com" style={{height:'250px',width:'175px'}}/></Link>
                                <div className="container" style={{backgroundColor:'gry'}} >
                                    <h5 style={{textAlign:'center'}}>Lucifier</h5>
                                    <h6>Sci-Fi | Thriller | Drama</h6>
                                    <a className="btn btn-secondary" style={{width:"175px"}}>Add to Watchlist</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="container-fluid">
                            <div className="margin">
                                <Link to="/detail/"><img className="image_hover" src="https:\/\/static.episodate.com\/images\/tv-show\/thumbnail\/24010.jpg"  style={{height:'250px',width:'175px'}}/></Link>
                                <div className="container" style={{backgroundColor:'gry'}} >
                                    <h5 style={{textAlign:'center'}}>The Walking Dead</h5>
                                    <h6>Sci-Fi | Horror | Drama</h6>
                                    <a className="btn btn-secondary" style={{width:"175px"}}>Add to Watchlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="container-fluid">
                            <div className="margin">
                                <Link to="/detail/"><img className="image_hover" src="https:\/\/static.episodate.com\/images\/tv-show\/thumbnail\/5348.jpg"  style={{height:'250px',width:'175px'}}/></Link>
                                <div className="container" style={{backgroundColor:'gry'}} >
                                    <h5 style={{textAlign:'center'}}>Supernatural</h5>
                                    <h6>Horror | Thriller | Sci-Fi</h6>
                                    <a className="btn btn-secondary" style={{width:"175px"}}>Add to Watchlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="container-fluid">
                            <div className="margin">    
                                <Link to="/detail/"><img className="image_hover" src="https:\/\/static.episodate.com\/images\/tv-show\/thumbnail\/37444.jpg"  style={{height:'250px',width:'175px'}}/></Link>
                                <div className="container" style={{backgroundColor:'gry'}} >
                                    <h5 style={{textAlign:'center'}}>Daredevil</h5>
                                    <h6>Sci-Fi | Thriller | Horror</h6>
                                    <a className="btn btn-secondary" style={{width:"175px"}}>Add to Watchlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Trailer;