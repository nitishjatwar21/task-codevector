import React ,{ Component} from 'react';
import './popular_movies.css'
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';

class Popular_movies extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="container-fluid">
                            <div className="margin">
                                <Link to="/detail/"><img className="image_hover" src="https:\/\/static.episodate.com\/images\/tv-show\/thumbnail\/33514.jpg" style={{height:'250px',width:'175px'}}/></Link>
                                <div className="container" style={{backgroundColor:'gry'}} >
                                    <h5 style={{textAlign:'center'}}>The 100</h5>
                                    <h6>Sci-Fi | Horror | Thriller</h6>
                                    <a className="btn btn-secondary" style={{width:"175px"}}>Add to Watchlist</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="container-fluid">
                            <div className="margin">
                                <Link to="/detail/"><img className="image_hover" src="https:\/\/static.episodate.com\/images\/tv-show\/thumbnail\/29671.png"  style={{height:'250px',width:'175px'}}/></Link>
                                <div className="container" style={{backgroundColor:'gry'}} >
                                    <h5 style={{textAlign:'center'}}>Gotham</h5>
                                    <h6>Sci-Fi | Thriller | Drama</h6>
                                    <a className="btn btn-secondary" style={{width:"175px"}}>Add to Watchlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="container-fluid">
                            <div className="margin">
                                <Link to="/detail/"><img className="image_hover" src="https:\/\/static.episodate.com\/images\/tv-show\/thumbnail\/29977.jpg"  style={{height:'250px',width:'175px'}}/></Link>
                                <div className="container" style={{backgroundColor:'gry'}} >
                                    <h5 style={{textAlign:'center'}}>Vikings</h5>
                                    <h6>Sci-Fi | Thriller | Drama</h6>
                                    <a className="btn btn-secondary" style={{width:"175px"}}>Add to Watchlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="container-fluid">
                            <div className="margin">    
                                <Link to="/detail/"><img className="image_hover" src="https:\/\/static.episodate.com\/images\/tv-show\/thumbnail\/52439.jpg"  style={{height:'250px',width:'175px'}}/></Link>
                                <div className="container" style={{backgroundColor:'gry'}} >
                                    <h5 style={{textAlign:'center'}}>Anime</h5>
                                    <h6>Sci-Fi | Thriller | Drama</h6>
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

export default Popular_movies;