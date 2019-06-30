import React ,{ Component} from 'react';
import pic1 from '../images/uri.jpg'
import pic2 from '../images/mib.jpg'
import pic3 from '../images/jumanji.jpg'
import pic4 from '../images/sanju.jpg'
import pic5 from '../images/avenger.jpg'
import pic6 from '../images/jumanji.jpg'
class carousel extends Component{
    render(){
        return(
            <div className="container">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active cont"  data-interval="2000" >
                        <img src={pic1} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item cont" data-interval="2000">
                        <img src={pic2} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item cont" data-interval="2000">
                        <img src={pic3} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item cont" data-interval="2000">
                        <img src={pic4} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item cont" data-interval="2000">
                        <img src={pic5} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item cont" data-interval="2000">
                        <img src={pic6} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
            </div>
        )
    }
}
export default carousel;