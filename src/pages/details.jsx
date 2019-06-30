import React ,{ Component} from 'react';
import './details.css';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Trailer from '../components/trailer'
import Popular_movies from '../components/popular_movies'



class Details extends Component{
    render(){
        return(
            <div><div className="main">
                <Navbar />
                
                
                <div className="container">
                    <h1 style={{marginBottom: '2%' }}>About The Movie</h1>
                    {/* <p>Lorem ipsum jknjkdn kdnjkn dnjnsk sjknsdjksn kjs nkdknn djkskjj snjkns slkskl skkksfk fsgk sokmgskdkls ks ks;klsklksk sdkksjklsdk skljkls kskdjsksj lskjdkljl sjkks ossdkdk ; sdksdksld kdsdsjkd dskkl  djksljskl ssdklss sdkd dskklsdjsdl sdkl sdkdsljlgsd dskdskdsmsd sdkslkd s skjsklkls.</p> */}
                    {/* <Carousel/> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="container">
                                    <h2>Watch Online</h2>
                                    <br/>
                                    <div className="container">
                                        <video width="320" height="240" controls>
                                            <source src="movie.mp4" type="video/mp4"/>
                                            <source src="movie.ogg" type="video/ogg"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="container" style={{textAlign: 'left'}}>
                                    <h5>Country:</h5><p>Los Angeles</p>
                                    <h5>Year:</h5><p>2012</p>
                                    <h5>Category:</h5><p>Adventure ,Fantasy</p>
                                    <h5>Release Date:</h5><p>December 12, 2012</p>
                                    <h5>Director:</h5><p>Peter Jackson</p>
                                    <h5>Actor:</h5><p> Martin Freeman, Ian McKellen, Richard Armitage, Ken Stott, Graham McTavish, Cate Blanchett, Hugo Weaving, Ian Holm, Elijah Wood ...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <h2 style={{margin: '2%',textAlign: 'center' }}>Movies you may like</h2>
                        <br/>
                <div className="container"> 
                    <Trailer />
                </div>
                <div className="container"> 
                    <Popular_movies />
                </div>
                
                </div>
                <div className="foot">
                <Footer/>
                </div>
                
            </div>
        )
    }
}


export default Details;