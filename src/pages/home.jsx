import React ,{ Component} from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Jumbotron from '../components/jumbotron';
import Carousel from '../components/carousel';
import Trailer from '../components/trailer'
import Popular_movies from '../components/popular_movies'
import './home.css'

class Home extends Component{
    render(){
        return(
            <div><div className="main">
                <Navbar />
                <div className="container">
                <Jumbotron title="playstar" subtitle="Now watch movies online on"/>
                </div>
                
                <div className="container">
                    <h1 style={{marginBottom: '2%' }}>Trending Trailers</h1>
                    
                </div>
                <div className="container">
                    <Carousel />
                </div>
                <h2 style={{margin: '2%',textAlign: 'center' }}>Trending Movies</h2>
                        <br/>
                <div className="container"> 
                    <Trailer />
                </div>

                <h2 style={{margin: '2%',textAlign: 'center' }}>Latest Movies</h2>
                        <br/>
                <div className="container"> 
                    <Popular_movies />
                </div>


                <h2 style={{margin: '2%',textAlign: 'center' }}>Popular in Action</h2>
                        <br/>
                <div className="container"> 
                    <Trailer />
                </div>

                <h2 style={{margin: '2%',textAlign: 'center' }}>Popular Shows</h2>
                        <br/>
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
export default Home;